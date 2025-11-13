import fs from 'fs';
import path from "path";
import { DesignToken } from './models/design-token';

const getGlobalTokens = () => {
	try {
		const globalStylesPath = path.join('libs', 'frakton-ng', 'assets', 'styles', 'styles.css');
		const themingStylesPath = path.join('libs', 'frakton-ng', 'assets', 'styles', 'themes', 'light.css');

		if (!fs.existsSync(globalStylesPath)) {
			console.warn(`Warning: Global styles file not found at ${globalStylesPath}`);
			return {};
		}

		if (!fs.existsSync(themingStylesPath)) {
			console.warn(`Warning: Theming styles file not found at ${themingStylesPath}`);
			return {};
		}

		const globalStyles = fs.readFileSync(globalStylesPath, 'utf8');
		const themingStyles = fs.readFileSync(themingStylesPath, 'utf8');

		const globalTokens = globalStyles.match(/--.*:.*;/g) || [];
		const themingTokens = themingStyles.match(/--.*:.*;/g) || [];

		const result = [
			...globalTokens.map(token => {
				const [name, value] = token.split(':');
				return [name, value.trim().replace(';', '')];
			}),
			...themingTokens.map(token => {
				const [name, value] = token.split(':');
				return [name, value.trim().replace(';', '')];
			}),
		]

		return Object.fromEntries(result);
	} catch (error) {
		console.error('Error reading global tokens:', (error as Error).message);
		return {};
	}
}

const getTokens = (filePath: string) => {
	try {
		const globalTokens = getGlobalTokens();

		if (!fs.existsSync(filePath)) {
			console.warn(`Warning: File not found: ${filePath}`);
			return null;
		}

		const content = fs.readFileSync(filePath, 'utf8');

		const designTokensBlock = content.match(/\/\/\s*<design-tokens>([\s\S]*?)\/\/\s*<\/design-tokens>/gm)?.[0];

		if(!designTokensBlock) return null;

		const blocks = designTokensBlock.match(/\/\*([\s\S]*?)\*\//gm);

		if(!blocks || blocks.length === 0) {
			console.warn(`Warning: No token blocks found in ${filePath}`);
			return null;
		}

		const values: DesignToken[] = [];

		blocks.forEach(token => {
			try {
				const [description, ...rules] = token.replace('/*', '').replace('*/', '').split('\n').map(rule => rule.trim()).filter(Boolean);

				if (!description) {
					console.warn(`Warning: Token missing description in ${filePath}`);
					return;
				}

				const object: Record<string, string> = {
					description
				};

				rules.forEach(rule => {
					const match = rule.match(/@(\w*) (.*)/);

					if(!match) return;

					const [_, name, value] = match;

					object[name] = value;
				});

				if (!object["name"]) {
					console.warn(`Warning: Token missing @name property in ${filePath}: ${description}`);
					return;
				}

				if(object["reference"]) {
					object['defaultValue'] = globalTokens[object["reference"]] ?? object["reference"];
				}

				values.push(object as unknown as DesignToken);
			} catch (error) {
				console.error(`Error parsing token block in ${filePath}:`, (error as Error).message);
			}
		});

		return values.length > 0 ? values : null;
	} catch (error) {
		console.error(`Error reading file ${filePath}:`, (error as Error).message);
		return null;
	}
}


const removeRepeatedTokens = (tokens: DesignToken[]) => {
	const cleanedTokens: DesignToken[] = [];

	tokens.forEach(token => {
		if(cleanedTokens.find(cleanedToken => cleanedToken.name === token.name))
			return;

		cleanedTokens.push(token);
	});

	return cleanedTokens;
}

interface GenerateDesignTokensOptions {
	outputPath: string;
	directory: string;
}

export const generateDesignTokens = (options: GenerateDesignTokensOptions) => {
	try {
		if (!fs.existsSync(options.directory)) {
			console.error(`Error: Directory not found: ${options.directory}`);
			process.exit(1);
		}

		const files = fs.readdirSync(options.directory, { withFileTypes: true, recursive: true });

		const styleFileNames = files.map(dirent => path.join(dirent.parentPath, dirent.name)).filter(name => path.extname(name) === '.scss');

		const tokens = styleFileNames.map(getTokens).filter(token => !!token).flat();

		const cleanedTokens = removeRepeatedTokens(tokens);

		fs.writeFileSync(options.outputPath, JSON.stringify(cleanedTokens, null, 2));
	} catch (error) {
		throw error;
	}
}


import fs from 'fs';
import path from "path";

function kebabToCamel(str) {
	return str.replace(/-([a-z])/g, (match, p1) => p1.toUpperCase());
}

function kebabToPascalCase(input) {
	return input
		.split('-')
		.map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
		.join('');
}

const dirPath = process.argv[2];
const projectPath = process.argv[3];
const tokensName = process.argv[4];

const getGlobalTokens = () => {
	try {
		const projectPathSplit = projectPath.replace(/\\/g, '/').split('/');

		const globalStylesPath = path.join(...projectPathSplit, 'libs', 'frakton-ng', 'assets', 'styles', 'styles.css');
		const themingStylesPath = path.join(...projectPathSplit, 'libs', 'frakton-ng', 'assets', 'styles', 'themes', 'light.css');

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
		console.error('Error reading global tokens:', error.message);
		return {};
	}
}

const getTokens = (filePath) => {
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

		const values = [];

		blocks.forEach(token => {
			try {
				const [description, ...rules] = token.replace('/*', '').replace('*/', '').split('\n').map(rule => rule.trim()).filter(Boolean);

				if (!description) {
					console.warn(`Warning: Token missing description in ${filePath}`);
					return;
				}

				const object = {description};

				rules.forEach(rule => {
					const match = rule.match(/@(\w*) (.*)/);

					if(!match) return;

					const [_, name, value] = match;

					object[name] = value;
				});

				if (!object.name) {
					console.warn(`Warning: Token missing @name property in ${filePath}: ${description}`);
					return;
				}

				if(object.reference) {
					object['defaultValue'] = globalTokens[object.reference] ?? object.reference;
				}

				values.push(object);
			} catch (error) {
				console.error(`Error parsing token block in ${filePath}:`, error.message);
			}
		});

		return values.length > 0 ? values : null;
	} catch (error) {
		console.error(`Error reading file ${filePath}:`, error.message);
		return null;
	}
}


const removeRepeatedTokens = (tokens) => {
	const cleanedTokens = [];

	tokens.forEach(token => {
		if(cleanedTokens.find(cleanedToken => cleanedToken.name === token.name))
			return;

		cleanedTokens.push(token);
	});

	return cleanedTokens;
}


const run = () => {
	try {
		// Validate arguments
		if (!dirPath || !projectPath || !tokensName) {
			console.error('Error: Missing required arguments');
			console.log('Usage: node create-design-tokens.mjs <component-directory> <project-root> <component-name>');
			console.log('Example: node create-design-tokens.mjs libs/frakton-ng/button/src C:\\Users\\samuel\\programming\\frakton-ng button');
			process.exit(1);
		}

		if (!fs.existsSync(dirPath)) {
			console.error(`Error: Directory not found: ${dirPath}`);
			process.exit(1);
		}

		console.log(`Scanning directory: ${dirPath}`);
		console.log(`Project root: ${projectPath}`);
		console.log(`Component name: ${tokensName}`);

		const files = fs.readdirSync(dirPath, { withFileTypes: true, recursive: true });

		const styleFileNames = files.map(dirent => path.join(dirent.parentPath, dirent.name)).filter(name => path.extname(name) === '.scss');

		console.log(`Found ${styleFileNames.length} SCSS files:`, styleFileNames);

		const tokens = styleFileNames.map(getTokens).filter(Boolean).flat();

		if (tokens.length === 0) {
			console.warn('Warning: No design tokens found in any SCSS files');
			console.log('Make sure your SCSS files contain design token blocks with the format:');
			console.log('// <design-tokens>');
			console.log('/* Token documentation */');
			console.log('// </design-tokens>');
			return;
		}

		const cleanedTokens = removeRepeatedTokens(tokens);
		const outputPath = path.join(dirPath, `fkt-${tokensName}-design-tokens.json`);

		fs.writeFileSync(outputPath, JSON.stringify(cleanedTokens, null, 2));

		console.log(`✅ Successfully generated ${cleanedTokens.length} design tokens`);
		console.log(`📄 Output file: ${outputPath}`);
	} catch (error) {
		console.error('Error running script:', error.message);
		process.exit(1);
	}
}

run();

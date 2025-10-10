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
	const projectPathSplit = projectPath.replace('\\', '/').split('/');

	const globalStyles = fs.readFileSync(path.join(...projectPathSplit, 'libs', 'frakton-ng', 'assets', 'styles', 'styles.css'), 'utf8');
	const themingStyles = fs.readFileSync(path.join(...projectPathSplit, 'libs', 'frakton-ng', 'assets', 'styles', 'themes', 'light.css'), 'utf8');

	const globalTokens = globalStyles.match(/--.*:.*;/g);
	const themingTokens = themingStyles.match(/--.*:.*;/g);


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
}

const getTokens = (filePath) => {
	const globalTokens = getGlobalTokens();

	const content = fs.readFileSync(filePath, 'utf8');

	const designTokensBlock = content.match(/\/\/\s*<design-tokens>([\s\S]*?)\/\/\s*<\/design-tokens>/gm)?.[0];

	if(!designTokensBlock) return;

	const blocks =  designTokensBlock.match(/\/\*([\s\S]*?)\*\//gm);


	const values = [];

	blocks.forEach(token => {
		const [description, ...rules] = token.replace('/*', '').replace('*/', '').split('\n').map(rule => rule.trim()).filter(Boolean);

		const object = {description};

		rules.forEach(rule => {
			const match =  rule.match(/@(\w*) (.*)/);

			if(!match) return;

			const [_, name, value] = match;

			object[name] = value;
		});

		if(object.reference) {
			object['defaultValue'] = globalTokens[object.reference] ?? object.reference;
		}

		values.push(object);
	});

	return values;
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
	const files = fs.readdirSync(dirPath, { withFileTypes: true, recursive: true });

	const styleFileNames = files.map(dirent => path.join(dirent.parentPath, dirent.name)).filter(name => path.extname(name) === '.scss');

	const tokens = styleFileNames.map(getTokens).filter(Boolean).flat();

	fs.writeFileSync(path.join(dirPath, `fkt-${tokensName}-design-tokens.json`), JSON.stringify(removeRepeatedTokens(tokens), null, 2));
}

run();

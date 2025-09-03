import fs from 'fs';

const versionType = process.argv[2];

const allowedVersionTypes = ['major', 'minor', 'patch'];

if(!versionType)
	throw new Error('You must provide a valid versionType');

if(!allowedVersionTypes.includes(versionType))
	throw new Error(`Invalid version type for ${versionType}`);

const packageFile = fs.readFileSync('./package.json', 'utf8');

const packageJson = JSON.parse(packageFile);
const oldVersion = packageJson.version;

let [major, minor, patch] = oldVersion.split('.');

switch (versionType) {
	case 'major':
		patch = 0;
		minor = 0;
		major = parseInt(major, 10) + 1;
		break;
	case 'minor':
		patch = 0;
		minor = parseInt(minor, 10) + 1;
		break;
	case 'patch':
		patch = parseInt(patch, 10) + 1;
		break;
}

const newVersion = [major, minor, patch].join('.');

packageJson.version = newVersion;

console.log(`Version updated from "${oldVersion}" version to "${packageJson.version}" version`);

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, '	'));

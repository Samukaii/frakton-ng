// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import basicExampleStyles from "./basic-example/basic-example.component.scss" with {loader: "text"};
import basicExampleTypescript from "./basic-example/basic-example.component.ts" with {loader: "text"};
import profileCardStyles from "./profile-card/profile-card.component.scss" with {loader: "text"};
import profileCardTypescript from "./profile-card/profile-card.component.ts" with {loader: "text"};
import userListStyles from "./user-list/user-list.component.scss" with {loader: "text"};
import userListTypescript from "./user-list/user-list.component.ts" with {loader: "text"};


export default {
	BasicExampleComponent: {
		name: "BasicExample",
		files: [
		
			{
				name: "basic-example.component.ts",
				content: basicExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "basic-example.component.scss",
				content: basicExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	ProfileCardComponent: {
		name: "ProfileCard",
		files: [
		
			{
				name: "profile-card.component.ts",
				content: profileCardTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "profile-card.component.scss",
				content: profileCardStyles as string,
				language: "css" as "css",
			},		
		]
	},
	UserListComponent: {
		name: "UserList",
		files: [
		
			{
				name: "user-list.component.ts",
				content: userListTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "user-list.component.scss",
				content: userListStyles as string,
				language: "css" as "css",
			},		
		]
	},
} as Record<string, ExternalExample>;

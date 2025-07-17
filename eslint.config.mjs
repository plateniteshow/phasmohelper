import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
	{
		ignores: [
			"**/.angular/**",
			"**/dist/**",
			"**/node_modules/**",
		],
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		languageOptions: {
			globals: globals.browser,
		},
	},
	////////////
	// eslint //
	////////////
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		plugins: {
			js,
			"simple-import-sort": simpleImportSort,
		},
		extends: ["js/recommended"],
		rules: {
			////////
			// js //
			////////
			"array-element-newline": [
				"error",
				{
					minItems: 3,
					multiline: true,
				},
			],
			"comma-dangle": ["error", "always-multiline"],
			"object-curly-newline": [
				"error",
				{
					// eslint-disable-next-line quote-props
					"ObjectExpression": {
						consistent: true,
						minProperties: 2,
						multiline: true,
					},
					// eslint-disable-next-line quote-props
					"ObjectPattern": {
						consistent: true,
						minProperties: 3,
						multiline: true,
					},
					// eslint-disable-next-line quote-props
					"ImportDeclaration": {
						multiline: false,
					},
					// eslint-disable-next-line quote-props
					"ExportDeclaration": {
						consistent: true,
						minProperties: 2,
						multiline: true,
					},
				},
			],
			semi: [
				"error", "always",
			],
			"quote-props": [
				"error", "as-needed",
			],
			////////////////////////
			// simple-import-sort //
			////////////////////////
			"simple-import-sort/imports": [
				"warn",
				{
					groups: [
						// packages prefixed with `@angular`.
						[
							"^@angular\\/.*$",
							"^@nestjs\\/.*$",
							"rxjs",
							"socket.io",
							"express-session",
						],
						// Things that start with a letter (or digit or underscore), or `@` followed by a letter.
						[
							"^@core\\/.*$",
						],
						[
							"^@shared\\/.*$",
						],
						// Anything not matched in another group.
						["^"],
						// Anything that starts with a dot.
						["^\\."],
					],
				},
			],
		},
	},
	///////////////////////
	// typescript-eslint //
	///////////////////////
	tseslint.configs.recommended,
	{
		files: ["**/*.{ts,tsx}"],
		plugins: { "@typescript-eslint": tseslint.plugin },
		rules: {
			"@typescript-eslint/explicit-function-return-type": [
				"error",
				{
					allowExpressions: true,
					allowTypedFunctionExpressions: true,
					allowHigherOrderFunctions: true,
				},
			],
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/member-ordering": [
				"error",
				{
					default: [
						// 1. Signatures
						"signature",

						// 2. Static fields
						"public-static-field",
						"protected-static-field",
						"private-static-field",

						// 3. Static methods
						"public-static-method",
						"protected-static-method",
						"private-static-method",

						// 4. Instance fields
						"public-readonly-field",
						"public-field",

						"protected-readonly-field",
						"protected-field",

						"private-readonly-field",
						"private-field",

						// 5. Constructors
						"public-constructor",
						"protected-constructor",
						"private-constructor",

						// 6. Getters and sets
						[
							"public-get", "public-set",
						],
						[
							"protected-get", "protected-set",
						],
						[
							"private-get", "private-set",
						],

						// 7. Instance methods
						"public-method",
						"protected-method",
						"private-method",
					],
				},
			],
			"@typescript-eslint/explicit-member-accessibility": [
				"error",
				{
					accessibility: "explicit",
					overrides: {
						constructors: "no-public",
					},
				},
			],
		},
	},
]);

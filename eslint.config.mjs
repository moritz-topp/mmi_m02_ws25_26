import eslintConfig from "@antfu/eslint-config";
import prettier from "eslint-plugin-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default eslintConfig(
	// General
	{
		stylistic: {
			indent: "tab",
			quotes: "double"
		},
		rules: {
			curly: "off",
			"no-console": "off"
		},
		formatters: {
			css: true,
			html: true
		}
	},
	// Prettier (as ESLint rule)
	eslintPluginPrettierRecommended,
	{
		plugins: { prettier },
		rules: {
			"prettier/prettier": [
				"error",
				{
					bracketSpacing: true,
					printWidth: 120,
					singleQuote: false,
					semi: true,
					useTabs: true,
					tabWidth: 4,
					trailingComma: "none"
				}
			]
		}
	},
	{
		files: ["**/*.yml", "**/*.yaml"],
		rules: {
			"prettier/prettier": [
				"error",
				{
					tabWidth: 2,
					useTabs: false
				}
			]
		}
	}
);

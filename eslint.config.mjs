import antfu from "@antfu/eslint-config"

export default antfu(
	{
		formatters: true,
		stylistic: {
			indent: "tab",
			quotes: "double",
		},
		vue: {
			overrides: {
				"no-alert": "off",
				"no-console": "off",
				"vue/script-indent": ["error", "tab", {
					baseIndent: 1,
				}],
				"style/indent": "off",
				"vue/block-order": ["error", {
					order: ["template", "script", "style"],
				}],
			},
		},
	},
)

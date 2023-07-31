/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
	endOfLine: "crlf",
	useTabs: true,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "es5",
	printWidth: 80,
	importOrder: [
		"^(react/(.*)$)|^(react$)",
		"^(next/(.*)$)|^(next$)",
		"<THIRD_PARTY_MODULES>",
		"",
		"^types$",
		"^@/types/(.*)$",
		"^@/config/(.*)$",
		"^@/lib/(.*)$",
		"^@/hooks/(.*)$",
		"^@shadcn/(.*)$",
		"^@/components/(.*)$",
		"^@/styles/(.*)$",
		"^@/app/(.*)$",
		"",
		"^[./]",
	],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	plugins: [
		"@ianvs/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],
};

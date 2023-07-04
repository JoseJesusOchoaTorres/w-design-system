/**
 * RULES INFORMATION:
 *
 * https://commitlint.js.org/#/reference-rules
 *
 *
 * COMMIT TYPE ENUMS:
 *
 * build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
 * ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
 * docs: Documentation only changes
 * feat: A new feature
 * fix: A bug fix
 * perf: A code change that improves performance
 * refactor: A code change that neither fixes a bug nor adds a feature
 * style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
 * test: Adding missing tests or correcting existing tests
 * translation: Updating or adding new translations
 * security: Security paths or changes to improve it
 *
 *
 * COMMIT MESSAGE EXAMPLE:
 *
 * feat(JiraTicketID): description message
 * feat(ALP-123): my commit message
 */
module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"body-leading-blank": [1, "always"],
		"body-max-line-length": [2, "always", 120],
		"footer-leading-blank": [1, "always"],
		"footer-max-line-length": [2, "always", 120],
		"header-max-length": [2, "always", 120],
		"scope-case": [2, "always", "lower-case"],
		"subject-case": [2, "always", "lower-case"],
		"subject-empty": [2, "never"],
		"subject-full-stop": [2, "never", "."],
		"type-case": [2, "always", "lower-case"],
		"type-empty": [2, "never"],
		"type-enum": [
			2,
			"always",
			[
				"build",
				"ci",
				"docs",
				"feat",
				"fix",
				"perf",
				"refactor",
				"revert",
				"style",
				"test",
				"translation",
				"security",
			],
		],
	},
}

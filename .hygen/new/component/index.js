module.exports = {
	prompt: ({ inquirer }) => {
		const questions = [
			{
				type: "input",
				name: "component_name",
				message:
					"What is the component name? Please make sure you use Pascal case. For example: AwesomeComponent",
			},
		]
		return inquirer.prompt(questions).then((answers) => {
			const { component_name } = answers
			const absPath = `src/components/${component_name}`
			return { ...answers, absPath }
		})
	},
}

const {get,write} = require("../database")

module.exports = {
	data: {
		"name": "schedule",
		"description": "Visit the presentations database",
		"options": [
		  {
			"type": 1,
			"name": "events",
			"description": "Hack Horsham events "
		  },
		  {
			"type": 1,
			"name": "presentations",
			"description": "Presentations database",
			"options": [
			  {
				"type": 5,
				"name": "previous",
				"description": "Show previous presentations"
			  }
			]
		  }
		]
	  },
	async execute(interaction) {
		console.log(interaction)
		if (interaction.options._subcommand === "presentations") {

			let text = "Presentations:\n"
			let data = await get("presentations")
			data.forEach(pres => {
				text += `${pres.name} (${pres.description || "No description given"}) by ${pres.presenter || "N/A"}\n`
			})
			return interaction.reply(text);

		} else if (interaction.options._subcommand === "events") {
			
			return interaction.reply('Events are fun!');

		}
	},
};
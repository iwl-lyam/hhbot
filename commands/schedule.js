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
		if (interaction.options._subcommand === "presentations") {

			let text = { content: "Presentations:", embeds: [] }
			let data = await get("presentations")
			data.forEach(pres => {
				text.embeds.push({
					color: 0x2a3fe1,
					title: "Presentation",
					fields: [
						{ name: "Name", value: pres.name, inline: true },
						{ name: "Description", value: pres.description, inline: true },
						{ name: "Notes", value: pres.notes || "None", inline: true },
						{ name: "Presenter", value: pres.presenter, inline: true }
					]
				})
			})
			return interaction.reply(text);

		} else if (interaction.options._subcommand === "events") {

			return interaction.reply('Events are fun!');

		}
	},
};
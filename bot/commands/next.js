const {get,write} = require("../../database")

module.exports = {

	data: {
		"type": 1,
		"name": "next",
		"description": "Show next meetup"
	},

	async execute(interaction) {
		let text = { embeds: [] }

		var day = new Date();
		var firstDay = new Date(day.getFullYear(), day.getMonth(), 1);
		day.setDate(14-firstDay.getDay());

		text.embeds.push({
			color: 0x2a3fe1,
			title: "Next session",
			fields: [
				{ name: "Date", value: day, inline: true },
				{ name: "Start Time", value: "14:00", inline: true },
				{ name: "End Time", value: "17:00", inline: true },
				{ name: "Location", value: "Laurie Apted Building, Southwater, Horsham, RH13 9BT", inline: true }
			]
		})

		return interaction.reply(text);
	}
	
};
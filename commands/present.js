const {get,write} = require("../database")

module.exports = {
	data: {
    "name": "present",
    "description": "Present at Hack Horsham",
    "options": [
      {
        "type": 3,
        "name": "name",
        "description": "Presentation name",
        "required": true
      },
      {
        "type": 3,
        "name": "description",
        "description": "Short summary of your presentation",
        "required": true
      },
      {
        "type": 3,
        "name": "notes",
        "description": "Any notes (required hardware/software, specific meeting link, etc)"
      }
    ]
  },
	async execute(interaction) {
    let data = {
      name: interaction.options.getString("name"),
      description: interaction.options.getString("description"),
      notes: interaction.options.getString("notes"),
      presenter: `<@${interaction.user.id}>`
    }

		let presentations = await get("presentations")
    presentations.push(data)
    write("presentations", presentations)

    return interaction.reply({embeds: [
      {
        color: 0x2a3fe1,
        title: "Presentation logged",
        fields: [
          { name: "Name", value: data.name },
          { name: "Description", value: data.description },
          { name: "Notes", value: data.notes || "None" }
        ]
      }
    ]})
	},
};
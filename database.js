const fs = require("node:fs")

async function get(property) {
    let file = JSON.parse(fs.readFileSync("./database.json"))
    return file[property]
}

async function write(property, value) {
    let file = JSON.parse(fs.readFileSync("./database.json"))
    file[property] = value
    fs.writeFileSync("./database.json", JSON.stringify(file))
}

module.exports = {get,write}
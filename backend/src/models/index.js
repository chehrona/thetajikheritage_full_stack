const dbConfig = require("../../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.poet = require("./poet.model.js")(mongoose);
db.recipe = require("./recipe.model.js")(mongoose);
db.creature = require("./creature.model.js")(mongoose);

module.exports = db;
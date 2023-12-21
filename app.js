const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();

const bot = new Eris(process.env.OTk5ODA1MzA0Nzc2Njg3NjM2.GDObMb.x12V1EWT8gJ1AersnNwcOsFBw0b_QaxstdbiX4);

bot.connect();

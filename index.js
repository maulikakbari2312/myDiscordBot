import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();
const TOKON = process.env.TOKON;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create ")[1];
    return message.reply({
      content: "Generating short Id for " + url,
    });
  }
  message.reply({
    content: "Hi from Bot",
  });
});

client.on("interactionCreate", (interction) => {
  console.log(interction);
  interction.reply("pong!");
});

client.login(TOKON);

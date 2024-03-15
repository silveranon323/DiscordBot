import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  //   console.log(message.content);
  if (message.author.bot) {
    return;
  }
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Content generating for short ID for " + url,
    });
  }
  message.reply({
    content: "Hello silveranon",
  });
});
client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("pong");
});

client.login(
  
  process.env.BOT_TOKEN
);


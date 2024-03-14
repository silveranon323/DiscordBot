import { Client, GatewayIntentBits } from "discord.js";
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
  message.reply({
    content: "Hello silveranon",
  });
});
client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply('pong');
});
client.login(
  "MTIxNzcwMzQyMTM0MDAyODkyOA.Gqnhui.no_4ZI2HySQSJolmzYFXJUFyZx1VNskCeYCqWw"
);

import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
  console.log(message.content);
});
client.login(
  "MTIxNzcwMzQyMTM0MDAyODkyOA.GpybfE.uzbII9IRlsa_ISsT2LLUgYgQqB-QAIotJR9iXo"
);

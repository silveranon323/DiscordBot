import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();
const commands = [
  {
    name: "create",
    description: "Creates a short url",
  },
];
const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);
async function refreshCommands() {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
refreshCommands();

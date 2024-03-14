import { REST, Routes } from "discord.js";
const commands = [
  {
    name: "create",
    description: "Creates a short url",
  },
];
const rest = new REST({ version: "10" }).setToken(
  "MTIxNzcwMzQyMTM0MDAyODkyOA.Gqnhui.no_4ZI2HySQSJolmzYFXJUFyZx1VNskCeYCqWw"
);
async function refreshCommands() {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1217703421340028928"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
refreshCommands();

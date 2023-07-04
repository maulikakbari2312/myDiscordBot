import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "create",
    description: "creates a new short URL",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTEyNTI5Mjg1MTY4NTc2NTE1MA.G0spJ7.YkA3M_1Kog6nV7lLxFCt-Db4JKoArCjS8AOkhw"
);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(process.env.CLIENTID), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}

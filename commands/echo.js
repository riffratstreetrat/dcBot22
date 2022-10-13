const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!')
    .addUserOption(option =>
        option.setName('username')
        .setDescription('the user who ordered the command')
        .setRequired(true))

    .addStringOption(option =>
        option.setName('input')
            .setDescription('The input to echo back')
            .setRequired(true));


module.exports = {
    data,
    async execute(interaction) {
        let message = interaction.options.getUser('username').getString('input');
        await interaction.reply(message);
    },
};

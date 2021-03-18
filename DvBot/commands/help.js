module.exports = {
	name: 'help',
	description: 'Devuelve los comandos disponibles del bot',
	run(client,message, args) {
		const Discord = require('discord.js');
		const { prefix } = require('../config.json');
		const data = [];
		const { commands } = message.client;
		if (!args.length) {   
			const comEmbed = new Discord.MessageEmbed()
			  .setTitle("Mis comandos:")
			  .setColor('#7289da')
			  .setThumbnail(client.user.displayAvatarURL())
			  .setDescription(commands.map(cmd => "`"+`${prefix}`+cmd.name+"`"+": "+cmd.description).join("\n"));

			return message.channel.send(comEmbed)
			 
		}
	}
}
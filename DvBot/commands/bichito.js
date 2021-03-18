module.exports = {
	name: 'bichito',
	description: 'Devuelve bichito',
	run(client, message, args) {
        const {Client, MessageAttachment} = require('discord.js');
        const attachment = new MessageAttachment('./assets/BichitoRaro.gif')
        if (!args.length) {
		message.channel.send("||***HOLAAA***||",attachment)
		}
	},
};
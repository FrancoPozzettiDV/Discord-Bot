module.exports = {
	name: 'clear',
	description: 'Elimina una cantidad de mensajes',
	args: true,
	usage: '<numero>',
	run(client, message, args) {
        if(isNaN(args[0])) return message.reply("Por favor, ingresá un número")
        message.channel.bulkDelete(args[0]);
	},
};
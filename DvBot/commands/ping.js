module.exports = {
	name: 'ping',
	description: 'Devuelve un mensaje',
	run(client, message, args) {
		if (!args.length) {
		message.channel.send('Wazoo!');
		}
	},
};
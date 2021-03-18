module.exports = {
	name: 'info',
	description: 'Devuelve información del bot y sus desarrolladores',
	run(client, message, args) {
        const {version} = require('../config.json');
        if (!args.length) {
		message.channel.send("\nSoy un bot creado por Ivan O'Connell y Franco Pozzetti\nVersión: "+ version);
        }
	},
};
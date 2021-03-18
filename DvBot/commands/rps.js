module.exports = {
	name: 'rps',
	description: 'Juega piedra, papel o tijera con el usuario',
	args:true,
	usage: '<movimiento>',
	run(client, message, args) {
		const acceptedReplies = ['piedra', 'papel', 'tijera'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Solo estos argumentos son aceptados: \`${acceptedReplies.join(', ')}\``);
        
        message.channel.send('Mi respuesta: '+result);

        if (result === choice) return message.channel.send("¡Empate!");
        
        switch (choice) {
            case 'piedra': {
                if (result === 'papel') return message.channel.send('¡Gané!');
                else return message.reply('¡Ganaste!');
                
            }
            case 'papel': {
                if (result === 'tijera') return message.channel.send('¡Gané!');
                else return message.reply('¡Ganaste!');
                  
            }
            case 'tijera': {
                if (result === 'piedra') return message.channel.send('¡Gané!');
                else return message.reply('¡Ganaste!');
                
            }
        }
	},
};
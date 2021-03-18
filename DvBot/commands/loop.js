module.exports = {
	name: 'loop',
	description: 'Activa/Desactiva el loop de canciones',
	run: async(client,message, args) =>{
        
        const voiceChannel = message.member.voice.channel;
        const serverQueue = client.queue.get(message.guild.id);
        if(!voiceChannel) return message.channel.send("Necesitas estar en un canal de voz para modificar el loop")
        if(!serverQueue) return message.channel.send("No hay canciones para hacer loop")
        if (!args.length) {
		serverQueue.loop = !serverQueue.loop;
		return message.channel.send(`Modo Loop: ${serverQueue.loop ? "**ON**" : "**OFF**"}`)
        }
        return undefined
		
	},
};
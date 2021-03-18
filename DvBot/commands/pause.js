module.exports = {
	name: 'pause',
	description: 'Pausa la canción que se está reproduciendo',
	run: async(client,message, args) =>{
        
        const voiceChannel = message.member.voice.channel;
        const serverQueue = client.queue.get(message.guild.id);
        if(!voiceChannel) return message.channel.send("Necesitas estar en un canal de voz para pausar")
        if(!serverQueue) return message.channel.send("No hay canción para pausar")
        if(!serverQueue.playing) return message.channel.send("La música ya está en pausa")
        if (!args.length) {
		serverQueue.playing = false
        serverQueue.connection.dispatcher.pause()
        message.channel.send("La canción está en pausa")
        }
        return undefined
		
	},
};
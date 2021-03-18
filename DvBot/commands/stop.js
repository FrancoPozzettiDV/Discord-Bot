module.exports = {
	name: 'stop',
	description: 'Deja de reproducir música y sale del canal de voz',
	run: async(client,message, args) =>{
        
        const voiceChannel = message.member.voice.channel;
        const serverQueue = client.queue.get(message.guild.id);
        if(!voiceChannel) return message.channel.send("Necesitas estar en un canal de voz para parar")
        if(!serverQueue) return message.channel.send("No hay canción para parar")
        if (!args.length) {
		serverQueue.songs = []
        serverQueue.connection.dispatcher.end()
        message.channel.send("La música ha terminado")
        }
        return undefined
		
	},
};
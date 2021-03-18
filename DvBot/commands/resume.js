module.exports = {
	name: 'resume',
	description: 'Vuelve a reproducir la canción que estaba en pausa',
	run: async(client,message, args) =>{
        
        const voiceChannel = message.member.voice.channel;
        const serverQueue = client.queue.get(message.guild.id);
        if(!voiceChannel) return message.channel.send("Necesitas estar en un canal de voz para resumir")
        if(!serverQueue) return message.channel.send("No hay canción para resumir")
        if(serverQueue.playing) return message.channel.send("Ya estoy reproduciendo música")
        if (!args.length) {
		serverQueue.playing = true
        serverQueue.connection.dispatcher.resume()
        message.channel.send("La canción ha vuelto a reproducirse")
        }
        return undefined
		
	},
};
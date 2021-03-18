module.exports = {
	name: 'skip',
	description: 'Reproduce la siguiente canción en la lista',
	run: async(client,message, args) =>{
        
        const voiceChannel = message.member.voice.channel;
        const serverQueue = client.queue.get(message.guild.id);
        if(!voiceChannel) return message.channel.send("Necesitas estar en un canal de voz para saltar a la siguiente canción")
        if(!serverQueue) return message.channel.send("No hay canción para saltar")
        if (!args.length) {
		serverQueue.connection.dispatcher.end()
        message.channel.send(`Canción saltada por ${message.author.username}`)
        }
        return undefined
		
	},
};
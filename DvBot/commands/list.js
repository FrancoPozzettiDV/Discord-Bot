module.exports = {
	name: 'list',
	description: 'Devuelve la lista de canciones que están en cola',
	run: async(client,message, args) =>{
        
        const serverQueue = client.queue.get(message.guild.id);
        if(!serverQueue) return message.channel.send("No hay ninguna lista")
		if (!args.length) {
        message.channel.send(`
        __**Canciones en cola**__\n${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}\n**Estás escuchando:** ${serverQueue.songs[0].title}
        `,{split: true})
        }
        return undefined
		
	},
};
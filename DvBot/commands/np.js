module.exports = {
	name: 'np',
	description: 'Devuelve el nombre de la canción que se está reproduciendo',
	run: async(client,message, args) =>{
        
        const serverQueue = client.queue.get(message.guild.id);
        if(!serverQueue) return message.channel.send("No hay ninguna canción")
		if (!args.length) {
        message.channel.send(`Estás escuchando: **${serverQueue.songs[0].title}**`)
        }
        return undefined
		
	},
};
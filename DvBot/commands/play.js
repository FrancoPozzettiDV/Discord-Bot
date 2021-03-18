module.exports = {
	name: 'play',
	description: 'Reproduce audio de un video en el canal de voz',
	args: true,
	usage: '<link de video>',
	run: async(client,message, args) =>{
		
		const Discord = require("discord.js");
		const ytdl = require("ytdl-core");
        const voiceChannel = message.member.voice.channel;
        const serverQueue = message.client.queue.get(message.guild.id);
        if(!voiceChannel) return message.channel.send("Necesitas estar en un canal de voz para reproducir")
        const permissions = voiceChannel.permissionsFor(message.client.user)
        if(!permissions.has('CONNECT')) return message.channel.send("No tengo permisos para conectarme al canal de voz")
        if(!permissions.has('SPEAK')) return message.channel.send("No tengo permisos para hablar en el canal")
		
		const YT_REG = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
        if(!YT_REG.test(args[0])) return message.channel.send('Por favor, ingresá un link de YouTube')
		
		const songInfo = await ytdl.getInfo(args[0])
        const song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url
        }
		

        if(!serverQueue){
            const queueConstruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
				loop: false,
                songs: [],
                volume: 5,
                playing: true
            }
            message.client.queue.set(message.guild.id, queueConstruct)
            queueConstruct.songs.push(song)

            try{
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection
                play(message.guild,queueConstruct.songs[0])
            }catch(error){
                console.log(`Hubo un error conectando al canal de voz: ${error}`)
                serverQueue.delete(message.guild.id)
                return message.channel.send(`Hubo un error conectando al canal de voz: ${error}`)
            }
        }else{
            serverQueue.songs.push(song)
            return message.channel.send(`**${song.title}** fue agregado a la lista`)
        }
        return undefined

       
        function play(guild, song){
            const serverQueue = message.client.queue.get(message.guild.id);
            
            if(!song){
                serverQueue.voiceChannel.leave()
                message.client.queue.delete(message.guild.id)
                return
            }
            
            const dispatcher = serverQueue.connection.play(ytdl(song.url)).on('finish', () =>{
            if(serverQueue.loop) serverQueue.songs.push(serverQueue.songs.shift());
			else serverQueue.songs.shift();
            play(guild,serverQueue.songs[0])
            }).on('error', error =>{
                console.log(error)
            })
            dispatcher.setVolumeLogarithmic(serverQueue.volume / 5)
            serverQueue.textChannel.send(`Reproduciendo: **${song.title}**`)

            }
        
	},
};
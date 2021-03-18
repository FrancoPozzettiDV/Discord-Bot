module.exports = {
	name: 'davinci',
	description: 'Embed informativo del Instituto Da Vinci',
	run(client, message, args) {
        const Discord = require('discord.js');
        if (!args.length) {
		const dvEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Instituto Da Vinci')
        .setURL('https://davinci.edu.ar/')
        .setDescription('Carreras y Titulos')
        .setThumbnail('https://pbs.twimg.com/profile_images/1164994021753839616/fm54nGSg_400x400.jpg')
        .addFields(
            { name: 'Diseño Multimedial', value: 'Diseñador Multimedial (3 años)' },
            { name: 'Diseño Gráfico', value: 'Diseñador Gráfico Artístico Digital (3 años)' },
            { name: 'Programación de Videojuegos', value: 'Diseñador y Programador de Simuladores Virtuales (3 años)' },
            { name: 'Cine de Animación y Postproducción', value: 'Realizador Integral de Animación y Cine Digital (3 años)' },
            { name: 'Diseño y Programación Web', value: 'Técnico Superior en Diseño y Programación Web (2 años)' },
            { name: 'Analista de Sistemas', value: 'Analista de Sistemas (3 años)' },
        );

        message.channel.send(dvEmbed);
		}
	},
};
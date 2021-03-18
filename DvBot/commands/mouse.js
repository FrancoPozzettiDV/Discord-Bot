module.exports = {
	name: 'mouse',
	description: 'Devuelve imágen de r/PetMice',
	run: async(client,message, args) =>{
		
		const Discord = require("discord.js");
		const rp = require("random-puppy");
		
		const subReddit = "PetMice"
		const img = await rp(subReddit);
		const embed = new Discord.MessageEmbed().setImage(img).setTitle(`From /r/${subReddit}`).setURL(`https://www.reddit.com/r/${subReddit}`)

		return message.channel.send(embed);
		
	},
};
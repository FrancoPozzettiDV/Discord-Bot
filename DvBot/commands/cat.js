module.exports = {
	name: 'cat',
	description: 'Devuelve imágen de r/catpictures y r/CatsStandingUp',
	run: async(client,message, args) =>{
		
		const Discord = require("discord.js");
		const rp = require("random-puppy");
		
		const subReddits = ["catpictures" , "CatsStandingUp"]
		const random = subReddits[Math.floor(Math.random() * subReddits.length)];
		const img = await rp(random);
		const embed = new Discord.MessageEmbed().setImage(img).setTitle(`From /r/${random}`).setURL(`https://www.reddit.com/r/${random}`)

		return message.channel.send(embed);
		
	},
};
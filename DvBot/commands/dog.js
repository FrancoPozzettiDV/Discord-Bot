module.exports = {
	name: 'dog',
	description: 'Devuelve imágen de r/dogpictures, r/puppies y r/lookatmydog',
	run: async(client,message, args) =>{
		
		const Discord = require("discord.js");
		const rp = require("random-puppy");
		
		const subReddits = ["dogpictures" , "puppies" , "lookatmydog"]
		const random = subReddits[Math.floor(Math.random() * subReddits.length)];
		const img = await rp(random);
		const embed = new Discord.MessageEmbed().setImage(img).setTitle(`From /r/${random}`).setURL(`https://www.reddit.com/r/${random}`)

		return message.channel.send(embed);
		
	},
};
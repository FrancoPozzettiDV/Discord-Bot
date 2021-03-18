module.exports = {
	name: 'roll',
	description: 'Devuelve un número aleatorio entre 1 y el número que pase como argumento',
	args:true,
	usage: '<numero>',
	run(client, message, args) {
        if(isNaN(args[0])) return message.reply("Por favor, ingresá un número")   
        message.reply(`Tu número es: `  + getRandomNumber(args[0]) + ` (1-${args[0]})`);
        
        function getRandomNumber(numero) {
            return Math.floor(Math.random() * numero) + 1
          }
    
    },
};
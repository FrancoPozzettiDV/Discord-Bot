const fs = require('fs'); //Permite interactuar con el file system
const Discord = require('discord.js'); //Importación de la librería
const { prefix, discordToken} = require('./config.json'); //Todos los datos importantes que utilizamos durante el proyecto estan guardados en este archivo

const client = new Discord.Client(); //Creación de un nuevo cliente de Discord (nuestro bot)
client.queue = new Map(); //Crea un mapa que se utiliza para crear la lista de videos
client.commands = new Discord.Collection(); //Crea una colección
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); //Array de todos los nombres de archivos que terminen en js

//Recorre el array de archivos y agrega cada uno a la coleccion
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//Cuando se inicializa el bot, hace lo siguiente 
//Utilizando "once", hacemos que se ejecute una sola vez
client.once('ready', () =>{
    console.log('Bot en línea ;D');
})

//Cuando un nuevo usuario entra al servidor, devuelve un mensaje de bienvenida
//Utilizando "on", hacemos que pueda volver a ejecutarse a lo largo de su vida
client.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === 'general');
    if(!channel) return;
    channel.send(`Bienvenido ** ${member.user.username} ** a nuestro servidor!! \nSi necesita mi ayuda, escriba **!help**`)
})


//Cada mensaje que escriben los usuarios esta controlado aqui
client.on('message', async mensaje =>{

    //Si el mensaje no contiene el prefijo o el autor del mensaje es el bot, hacer nada
	if(!mensaje.content.startsWith(prefix) || mensaje.author.bot) return; 
    
	
    //args saca el prefijo y crea un array separado por los espacios
    //commandName saca el primer elemento del array de args (el comando que necesitamos)
	const args = mensaje.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    

    //Si no existe el comando, no hace nada
    if (!client.commands.has(commandName)) return;
	
	//El comando que ingreso el usuario
    const command = client.commands.get(commandName);
    
	
    //Si el comando funciona con argumentos y no hay ninguno le avisa al usuario. 
	//Ademas, si hay ejemplos de argumentos (usage) le dice como utilizar corractamente el comando
    if(command.args && !args.length){
        let reply = `Debe ingresar argumentos, ${mensaje.author}`

        if(command.usage){
            reply += `\nEl comando correcto sería: \`${prefix}${command.name} ${command.usage}\``;
        }

        return mensaje.channel.send(reply);
    }
	
	
	//Ejecuta el comando. Si hay un error, imprime en consola y avisa al usuario
    try {
	    command.run(client,mensaje, args);
    } catch (error) {
	    console.error(error);
	    mensaje.channel.send(`Hubo un error al ejecutar el comando, ${mensaje.author.username}!`);
    }
    
})

//El bot hace el login con nuestro token
client.login(discordToken);


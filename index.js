require('dotenv').config()
const Discord = require("discord.js")
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready',()=>{
        console.log('Bot is online');
        setInterval(()=>{
                var validAplhs = ['0','1','2','3','4','5','6','7',
                                  '8','9','a','b','c','d','e','f']
                var randomColour='#'
                for(let i=0;i<6;i++){
                        let newAplh=Math.round(Math.random()*validAplhs.length)
                        if(newAplh === 16)
                                newAplh=15
                        randomColour+=validAplhs[newAplh]
                }                
                var guild=client.guilds.cache.get(config.guild)
                for(var role in config.roles){
                        let guildRole = guild.roles.cache.get(config.roles[role])
                        guildRole.setColor(randomColour)
                }
        },2000)
})


client.login(process.env.BOT_TOKEN)
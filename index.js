require('dotenv').config()
const Discord = require("discord.js")
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready',()=>{
        console.log('Bot is online');
        var flag=false;
        var guild=client.guilds.cache.get(config.guild)
        setInterval(()=>{
                // var validAplhs = ['0','1','2','3','4','5','6','7',
                // '8','9','a','b','c','d','e','f']
                // var randomColour='#'
                // for(let i=0;i<6;i++){
                //         let newAplh=Math.round(Math.random()*validAplhs.length)
                //         if(newAplh === 16)
                //         newAplh=15
                //         randomColour+=validAplhs[newAplh]
                // }   
                var colours = ['#FE000F','#0054FF','#00FD09','#FFF600']          
                for(var role in config.roles){
                        let guildRole = guild.roles.cache.get(config.roles[role])
                        let color = Math.round(Math.random()*colours.length)
                        if(color === 4)
                                color=3
                        guildRole.setColor(colours[color])
                        //console.log(colours[color])
                }
        },1*1000)
        // setInterval(async ()=>{
        //         var nicks=["SVGムParZivaL","test"]
        //         // var nicks=["★𝙋Δ𝙉𝙕Ξ𝙍★","ĐV么666-IRØN"]
        //         var guildMember = await guild.members.fetch(config.member)
        //         flag?guildMember.setNickname(nicks[0]):guildMember.setNickname(nicks[1]);
        //         flag=!flag;
        // },2*1000)
})


client.login(process.env.BOT_TOKEN)

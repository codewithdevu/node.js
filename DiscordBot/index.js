import { Client, Events, GatewayIntentBits, InteractionCallback, Message, messageLink } from 'discord.js';
import axios from "axios";
import 'dotenv/config';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate" , async (message) => {
    
    if(message.author.bot) return ;
    
    if(message.content.startsWith("create")) {
        const url = message.content.split(" ")[1];
        
        message.reply("Generating short id ..." );
        
        try {
            const res = await axios.post(
                "http://localhost:5001/url",
                {url}
            );
            // console.log("API RESPONSE:", res.data);
            
            const shortId = res.data.shortId;
            
            message.reply(
                `Short Url: http://localhost:5001/url/${shortId}`
            );  
        } catch (err) {
            message.reply("Error creating short url");
            // console.log(err.response?.data || err.message);
        }
    };
    
});

client.on("interactionCreate", (InteractionCallback) => {
    console.log(InteractionCallback);
    InteractionCallback.reply("pong!!")

})


client.login(process.env.DISCORD_TOKEN)



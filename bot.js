const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () =>{
  
    console.log('Bot sudah Siap dipakai !');
})



var prefix = "f." //Ganti dengan prefix yang kamu mau

  
  
client.on('message', msg => {
  let status = ['moba kok analog']
  
  
    
  if (msg.content === 'ping') {

    msg.reply('pong :kissing_heart:');

}
  
  
  
  if (msg.content === 'sudah punya pacar') {

    msg.reply('saya jomblo sayang :kissing_heart:');

}
  
    if (msg.content === 'jadi pacar ku yok') {

    msg.reply('homo jancok kau !!!!');

}
  
  if (msg.content === 'halo') {

    msg.reply('halo juga :v');

}


});

client.login(process.env.NTM0NzI3MzA5ODkwOTQ1MDI1.Dx90Jw.MmCOl39jg0ETh-z2YSGttEzZFMk);

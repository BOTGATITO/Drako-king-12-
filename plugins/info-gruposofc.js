let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
let str = `*💥 𝐆𝐫𝐮𝐩𝐨𝐬 𝖔𝖋𝖎𝖈𝖎𝖆𝖑𝖊𝖘 𝐃𝐫𝐚𝐤𝐨*

   *_〾̷̸‣⃝⃨⃛⃰⁝̵̓ᝒ̷̸͙👑𝐃𝐫𝐚𝐤𝐨-𝐁𝐨𝐭❄︎⋰⋰𝝣⃯ᵴͦ𝛒⃨ᷫ𝛆ͨ🄲⃪⃯𝛊ᷨ𝛂⃨ͦꝆ᷽ͭ🍁⃝⃙̻⃮̋⃛⃰⁌̷̸̊͟⿻᳔̶̷̸_*
  ┃👑❏ ${gp1}

   *♥︎👑⃟፝ᰯ🌹𝑮𝒓𝒖𝒑𝒐 𝑶𝒇𝒄 𝒅𝒓𝒂𝒌𝒐🌹፝⃟ᰯུ👑♥︎*
┃🪄❏ https://chat.whatsapp.com/Jjs2l4X3LdP7RHr06WsasW
   
   *♥︎👑⃟፝ᰯ🌹𝑮𝒓𝒖𝒑𝒐 𝑺𝒖𝒃𝒃𝒐𝒕𝒔🌹፝⃟ᰯུ👑♥︎*
┃🪄❏ https://chat.whatsapp.com/Db9TD8uwhwKIKZmIxDd63e

   *♥︎👑⃟፝ᰯ🌹𝑪𝒂𝒏𝒂𝒍 𝑶𝒇𝒄 𝑫𝒓𝒂𝒌𝒐🌹፝⃟ᰯུ👑♥︎*
┃🪄❏ https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t
*_╰━━━━━━━━━━━━━━━━⊜_*
`
await conn.sendButton(m.chat, str, `͟͞ 𓆩ꪶꪾ𝑫𝒓𝒂𝒌𝒐-𝑩𝒐𝒕⋰⋰𝕭𝖞 𝐊𝐢𝐧𝐠ꫂৎ୭࠱࠭ \n` + wm, media, [
['Menu Lista 👑', '/lista']], null, [
['⏤𝕹𝖆𝖐𝖆𝖓𝖔-𝕭𝖔𝖙࿐', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler

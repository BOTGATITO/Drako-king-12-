let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `💟 *𝕰𝖖𝖚𝖎𝖕𝖔 𝖍 𝖆𝖉𝖒𝖎𝖓𝖎𝖘𝖙𝖗𝖆𝖈𝖎𝖔𝖓 𝖉𝖊 𝖆𝖞𝖚𝖉𝖆𝖓𝖙𝖊𝖘*
✳️ *𝕭𝖔𝖙:* ${global.botname}
❇️ *𝖁𝖊𝖗𝖘𝖎𝖔𝖓:* ${global.vs}

👑 *𝕻𝖗𝖔𝖕𝖎𝖊𝖙𝖆𝖗𝖎𝖔 𝖉𝖊 𝖑𝖆 𝕭𝖔𝖙:*

• 
🏆 *𝕽𝖔𝖑:* 𝕻𝖗𝖔𝖕𝖎𝖊𝖙𝖆𝖗𝖎𝖔
🏅*𝕹𝖚𝖒𝖊𝖗𝖔:* wa.me/584248778828
⚔️ *𝕲𝖎𝖙𝕳𝖚𝖕:* https://github.com/LOBO50K

🗡️  *𝕮𝖔𝖑𝖆𝖇𝖔𝖗𝖆𝖉𝖔𝖗𝖊𝖘:*

• 𝑲𝒊𝒏𝒈
🪄 *𝕽𝖔𝖑:* 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗
🥇 *𝕹𝖚𝖒𝖊𝖗𝖔:* Wa.me/584248778828

• 𝑲𝒊𝒏𝒈
⚜️ *𝕽𝖔𝖑:* 𝕯𝖎𝖘𝖊𝖓̃𝖆𝖉𝖔𝖗
🛡️ *𝕹𝖚𝖒𝖊𝖗𝖔:* Wa.me/584248778828

• 𝑲𝒊𝒏𝒈
〽️ *𝕽𝖔𝖑:* 𝕰𝖉𝖎𝖙𝖔𝖗
🔰 *𝕹𝖚𝖒𝖊𝖗𝖔:* Wa.me/584248778828
`
await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler

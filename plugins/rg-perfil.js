import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
var handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => imagen1)
let { premium, level, estrellas, exp, lastclaim, registered, regTime, age, role } = global.db.data.users[m.sender]
let username = conn.getName(who)
let noprem = `
🚩 *𝙿𝚎𝚛𝚏𝚒𝚕 𝚍𝚎𝚕 𝚞𝚜𝚞𝚊𝚛𝚒𝚘*
☁️ *𝕹𝖔𝖒𝖇𝖗𝖊:* ${username}
💥 *𝕿𝖆𝖌:* @${who.replace(/@.+/, '')}
🌀 *𝕽𝖊𝖌𝖎𝖘𝖙𝖗𝖆𝖉𝖔:* ${registered ? '✅': '❌'}

👑 *𝚁𝚎𝚌𝚞𝚛𝚜𝚘𝚜*
🌟 *𝕰𝖘𝖙𝖗𝖊𝖑𝖑𝖆𝖘:* ${estrellas}
💥 *𝕹𝖎𝖛𝖊𝖑:* ${level}
💫 *𝕰𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖎𝖆:* ${exp}
✨️ *𝕽𝖆𝖓𝖌𝖔:* ${role}

💖 *Premium:* ${premium ? '✅': '❌'}
`.trim()
let prem = `╭──⪩ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ⪨
│⧼👤⧽ *ᴜsᴜᴀʀɪᴏ:* 「${username}」
│⧼💌⧽ *ʀᴇɢɪsᴛʀᴀᴅᴏ:* ${registered ? '✅': '❌'}
│⧼🔱⧽ *ʀᴏʟ:* Vip 👑
╰───⪨

╭────⪩ 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 ⪨
│⧼🌟⧽ *ᴇsᴛʀᴇʟʟᴀs:* ${estrellas}
│⧼🔰⧽ *ɴɪᴠᴇʟ:* ${level}
│⧼💫⧽ *ᴇxᴘᴇʀɪᴇɴᴄɪᴀ:* ${exp}
│⧼⚜️⧽ *ʀᴀɴɢᴏ:* ${role}
╰───⪨ *𝓤𝓼𝓾𝓪𝓻𝓲𝓸 𝓓𝓮𝓼𝓽𝓪𝓬𝓪𝓭𝓸* ⪩`.trim()
conn.sendFile(m.chat, pp, 'perfil.jpg', `${premium ? prem.trim() : noprem.trim()}`, m, rcanal, { mentions: [who] })
}
handler.help = ['profile']
handler.register = true
handler.group = true
handler.tags = ['rg']
handler.command = ['profile', 'perfil']
export default handler

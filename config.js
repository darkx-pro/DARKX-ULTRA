import 'dotenv/config';

const _prefixes = process.env.PREFIXES ? process.env.PREFIXES.split(',') : ['.', '!', '/', '#'];

const config = {
    // Bot Identity - Imetengenezwa kulingana na maombi yako
    botName: process.env.BOT_NAME || 'DarkX-ultra-bot',
    botOwner: process.env.BOT_OWNER || 'mrx dev',
    ownerNumber: process.env.OWNER_NUMBER || '255775710774',
    author: process.env.AUTHOR || 'mrx dev',
    packname: process.env.PACKNAME || 'DarkX-Stickers',
    description: process.env.DESCRIPTION || 'High performance multi-device WhatsApp bot modified by mrx dev',
    version: '6.0.0',

    // Bot Config
    prefixes: _prefixes,
    prefix: _prefixes[0],
    commandMode: process.env.COMMAND_MODE || 'public',
    timeZone: process.env.TIMEZONE || 'Africa/Nairobi',

    // Links
    channelLink: process.env.CHANNEL_LINK || 'https://whatsapp.com/channel/0029VbCdURHH5JM4JJHYAo2X',
    updateZipUrl: process.env.UPDATE_URL || 'https://github.com/darkx-pro',
    ytChannel: process.env.YT_CHANNEL || 'GlobalTechInfo',

    // Session - Weka Session ID yako hapa chini ikishapatikana
    sessionId: process.env.SESSION_ID || '',
    pairingNumber: process.env.PAIRING_NUMBER || '255775710774',

    // Performance
    port: Number(process.env.PORT) || 5000,
    maxStoreMessages: Number(process.env.MAX_STORE_MESSAGES) || 20,
    tempCleanupInterval: Number(process.env.CLEANUP_INTERVAL) || 1 * 60 * 60 * 1000,
    storeWriteInterval: Number(process.env.STORE_WRITE_INTERVAL) || 10000,

    // API Keys - Hizi zimebaki vilevile ili bot isifeli kufanya kazi
    giphyApiKey: process.env.GIPHY_API_KEY || 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
    removeBgKey: process.env.REMOVEBG_KEY || '',

    // Warn system
    warnCount: 3,

    // External APIs
    APIs: {
        xteam: 'https://api.xteam.xyz',
        dzx: 'https://api.dhamzxploit.my.id',
        lol: 'https://api.lolhuman.xyz',
        violetics: 'https://violetics.pw',
        neoxr: 'https://api.neoxr.my.id',
        zenzapis: 'https://zenzapis.xyz',
        akuari: 'https://api.akuari.my.id',
        akuari2: 'https://apimu.my.id',
        nrtm: 'https://fg-nrtm.ddns.net',
        fgmods: 'https://api-fgmods.ddns.net'
    },

    APIKeys: {
        'https://api.xteam.xyz': 'd90a9e986e18778b',
        'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
        'https://api.neoxr.my.id': process.env.NEOXR_KEY || 'yourkey',
        'https://violetics.pw': 'beta',
        'https://zenzapis.xyz': process.env.ZENZAPIS_KEY || 'yourkey',
        'https://api-fgmods.ddns.net': 'fg-dylux'
    }
};

export default config;

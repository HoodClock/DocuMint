const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY
const IV_Length = 16 // AES Block Size

if (!ENCRYPTION_KEY || ENCRYPTION_KEY.length !== 32) {
    throw new Error('Encryption key must be a 32-character string.');
}


function encrypt(text) {
    const iv = crypto.randomBytes(IV_Length);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`;
}

function decrypt(text) {
    const [iv, encryptedText] = text.split(':');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

module.exports = { encrypt, decrypt };
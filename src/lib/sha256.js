const digestSync = require('crypto-digest-sync');
function arraybuffer2hex(buffer) {
    let hexCodes = [], i = 0, view = new DataView(buffer);
    for (i; i < view.byteLength; i += 4) {
        let value, stringValue, padding = '00000000', paddedValue;
        value = view.getUint32(i);
        stringValue = value.toString(16);
        paddedValue = (padding + stringValue).slice(-padding.length);
        hexCodes.push(paddedValue);
    }
    return hexCodes.join("");
}
function hash(hexString) {
    let buffer = new Uint8Array(hexString.match(/[\da-f]{2}/gi).map((h) => parseInt(h, 16)));
    let hashDigest = digestSync("SHA-256", buffer);
    return arraybuffer2hex(hashDigest);
}

module.exports = hash;
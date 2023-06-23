const nacl = require("tweetnacl");

async function messageSigning() {
    const message = 'hello';
    const nonce = 'random_string';

    try {
        const response = await window.aptos.signMessage({
            message,
            nonce,
        });
        const { publicKey } = await window.aptos.account();
        //   const publickey = Buffer.from(pub.substring(2), 'hex');
        // Remove the 0x prefix
        //   const key = publicKey!.slice(2, 66);
        const verified = nacl.sign.detached.verify(
            Buffer.from(response.fullMessage),
            Buffer.from(response.signature, 'hex'),
            Buffer.from(key, 'hex'),
        );
        console.log(verified);
    } catch (error) {
        console.error(error);
    }
}
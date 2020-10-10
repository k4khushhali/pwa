var push = require('web-push');

// let vepidKyes = push.generateVAPIDKeys();
// console.log(vepidKyes);

let vepidKyes = {
    publicKey: 'BLq2KQ7RZIzQawTmT1oizofighb3pE0t-t9b2DdWEtiFm-TkPJGud5qIr0dRguscportJ20NC1em8yr5OyDcYaQ',
    privateKey: '44QnmNOKY5de24G2W8A-nwceysUrlnD_cwLkg9OqYHY'
}

push.setVapidDetails('mailto:k4khushhali@gmail.com', vepidKyes.publicKey, vepidKyes.privateKey)

// let sub = {
//     endpoint: "https://fcm.googleapis.com/fcm/send/eNcXddY2EbY:APA91bGuYggNiT_e_2hrUoCe1XNY5Exfz82LEoWP_6Y2jWYMRUV-7uHEa8W1yG_nCdNur6xeQGt4rbUKRtgfzj4NNr93uFOw7wYspXXbdPKJH04YN0UQ24oFrpAu_zp-ASpMERKSJbJc",
//     expirationTime: null,
//     keys: {
//         p256dh: "BAlpIa34O1e45sTTedirMAlWtmK4D639X_iN6z4SK7gv4MzHsO8UuRD2ks3o2nrWlS3WYT3O7myO5bWALkunbkg",
//         auth: "7Hwc6rxdkO7Ow8fUe6SwIg"
//     }
// }

// push.sendNotification(sub, 'test message')
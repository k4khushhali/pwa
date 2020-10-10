const webpush = require('web-push');

// VAPID keys should only be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();
// console.log(vepidKyes);

let vepidKyes = {
    subject: 'mailto:k4khushhali@gmail.com',
    publicKey: 'BLq2KQ7RZIzQawTmT1oizofighb3pE0t-t9b2DdWEtiFm-TkPJGud5qIr0dRguscportJ20NC1em8yr5OyDcYaQ',
    privateKey: '44QnmNOKY5de24G2W8A-nwceysUrlnD_cwLkg9OqYHY'
}

// webpush.setGCMAPIKey('AIzaSyDtizmd_RRy9dj2aS4THrcAgRek9y0DoEI');
webpush.setVapidDetails(vepidKyes.subject, vepidKyes.publicKey, vepidKyes.privateKey);

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/dZiaDBRZ2qU:APA91bHY9HHItsVkKqEY9xqv_mAYXY__wIRXcZqwoISzMlNlZgyPGrTb3YK1fdZjkfCaX4yq1esK4TtagNo9veOcMPgbkH5HFQx3ivfC2bhXB1M37wjWqZnIWOGfzKiQyAA6G-msj7je", "expirationTime": null, "keys": { "p256dh": "BNMqVHstoPZkPKkxvkp0znDMl4aaOzLe1xsSCU0tW1AJ_V7qn3U6dU3S_rRwGQ-tTRo3QzD2uIP3anr0SS2Vlmo", "auth": "-v0o4ERK3cyhijyeG30Dkw" } }

webpush.sendNotification(sub, 'test message')
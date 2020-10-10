const push = require('web-push');

// VAPID keys should only be generated only once.
// const vapidKeys = push.generateVAPIDKeys();
// console.log(vepidKyes);

let vepidKyes = {
    subject: 'mailto:k4khushhali@gmail.com',
    publicKey: 'BLq2KQ7RZIzQawTmT1oizofighb3pE0t-t9b2DdWEtiFm-TkPJGud5qIr0dRguscportJ20NC1em8yr5OyDcYaQ',
    privateKey: '44QnmNOKY5de24G2W8A-nwceysUrlnD_cwLkg9OqYHY'
}

// push.setGCMAPIKey('AIzaSyDtizmd_RRy9dj2aS4THrcAgRek9y0DoEI');
push.setVapidDetails(vepidKyes.subject, vepidKyes.publicKey, vepidKyes.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/f4Agb-u3FXg:APA91bEoVHkYFO0IoF0xBhd4jarbcbUAFlcCiyUPZfY4yBIVA9v9K-hxn1tI6_FMqhsocxIisS10GD-AkCBjnjEYgZAMjaW5c33bS3vprFwhffdUg_wV3aS4GZsTcVTYM3lKElX4mX8P","expirationTime":null,"keys":{"p256dh":"BL89c4gYHNQMELjw1SuInKIHqa6rnFZCDXu_sa70AfkepAGhsFFW43Bwc5yQJbcUO0j21yE5cI48PuuMyJ_la44","auth":"ii2IWzNIIGPUirmUiulKwQ"}}

push.sendNotification(sub, 'test message')
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

let sub = { 
    "endpoint": "https://fcm.googleapis.com/fcm/send/fXYaIPoM_-g:APA91bE6TPhnlkY9UAJ3ibvNQKwZ2Xm0AkHbHsgNWBtGznrDnGcnAmpZKDq3V38R3kWF8OulPZr27UGm96oQ-iGEs-RO-sFvoG72eIEsLt-rwbkCugyNDCzfGIgm4FnJLENeFTpPd0t_", 
    "expirationTime": null, 
    "keys": { 
        "p256dh": "BLEHMgzBMUUJlrHEGA64qfTkWyZXm-lUfdtown85Kz4s9HudIRVmvgNgQhsIOszyrCazspMBjeZy0mhwZTdBXIY", 
        "auth": "dJDs1azRGKR2sDy7cOIZGQ" 
    } 
}

webpush.sendNotification(sub, 'test message')
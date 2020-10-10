var push = require('web-push');

// let vepidKyes = push.generateVAPIDKeys();
// console.log(vepidKyes);

let vepidKyes = {
    publicKey: 'BLq2KQ7RZIzQawTmT1oizofighb3pE0t-t9b2DdWEtiFm-TkPJGud5qIr0dRguscportJ20NC1em8yr5OyDcYaQ',
    privateKey: '44QnmNOKY5de24G2W8A-nwceysUrlnD_cwLkg9OqYHY'
}

push.setVapidDetails('mailto:k4khushhali@gmail.com', vepidKyes.publicKey, vepidKyes.privateKey)

let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/fwWXstaFHL0:APA91bFRq9171LXCJo33MWtpXpgPBOzUwKU8a1dVGQkYjHHch5QXM9V9ubYHFWa26jUU62y29b_kbN23ix451hk31S0ufH0HmsV26K3Hk-JlmxYWVHV9R6pjp4FY9KF6oFzAK55VtOs3",
    expirationTime: null,
    keys: {
        p256dh: "BCbaAwGzPqvkaYKgjjkNin24gET2OIgKcgG5dtjezrZ_MbUHY_2cX5x1piREWqQxTMb324Ftn3afMp-yOgtzUrQ",
        auth: "hLyjqdxPxoj9MV1cJKzTaA"
    }
}

push.sendNotification(sub, 'test message')
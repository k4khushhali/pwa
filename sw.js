// self.addEventListener('push', ()=>{
//     self.registration.sendNotification('test message', {})
// })
self.addEventListener('push', function (e) {
    var options = {
        body: 'This notification generate from the push!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore this new world',
                icon: 'imges/check.png'
            },
            {
                action: 'close',
                title: 'close',
                icon: 'imges/xmark.png'
            }
        ]
    }
    e.waituntil(self.registration.showNotification('test message', options));
})

self.addEventListener('activate', function () {
    console.log('SW Activated');
});
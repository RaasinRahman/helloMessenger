/* Gun imports and initialization */
import 'gun-asyncstorage';
import Gun from 'gun';
// initialize gun locally
// sync with as many peers as you would like by passing in an array of network uris
export const gunInstance = Gun({
    peers: [
        'http://localhost:3030/gun'
    ]
})


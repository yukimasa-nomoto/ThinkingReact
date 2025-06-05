export function createConnection(serverUrl,roomId){
    return{
        connect(){
            console.log(`Connecting to server at ${serverUrl} for room ${roomId}`);
            // Simulate connection logic here
        },
        disconnect(){
            console.log(`Disconnecting from server at ${serverUrl} for room ${roomId}`);
            // Simulate disconnection logic here
        },
    }
}
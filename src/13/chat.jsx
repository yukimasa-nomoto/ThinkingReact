export function createConnection(){
    return{
        connect(){
            console.log('Connecting to the server...');
        },
        disconnect(){
            console.log('Disconnecting from the server...');
        }
    }
}
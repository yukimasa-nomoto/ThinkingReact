export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  let connectedCallback;
  let timeout;
  return {
    connect() {
        console.log('connect');
        timeout = setTimeout(() => {
            console.log('timeout');
            if (connectedCallback) {
                console.log('connectedCallback');
                connectedCallback();
            }
        }, 1000);
    },
    on(event, callback) {
      if (connectedCallback) {
        throw Error('Cannot add the handler twice.');
      }
      if (event !== 'connected') {
        throw Error('Only "connected" event is supported.');
      }
      connectedCallback = callback;
    },
    disconnect() {
        console.log('disconnect');
        clearTimeout(timeout);
    }
  };
}

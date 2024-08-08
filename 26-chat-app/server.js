const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('message', (message) => {
        if (Buffer.isBuffer(message)) {
            const messageStr = message.toString();
            console.log('Received:', messageStr);

            server.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(messageStr);
                }
            });
        } else {
            console.log('Received (not Buffer):', message);
        }
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
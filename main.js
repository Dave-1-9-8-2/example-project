'use strict';

const connection = new WebSocket('ws://example.com/test');
connection.onopen = (event) => {
    console.log('Hallo Welt!');
};
connection.onerror = (error) => {
    console.log(`WebSocket Error: ${error}`);
};
connection.onclose = (event) => {
    console.log('Verbindung geschlossen');
};
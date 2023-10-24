// Code JavaScript pour créer la carte
let map = L.map('map').setView([44.526019, 3.501122], 14); // Coordonnées initiales et niveau de zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Ajouter un marqueur
let marker = L.marker([44.534129, 3.501122]).addTo(map);
var c = document.createElement('canvas');
var ctx = c.getContext('2d');
document.body.appendChild(c);

function updateCanvasSize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    columns = c.width / font_size;
    drops = [];
    for (var x = 0; x < columns; x++)
        drops[x] = Math.floor(Math.random() * (c.height / font_size));
}

updateCanvasSize();
window.addEventListener('resize', updateCanvasSize);

var matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^';
matrix = matrix.split('');

var font_size = 15; // Adjust font size
var columns = c.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++)
    drops[x] = Math.floor(Math.random() * (c.height / font_size));

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = '#00F'; // Change to blue color
    ctx.font = font_size + 'px arial';
    for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > c.height && Math.random() > 0.85) // Adjust the threshold
            drops[i] = 0;
        drops[i]++;
    }
}

setInterval(draw, 33);

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = innerHeight;


function Circle(){
    
}

let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 10;
let dy = (Math.random() - 0.5) * 10;
let radius = 30;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);

    c.beginPath();
c.arc(x,y, radius, 0, Math.PI * 2, false);
c.strokeStyle = "blue"
c.stroke();

if(x + radius > window.innerWidth || x - radius < 0){
    dx = -dx;
}

if(y + radius > innerHeight || y - radius < 0){
    dy = -dy;
}
x += dx;
y += dy;
    
}

animate();
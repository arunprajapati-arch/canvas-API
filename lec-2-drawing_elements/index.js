const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = innerHeight;




// Line

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle = "red";
c.stroke();

// Arc / circle

// c.beginPath();
// c.arc(300,300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue"
// c.stroke();

for( let i = 0; i < 100; i++){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x,y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "red"
    c.stroke();
}
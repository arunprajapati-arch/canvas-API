window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // to resize
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.lineTo(200, 150);
    ctx.closePath();
    ctx.stroke();
    
});
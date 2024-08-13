window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // to resize
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10
    ctx.strokeRect(100, 100, 200, 200);
    ctx.lineWidth = 5
    ctx.strokeStyle = "blue"
    ctx.strokeRect(150, 150, 200, 200);
});
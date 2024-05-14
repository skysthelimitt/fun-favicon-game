document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let i = 0;
    let grid = [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]
    ]
    function draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 250, 250)
        for(let i=0; i<5; i++) {
            for(let e=0; e<5; e++) {
                if (grid[e][i]) {
                    ctx.fillStyle = "white";
                } else {
                    ctx.fillStyle = "blue";
                }
                ctx.fillRect(i*50, e*50, 50, 50);
            }
        }
        i++;
        document.getElementById("favicon").href = canvas.toDataURL("image/png");
        window.requestAnimationFrame(draw);
    }
    draw();
})
window.onerror = function(message, url, line) {
    alert(message + ', ' + url + ', ' + line);
  };

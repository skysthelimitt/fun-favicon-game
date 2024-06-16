let x = 0;
let y = 0;
let newX = 0;
let newY = 0;
let killX = -1;
let killY = -1;
let killRegens = 2;
let score = 0;
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    document.getElementById("start").addEventListener("click", () => {
        let time = 0;
        while(time < 30) {
            setTimeout(() => {
                time++;
                document.getElementById("time").innerText = time;
            }, 1000);
        }
    })
    function draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 200, 200);
        if(newX==x&&newY==y) {
            score++;
            document.getElementById("score").innerText = score;
        }
        if(score % 5 && score/5 < killRegens && score > 1) {
            killX = Math.floor(Math.random()*4);
            killY = Math.floor(Math.random()*4);
        }
        while(newX == x && newY == y ) {
            newX=Math.floor(Math.random()*4);
            newY=Math.floor(Math.random()*4);
        }
        for(let i=0; i<4; i++) {
            for(let e=0; e<4; e++) {
                if (i==x && e==y) {
                    ctx.fillStyle = "white";
                } else if (i==newX && e==newY) {
                    ctx.fillStyle = "orange";
                } else if (i==killX && e==killY){
                    ctx.fillStyle = "red";
                } else {
                    ctx.fillStyle = "blue";
                }
                ctx.fillRect(i*50, e*50, 50, 50);
            }
        }
        document.getElementById("favicon").href = canvas.toDataURL("image/png");
    }
    document.addEventListener("keydown", (e) => {
        if(e.key.includes("Arrow")) {
            if(e.key == "ArrowLeft") {
                x+=-1;
            } else if(e.key == "ArrowRight") {
                x++;
            } else if(e.key == "ArrowUp") {
                y+=-1;
            } else if(e.key == "ArrowDown") {
                y++;
            }
            if(x>3) {
                x = 3;
            } else if(y>3) {
                y = 3;
            } else if(x<0) {
                x = 0;
            } else if(y<0) {
                y = 0;
            }
            window.requestAnimationFrame(draw);
        }
    })
    
    draw();
})
window.onerror = function(message, url, line) {
    alert(message + ', ' + url + ', ' + line);
};

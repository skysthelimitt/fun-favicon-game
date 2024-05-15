function genNewPlace() {
    if(Math.random() > 0.5) {
        newX+=Math.round(Math.random()*2)-1;
    } else {
        newY+=Math.round(Math.random()*2)-1;
    }
    if(newX>3) {
        newX = 3;
        genNewPlace();
    } else if(newY>3) {
        newY = 3;
        genNewPlace();
    } else if(newX<0) {
        newX = 0;
        genNewPlace();
    } else if(newY<0) {
        newY = 0;
        genNewPlace();
    }
}
let x = 0;
let y = 0;
let newX = 0;
let newY = 0;
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    function draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 200, 200);
        if(newX == x && newY == y ) {
            genNewPlace()
        }
        for(let i=0; i<4; i++) {
            for(let e=0; e<4; e++) {
                if (i==x && e==y) {
                    ctx.fillStyle = "white";
                } else if (i==newX && e==newY) {
                    ctx.fillStyle = "orange";
                } else {
                    ctx.fillStyle = "blue";
                }
                ctx.fillRect(i*50, e*50, 50, 50);
            }
        }
        document.getElementById("favicon").href = canvas.toDataURL("image/png");
        window.requestAnimationFrame(draw);
    }
    draw();
})
window.onerror = function(message, url, line) {
    alert(message + ', ' + url + ', ' + line);
  };

  // handle movement
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
    }
})

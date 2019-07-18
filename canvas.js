console.log('hi')
let canvas = document.querySelector('#myCanvas')
console.log(canvas)
/* To Make the width of the canvas */
canvas.width =  window.innerWidth
canvas.height =  window.innerHeight


const c = canvas.getContext('2d');

console.log(c)
c.fillRect( 100,100, 100,100);
c.beginPath();

c.moveTo(50,300);
c.lineTo(300,100);
c.stroke()

let x=500
let y=500
let r=300
c.beginPath()
c.arc(x,y,r,0, Math.PI*2,false)
c.stroke();
c.closePath();

c.beginPath();
//drawAngledLine(x,y,r,90)
//drawAngledLine(x,y,-r,90)
//function drawAngledLine(x, y, length, angle) {
//    var radians = angle / 180 * Math.PI;
//    var endX = x + length * Math.cos(radians);
//    var endY = y - length * Math.sin(radians);
//    c.beginPath();
//    c.moveTo(x, y)
//    c.lineTo(endX, endY);
//    c.closePath();
//    c.stroke();
//}

let painting =false

function startPos(){
    painting = true;
}
function endPos(){
    painting = false;
    c.beginPath()
}
function draw(e){
    if(!painting) return;
    c.lineWidth = 5;
    c.lineCap = 'round';

    c.lineTo(e.clientX, e.clientY)
    c.stroke()
    c.beginPath()
    c.moveTo(e.clientX, e.clientY)
}

function draw2(e){
    if(!painting) return;
    c.lineWidth = 5;
    c.lineCap = 'round';

    c.lineTo(e.clientX+30, e.clientY)
    c.stroke()
    c.beginPath()
    c.moveTo(e.clientX+30, e.clientY)
}
lol=(e)=>{
    draw(e)
    draw2(e)
}

//EventListeners
canvas.addEventListener('mousedown', startPos)
canvas.addEventListener('mouseup', endPos)
canvas.addEventListener('mousemove', lol)
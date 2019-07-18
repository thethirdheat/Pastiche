onload=()=>{
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

let x=canvas.width/2
let y=canvas.height/2
let r=(canvas.height/2)*.9
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


//function draw(e){
//    if(!painting) return;
//    c.lineWidth = 5;
//    c.lineCap = 'round';
//
//    c.lineTo(e.clientX, e.clientY)
//    c.stroke()
//    c.beginPath()
//    c.moveTo(e.clientX, e.clientY)
//}
//
//function draw2(e){
//    if(!painting) return;
//    c.lineWidth = 5;
//    c.lineCap = 'round';
//
//    c.lineTo(e.clientX+30, e.clientY)
//    c.stroke()
//    c.beginPath()
//    c.moveTo(e.clientX+30, e.clientY)
//}
//lol=(e)=>{
//    draw(e)
//    draw2(e)
//}
//
////EventListeners
//canvas.addEventListener('mousedown', startPos)
//canvas.addEventListener('mouseup', endPos)
//canvas.addEventListener('mousemove', lol)
//

let painting =false
let drawing=[]
let stuff=[]

function startPos(e){
    painting = true;
    drawing=[]
    c.beginPath()
}
function endPos(){
    stuff.push(drawing)
    drawing=[]
    
    painting = false;
}


function draw(e){
    //console.log(drawing)
    //console.log(e.clientX,e.clientY)

    if(!painting) return;
    drawing.push([e.clientX+30,e.clientY+30])
    c.lineWidth = 1;
    c.lineCap = 'round';
    //debugger
    c.lineTo(e.clientX, e.clientY)
    c.stroke()
    c.beginPath()
    c.moveTo(e.clientX, e.clientY)
}


lul=(drawing)=>{
    //console.log(drawing)
    c.beginPath();
    c.moveTo(drawing[0][0], drawing[0][1]);
    console.log(drawing[0])
    for(let i =0;i <drawing.length;i++){
        c.lineTo(drawing[i][0], drawing[i][1]);
        c.stroke();
    }
    c.closePath();
}
canvas.addEventListener('mousedown', startPos)
canvas.addEventListener('mouseup', endPos)
//canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousemove',draw)
document.getElementById('fire').onclick = function(e){
    console.log(stuff)
    for(let i =0;i< stuff.length;i++){
        lul(stuff[i])
    }
}



bb=()=>{
    console.log('wtfffff')
}
document.addEventListener('keydown',()=>{
    for(let i =0;i< stuff.length;i++){
        lul(stuff[i])
    }

})
canvas.addEventListener( "keydown", bb, false);
//document.getElementById("demo").addEventListener("keypress", myFunction);
//canvas.addEventListener('keypress', testing())

}

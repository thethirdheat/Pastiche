onload=()=>{

//console.log('hi')
let canvas = document.querySelector('#myCanvas')
//console.log(canvas)
/* To Make the width of the canvas */


const dim=window.innerHeight
//const dim=1200
canvas.width =  dim
canvas.height = dim
const c = canvas.getContext('2d');
//c.transform(1,0,0,1,dim/2,dim/2)


cantwo = document.querySelector('#cantwo')
cantwo.width =  dim
cantwo.height = dim
//c.fillStyle = "rgba(0, 0, 200, 0)";

const c2 = cantwo.getContext('2d');
//c.globalCompositeOperation = 'destination-out';

//c2.fillRect(dim/2,dim/2,200,200)
//c.globalCompositeOperation = 'xor';
c2.stroke()
console.log(c2)
//c.fillRect( 100,100, 100,100);
c.stroke()


c.beginPath();

c.moveTo(50,300);
//c.lineTo(300,100);
c.stroke()

let x=canvas.width/2
let y=canvas.height/2
let r=(canvas.height/2)*.9
//c.beginPath()
//c.arc(x,y,r,0, Math.PI*2,false)
//c.stroke();
//c.closePath();
//
//c.beginPath();

let painting =false
let drawing=[]
let stuff=[]

function startPos(e){
    console.log(e)

    painting = true;
    drawing=[]
    //c.moveTo(e.clientX,e.clientY)
    c.beginPath()
}
function endPos(e){

    stuff.push(drawing)

    drawing=[]
    //e.moveTo(e.clientX,e.clientY)
    //c.closePath()
    prevPos=[]
    
    painting = false;
}


//c.moveTo(50,300);
//c.lineTo(300,100);
//c.stroke()
const drawLine=(start,end)=>{

    c.moveTo(...start)
    c.lineTo(...end)
    c.stroke()

}
//drawLine([0,0],[canvas.width,canvas.height])
//drawLine([0,canvas.height],[canvas.width,0])
//drawLine([0,canvas.height/2], [canvas.width, canvas.height/2])

drawCircle=( pos,r)=>{
    //console.log(pos,r)
    c.moveTo(...pos)
    c.arc(pos[0]-4,pos[1]-r,r,0, Math.PI*2,false)
    c.stroke();
    c.closePath();
}
//drawCircle([dim/2,dim/2],33)
//y=-3x+canvas.width/2
//for(let i =0;i < canvas.width;i++){
//    if(i%20===0){
//        drawCircle([i, 3*(i)-canvas.width],5)
//    }
//}
//for(let i =0;i < canvas.width;i++){
//    if(i%20===0){
//        drawCircle([i, -3*i+(dim/2+(3*dim/2))],5)
//    }
//}
//
/* Keep this as example? */
let prevPos
num=1
//let deg=(304)
//let deg=(43)
//let deg=(180)
//let deg=(178)
//let deg=(355)
let deg = 30
let line= 1

        //c.save()
function draw(e){
    //console.log(drawing)
    //console.log(e.clientX,e.clientY)

    if(!painting) return;
    if(!prevPos ){
        prevPos= [e.clientX,e.clientY]
        return
    }
    drawing.push([e.clientX+30,e.clientY+30])
    //if(  e.clientY >canvas.width/2&&( e.clientY >3*e.clientX-canvas.width && e.clientY> -3*e.clientX+(dim/2+(3*dim/2)))){
        if(true){
        c.lineWidth = line;
        c.lineCap = 'round';
        //debugger
        c.beginPath()
        c.moveTo(prevPos[0],prevPos[1])
        //c.moveTo(e.clientX, e.clientY)
        c.lineTo(e.clientX, e.clientY)
        c.closePath()
        c.stroke()
        c.save()

        ///  this is the second stroke!
        //c.transform(1,0,0,1,dim/10,dim/10)
        c.transform(1,0,0,1,dim/2,dim/2)



        //this is to rotoate
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom



        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)


        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom

        ///Third stroke?
        c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

        c.closePath()
        c.stroke()
        //Bottom
        c.restore()
        prevPos=[ e.clientX, e.clientY ]
    }else{
        c.beginPath()
        
    }
}
//drawLine( )


///* Keep this as example? */
//function draw(e){
//    //console.log(drawing)
//    //console.log(e.clientX,e.clientY)
//
//    if(!painting) return;
//    drawing.push([e.clientX+30,e.clientY+30])
//    c.lineWidth = 1;
//    c.lineCap = 'round';
//    //debugger
//    c.lineTo(e.clientX, e.clientY)
//    c.stroke()
//    c.beginPath()
//    c.moveTo(e.clientX, e.clientY)
//}
//

/* This works to create an area you cna't draw and then start over need to fix to start new path on copy but itsworkding
also need to create diagonal bariears
 */
//function draw(e){
//    //console.log(drawing)
//    //console.log(e.clientX,e.clientY)
//
//    if(!painting) return;
//    if(e.clientX>300&& e.clientX<500){
//
//    drawing.push([e.clientX+30,e.clientY+30])
//    c.lineWidth = 1;
//    c.lineCap = 'round';
//    //debugger
//    c.lineTo(e.clientX, e.clientY)
//    c.stroke()
//    c.beginPath()
//    c.moveTo(e.clientX, e.clientY)
//    }else{
//        c.beginPath()
//    }
//
//}

//let x=canvas.width/2
//let y=canvas.height/2

//function draw(e){
//    //console.log(drawing)
//    //console.log(e.clientX,e.clientY)
//
//    if(!painting) return;
////    y=3x+mid
////    y=-3x+mid
//    //if((e.clientY < e.clientX*3+x )&& ( e.clientY< (-e.clientX*3)+ x)){
//    //if(e.clientX>300&& e.clientX<500){
//        drawing.push([e.clientX+30,e.clientY+30])
//        c.lineWidth = 1;
//        c.lineCap = 'round';
//        //debugger
//        c.lineTo(e.clientX, e.clientY)
//        c.stroke()
//        c.beginPath()
//        c.moveTo(e.clientX, e.clientY)
//    //}else{
//        c.beginPath()
//    //}
//
//}

lul=(drawing)=>{
    //console.log(drawing)
    c.beginPath();
    c.moveTo(drawing[0][0], drawing[0][1]);
    c.lineWidth = 9;
    //console.log(drawing[0])
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
//document.getElementById('fire').onclick = function(e){
//    console.log(stuff[0])
//    for(let i =0;i< stuff.length;i++){
//        lul(stuff[i])
//    }
//}


/*add calss example */
//function myFunction() {
//  var element = document.getElementById("myDIV");
//  element.classList.add("mystyle");
//}

let curImage
let showing= true;
document.addEventListener('keydown',(e)=>{
    console.log(e)
    if(e.key===" "){
        el = document.getElementById('cantwo')
        if( showing){
            el.classList.add('hidden')
        }else{
            el.classList.remove('hidden')
        }
        showing=!showing

    }else if ( e.key==="h"){
        canvas.width= canvas.width*1.5
        canvas.height=canvas.height*1.5

        canvas.classList.add('zoom')
    }else if ( e.key==="a"){
        c.strokeStyle = "#FF0000";
        scaled=!scaled
        console.log('funk')
    }
    else if(e.key ==="c"){
        c.strokeStyle = "blue";
    }else if ( e.key==="b"){
        c.strokeStyle = "green";

    }else if ( e.key==="r"){
        console.log('here', deg)
        //num+=90
        //deg+=2
        deg-=1
    }else if ( e.key==="4"){
        deg = 90
    }else if ( e.key==="6"){
        deg = 60

    }else if ( e.key==="5"){
        deg = 72
    }else if ( e.key==="3"){
        deg=120
    }else if ( e.key==="z"){
        curImage = c.getImageData(0,0,dim,dim)
        c.clearRect(0, 0, dim, dim);
        console.log('cear went rhought?')
        c.putImageData(curImage,5 , 5);
        canvas.width=dim*1.5
        canvas.height=dim*1.5

        c.scale(1.5,1.5)
        c.transform(1.5,0,0,1.5,0,0)

    }else if ( e.key=== "x"){
        //curImage = c.getImageData(0,0,dim*1.5,dim*1.5)
        //console.log(curImage)

        //var imgData = ctx.getImageData(0, 0, 50, 50);
        //red = imgData.data[0];
        //green = imgData.data[1];
        //blue = imgData.data[2];
        //alpha = imgData.data[3];
        //alert(red + " " + green + " " + blue + " " + alpha);
        //ctx.putImageData(imgData, 10, 70);

        curImage = c.getImageData(0,0,dim,dim)


        //c.scale(1/(1.5*1.5),1/(1.5*1.5))
        c.clearRect(0, 0, dim, dim);
        console.log('cear went rhought?')
        c.putImageData(curImage,5 , 5);


    }else if ( e.key=== "v"){
        curImage
    }else if ( e.key=== "i"){
        line+=2

    }else if ( e.key=== "u"){
        line-=2
    }else if ( e.key=== "g"){
        var gradient = c.createLinearGradient(0, 0, 170, 0);
        gradient.addColorStop("0", "green");
        gradient.addColorStop("0.5" ,"blue");
        gradient.addColorStop("1.0", "red");

    // Fill with gradient
        c.strokeStyle = gradient;
        c.lineWidth = 5;
        //c.strokeRect(20, 20, 150, 100);

    }else{
//        c.strokeStyle = "black";
//        for(let i =0;i< stuff.length;i++){
//            lul(stuff[i])
//            stuff=[]
//        }
        console.log('hi')
    }


})
//canvas.addEventListener( "keydown", bb, false);
//document.getElementById("demo").addEventListener("keypress", myFunction);
//canvas.addEventListener('keypress', testing())

}


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
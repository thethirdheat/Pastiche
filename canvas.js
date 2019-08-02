onload=()=>{

let canvas = document.querySelector('#myCanvas')



const dim=window.innerWidth

canvas.width =  dim
canvas.height = dim
const c = canvas.getContext('2d');


cantwo = document.querySelector('#cantwo')
cantwo.width =  dim
cantwo.height = dim

const c2 = cantwo.getContext('2d');

c.transform(1,0,0,1,dim/2,dim/2)
c.save()

let painting =false
let drawing=[]
let stuff=[]
let start=[]
let fin=[dim,dim]


function startPos(e){
    start=[e.clientX,e.clientY]

    painting = true;
    drawing=[]
}

function endPos(e){
    stuff.push(drawing)
    drawing=[]
    prevPos=[]
    painting = false;
}



drawCircle=( pos,r)=>{
    c.moveTo(...pos)
    c.arc(pos[0],pos[1],r,0, Math.PI*2,false)
    c.stroke();
    c.closePath();
}

let prevPos
num=1

let deg = 30
let line= 1

c.closePath();



const pencil = (e)=>{

    c.beginPath()
    //drawPath.push(prevPos[0]-dim/2+this.scrollX,prevPos[1-dim/2+this.scrollY])
    c.moveTo((prevPos[0]-dim/2+this.scrollX )*mult, (prevPos[1]-dim/2+this.scrollY)*mult)
    //console.log(prevPos[0]-dim/2+this.scrollX, prevPos[1]-dim/2+this.scrollY)
    //drawPath.push(prevPos[0]-dim/2+this.scrollX, prevPos[1]-dim/2+this.scrollY)
    c.lineTo((e.clientX-dim/2+this.scrollX)*mult, (e.clientY-dim/2+this.scrollY)*mult)
    drawPath.push([e.clientX-dim/2+this.scrollX*mult, e.clientY-dim/2+this.scrollY*mult])
    console.log([e.clientX-dim/2+this.scrollX*mult, e.clientY-dim/2+this.scrollY*mult])

    c.closePath()
    c.stroke()

}

let curDraw = pencil
let mult=1

let mouseX ;
let mouseY ;
let drawPath=[]
function draw(e, callback){
    //console.log(e,this)

    mouseX = e.pageX - this.offsetLeft + this.scrollX;
    mouseY = e.pageY - this.offsetTop+ this.scrollY;
    //$(window).scrollLeft();


    if(!painting) return;
    if(!prevPos ){
        //prevPos= [e.clientX,e.clientY]
        prevPos = [mouseX+this.scrollX,mouseY+this.scrollY]
        //prevPos=[ e.clientX , e.clientY]
        return
    }
    //console.log(this, this.scrollX,this.scrollY,prevPos)
        c.lineWidth = line;
        c.lineCap = 'round';
        c.strokeStyle = "green";
        c.beginPath()
        //c.moveTo(prevPos[0]-dim/2+this.scrollX,prevPos[1]-dim/2+this.scrollY)
        //c.lineTo(e.clientX-dim/2, e.clientY-dim/2)
        //c.lineTo(mouseX-dim/2+this.scrollX,mouseY-dim/2+this.scrollY)
        //c.lineTo(mouseX-dim/2,mouseY-dim/2)
        //c.stroke()
        c.closePath()
        if(360%deg===0){
            
            for(let i =0;i < 360/deg;i++ ){
                c.rotate(deg * Math.PI / 180); // rotate canvas
                pencil(e)

            }
        }else{
            for(let i =0;i < 359;i++ ){
                c.rotate(deg * Math.PI / 180); // rotate canvas
                callback(e)

            }

        }


        c.restore()
    //mouseX = e.pageX - this.offsetLeft + this.scrollX;
    //mouseY = e.pageY - this.offsetTop+ this.scrollY;

        prevPos=[ e.clientX , e.clientY]
    //drawPath.push(prevPos[0]+dim/2,prevPos[1]+dim/2)

}

canvas.addEventListener('mousedown', startPos)
canvas.addEventListener('mouseup', endPos)
canvas.addEventListener('mousemove',(e)=>draw(e,curDraw))


let curImage
let showing= true;
document.addEventListener('keydown',(e)=>{
    if(e.key==="j"){

        console.log(drawPath)
        c.scale(1/1.5,1/1.5)
        mult*=1.5
        //c.restore()
        c.clearRect(-dim, -dim, dim*2, dim*2);
        //drawPath=drawPath.reverse()
        for(let i =0;i < 360/deg;i++ ){
            c.rotate(deg * Math.PI / 180); // rotate canvas
            for(let j =1;j < drawPath.length;j++){
//                    c.beginPath()
//                    //drawPath.push(prevPos[0]-dim/2+this.scrollX,prevPos[1-dim/2+this.scrollY])
//                    c.moveTo([0]-dim/2+this.scrollX, prevPos[1]-dim/2+this.scrollY)
//                    //drawPath.push(prevPos[0]-dim/2+this.scrollX, prevPos[1]-dim/2+this.scrollY)
//                    c.lineTo(e.clientX-dim/2+this.scrollX, e.clientY-dim/2+this.scrollY)
//                    drawPath.push(e.clientX-dim/2+this.scrollX, e.clientY-dim/2+this.scrollY)
//
//                    c.closePath()
//                    c.stroke()

                //pencil(drawPath[i][0],drawPath[i][1])

                //console.log(drawPath[i][0],drawPath[i][1])
                c.beginPath();
                c.moveTo(drawPath[j-1][0], drawPath[j-1][1]);
                    //c.moveTo(clickX[i]-1, clickY[i]);
                //c.lineTo(clickX[i], clickY[i]);
                c.lineTo(drawPath[j][0], drawPath[j][1]);
                c.closePath();
                c.stroke();
            }
        }



    }else if ( e.key==="h"){

        console.log(drawPath)
        c.scale(1.5,1.5)
        mult*=1/1.5
        //c.restore()
        c.clearRect(-dim, -dim, dim*2, dim*2);
        //drawPath=drawPath.reverse()
        for(let i =0;i < 360/deg;i++ ){
            c.rotate(deg * Math.PI / 180); // rotate canvas
            for(let j =1;j < drawPath.length;j++){
//                    c.beginPath()
//                    //drawPath.push(prevPos[0]-dim/2+this.scrollX,prevPos[1-dim/2+this.scrollY])
//                    c.moveTo([0]-dim/2+this.scrollX, prevPos[1]-dim/2+this.scrollY)
//                    //drawPath.push(prevPos[0]-dim/2+this.scrollX, prevPos[1]-dim/2+this.scrollY)
//                    c.lineTo(e.clientX-dim/2+this.scrollX, e.clientY-dim/2+this.scrollY)
//                    drawPath.push(e.clientX-dim/2+this.scrollX, e.clientY-dim/2+this.scrollY)
//
//                    c.closePath()
//                    c.stroke()

                //pencil(drawPath[i][0],drawPath[i][1])

                //console.log(drawPath[i][0],drawPath[i][1])
                c.beginPath();
                c.moveTo(drawPath[j-1][0], drawPath[j-1][1]);
                    //c.moveTo(clickX[i]-1, clickY[i]);
                //c.lineTo(clickX[i], clickY[i]);
                c.lineTo(drawPath[j][0], drawPath[j][1]);
                c.closePath();
                c.stroke();
            }
        }


    }else if ( e.key==="a"){
        c.strokeStyle = "#FF0000";
        scaled=!scaled
    }
    else if(e.key ==="c"){
        c.strokeStyle = "blue";
    }else if ( e.key==="b"){
        c.strokeStyle = "green";

    }else if ( e.key==="r"){

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
        c.putImageData(curImage,5 , 5);
        canvas.width=dim*1.5
        canvas.height=dim*1.5

        c.scale(1.5,1.5)
        c.transform(1.5,0,0,1.5,0,0)

    }else if ( e.key=== "x"){


        curImage = c.getImageData(0,0,dim,dim)


        c.clearRect(0, 0, dim, dim);
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

        c.strokeStyle = gradient;
        c.lineWidth = 5;

    }else{

        //console.log('hi')
    }


})


}






//
//        ///Third stroke?
//        c.rotate(deg * Math.PI / 180); // rotate canvas
//
//        c.beginPath()
//        c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
//        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)
//
//        c.closePath()
//        c.stroke()
//        //Bottom



//lul=(drawing)=>{
//    //console.log(drawing)
//    c.beginPath();
//    c.moveTo(drawing[0][0], drawing[0][1]);
//    c.lineWidth = 9;
//    //console.log(drawing[0])
//    for(let i =0;i <drawing.length;i++){
//        c.lineTo(drawing[i][0], drawing[i][1]);
//        c.stroke();
//    }
//    c.closePath();
//}

//const drawLine=(start,end)=>{
//
//    c.moveTo(...start)
//    c.lineTo(...end)
//    c.stroke()
//    c.closePath()
//
//}
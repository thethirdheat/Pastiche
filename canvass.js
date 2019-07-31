onload=()=>{

let canvas = document.querySelector('#myCanvas')



const dim=window.innerHeight

canvas.width =  dim
canvas.height = dim
const c = canvas.getContext('2d');


cantwo = document.querySelector('#cantwo')
cantwo.width =  dim
cantwo.height = dim

const c2 = cantwo.getContext('2d');

c.transform(1,0,0,1,dim/2,dim/2)
c.save()
//c2.stroke()
console.log(c2, 'hey now')
//c.stroke()


//c.beginPath();

//c.moveTo(50,300);
//c.stroke()

//let x=canvas.width/2
//let y=canvas.height/2
//let r=(canvas.height/2)*.9
//
let painting =false
let drawing=[]
let stuff=[]
let start=[]
let fin=[dim,dim]

function startPos(e){
    start=[e.clientX,e.clientY]

    painting = true;
    drawing=[]
    //c.beginPath()
}
function endPos(e){
    //fin=[e.clientX,e.clientY]

    stuff.push(drawing)

    drawing=[]
    prevPos=[]
    
    painting = false;
}


const drawLine=(start,end)=>{

    c.moveTo(...start)
    c.lineTo(...end)
    c.stroke()
    c.closePath()

}

//drawLine([0,0],[50,50])
drawCircle=( pos,r)=>{
    c.moveTo(...pos)
    //c.arc(pos[0]-4,pos[1]-r,r,0, Math.PI*2,false)
    c.arc(pos[0],pos[1],r,0, Math.PI*2,false)
    c.stroke();
    c.closePath();
}
//drawCircle([0,0],2)

//drawLine([0,0],[3,500])
let prevPos
num=1

let deg = 30
let line= 1

c.closePath();


const pencil = (e)=>{

    c.beginPath()
    c.moveTo(prevPos[0]-dim/2, prevPos[1]-dim/2)
    c.lineTo(e.clientX-dim/2, e.clientY-dim/2)

    c.closePath()
    c.stroke()

}

let curDraw = pencil

function draw(e, callback){


    if(!painting) return;
    if(!prevPos ){
        prevPos= [e.clientX,e.clientY]
        return
    }
    console.log(e)
        c.lineWidth = line;
        c.lineCap = 'round';
        c.strokeStyle = "green";
        c.beginPath()
        c.moveTo(prevPos[0]-dim/2,prevPos[1]-dim/2)
        c.lineTo(e.clientX-dim/2, e.clientY-dim/2)
        c.stroke()
        c.closePath()
        if(360%deg===0){
            
            for(let i =0;i < 360/deg;i++ ){
                //c.scale(1/(360/deg),1/(360/deg))
                c.rotate(deg * Math.PI / 180); // rotate canvas
                c.scale(1/2,1/2)
                pencil(e)
                c.scale(1.5,1.5)
                //drawLine(start,fin)
                //fin=[e.clientX-dim/2,e.clientY-dim/2]
                //start=[e.clientX-dim/2,e.clientY-dim/2]

                //callback(e)
            }
        }else{
            for(let i =0;i < 359;i++ ){
                c.rotate(deg * Math.PI / 180); // rotate canvas
                callback(e)

            }

        }

        for(let i =0;i < 360/deg;i++ ){
            c.scale(3,3)
        }

        c.restore()

        prevPos=[ e.clientX, e.clientY ]

}

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
canvas.addEventListener('mousemove',(e)=>draw(e,curDraw))


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


        curImage = c.getImageData(0,0,dim,dim)


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

        c.strokeStyle = gradient;
        c.lineWidth = 5;

    }else{

        console.log('hi')
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



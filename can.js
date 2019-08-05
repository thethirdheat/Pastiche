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
    drawPath.push([])
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
    console.log(screen.height,screen.width)
    let ax=0
    let ay=0
    if( mult!=1){
        ax=screen.innerWidth/2
        ay =screen.innerHeight/2
    }

    //c.moveTo((prevPos[0]-dim/2+this.scrollX )*mult, (prevPos[1]-dim/2+this.scrollY)*mult)
    c.moveTo((prevPos[0]-dim/2+this.scrollX-ax)*mult, (prevPos[1]-dim/2+this.scrollY-ay)*mult)
    c.lineTo((e.clientX-dim/2+this.scrollX-ax)*mult, (e.clientY-dim/2+this.scrollY-ay)*mult)

    drawPath.push([(e.clientX-dim/2+this.scrollX)*mult, (e.clientY-dim/2+this.scrollY)*mult])
    //console.log(mult,[e.clientX-dim/2+this.scrollX*mult, e.clientY-dim/2+this.scrollY*mult])

    c.closePath()
    c.stroke()

}

let curDraw = pencil
let mult=1

let mouseX ;
let mouseY ;
let drawPath=[]
function draw(e, callback){

    mouseX = e.pageX - this.offsetLeft + this.scrollX;
    mouseY = e.pageY - this.offsetTop+ this.scrollY;


    if(!painting) return;
    if(!prevPos ){
        prevPos = [mouseX+this.scrollX,mouseY+this.scrollY]
        return
    }
        c.lineWidth = line;
        c.lineCap = 'round';
        c.strokeStyle = "green";
        c.beginPath()

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


        prevPos=[ e.clientX , e.clientY]

}

canvas.addEventListener('mousedown', startPos)
canvas.addEventListener('mouseup', endPos)
canvas.addEventListener('mousemove',(e)=>draw(e,curDraw))
let transl=[0,0]


let curImage
let showing= true;
document.addEventListener('keydown',(e)=>{
    if(e.key==="j"){

        console.log(drawPath)
        c.scale(1/1.5,1/1.5)
        mult*=1.5

        c.clearRect(-dim, -dim, dim*2, dim*2);

        for(let i =0;i < 360/deg;i++ ){
            c.rotate(deg * Math.PI / 180); // rotate canvas
            for(let j =1;j < drawPath.length;j++){

                c.beginPath();
                c.moveTo(drawPath[j-1][0], drawPath[j-1][1]);

                c.lineTo(drawPath[j][0], drawPath[j][1]);
                c.closePath();
                c.stroke();
            }
        }



    }else if ( e.key==="h"){

        console.log(drawPath)
        c.scale(1.5,1.5)
        mult*=1/1.5

        c.clearRect(-dim, -dim, dim*2, dim*2);

        for(let i =0;i < 360/deg;i++ ){
            c.rotate(deg * Math.PI / 180); // rotate canvas
            for(let j =1;j < drawPath.length;j++){

                c.beginPath();
                c.moveTo(drawPath[j-1][0], drawPath[j-1][1]);

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
      let zoom = function(clicks,e){
          let scaleFactor=1.1
          var pt = c.transformedPoint(lastX,lastY);

          console.log('-----------------------------',pt,'-----------------------------')




          var factor = Math.pow(scaleFactor,clicks);
          mult*=1/factor
          c.translate((e.clientX-dim/2+this.scrollX),(e.clientY-dim/2+this.scrollY))
          transl=[(e.clientX-dim/2+this.scrollX), (e.clientY-dim/2+this.scrollY)]
          c.scale(factor,factor)


          c.translate(-(e.clientX-dim/2+this.scrollX),- (e.clientY-dim/2+this.scrollY))
          //let xtrans+= transl[0]

        c.clearRect(-dim, -dim, dim*2, dim*2);
        for(let i =0;i < 360/deg;i++ ){
            c.rotate(deg * Math.PI / 180); // rotate canvas
            for(let j =1;j < drawPath.length;j++){

                c.beginPath();
                c.moveTo(drawPath[j-1][0], drawPath[j-1][1]);

                c.lineTo(drawPath[j][0], drawPath[j][1]);
                c.closePath();
                c.stroke();
            }
        }




}
      let dragStart

      let handleScroll = function(evt){
          var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;

          if (delta) zoom(delta,evt);
          return evt.preventDefault() && false;
      };
        canvas.addEventListener('mousemove',function(evt){
          lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
          lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
          dragged = true;
          if (dragStart){
            var pt = c.transformedPoint(lastX,lastY);
            c.translate(pt.x-dragStart.x,pt.y-dragStart.y);
            redraw();
                }
      },false);
        c.transformedPoint = function(x,y){
          pt.x=x; pt.y=y;
          return pt.matrixTransform(xform.inverse());
      }
    let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    let xform = svg.createSVGMatrix();
    let  pt  = svg.createSVGPoint();
    
      canvas.addEventListener('DOMMouseScroll',handleScroll,false);
      canvas.addEventListener('mousewheel',handleScroll,false);


}



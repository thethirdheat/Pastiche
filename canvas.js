
onload=()=>{
    let canvas = document.querySelector('#myCanvas')
    let mouse={
        x:0,
        y:0
    }

    let scale=1
    let canvasRect = canvas.getBoundingClientRect();

    let prevPos=[0,0]

    function getCoords(e) {
        mouse.x = e.clientX || e.pageX || 0;
        mouse.y = e.clientY || e.pageY || 0;
        mouse.x -= canvasRect.left;
        mouse.y -= canvasRect.top;
        //mouse.x = cvSize*0.5 + (mouse.x - cvSize*0.5)/scale;
        //mouse.y = cvSize*0.5 + (mouse.y - cvSize*0.5)/scale;
    }
    const dim=window.innerHeight
    canvas.width =  dim
    canvas.height = dim
    const c = canvas.getContext('2d');

    let cvSize=dim


    let painting =false
    let drawing=[]
    let stuff=[]

    let start=[]
    function startPos(e){
        start=[e.clientX,e.clientY]
        painting = true;
    }

    function endPos(e){

        stuff.push(drawing)
        //panAmount=[0,0]

        //panAmount=[e.clientX-start[0],e.clientY-start[1]]

//        if(panning){
//            c.translate(panAmount[0],panAmount[1])
//        }
        redraw()
        
        painting = false;
    }



    num=1

    let line= 1
    let totalPan=[0,0]

    const redraw=()=>{
        c.clearRect(totalPan[0],totalPan[1], c.canvas.width, c.canvas.height);
        c.fillStyle = "#a0a0a0";
        c.fillRect(0,0,50,50)
        c.fillStyle = "#FF0000";
        c.fillRect(-totalPan[0],-totalPan[1],50,50)
        for(let i =1;i < drawing.length;i++){
            c.beginPath()
            //c.moveTo(drawing[i-1][0],drawing[i-1][1])
            //c.lineTo(drawing[i][0],drawing[i][1])
            prevX=drawing[i-1][0]
            prevY=drawing[i-1][1]
            curX=drawing[i][0]
            curY=drawing[i][1]
            c.moveTo(...[prevX,prevY])
            c.lineTo(...[curX,curY])
            c.closePath()
            c.stroke()
        }
    }

    let mult=1
    let screenToWorld=(ar)=>{
        return [(ar[0]/mult)-totalPan[0],(ar[1]/mult)-totalPan[1]]
    }
    const transl=(ar)=>{
        return [ar[0]-totalPan[0],ar[1]-totalPan[1]]

    }

    const draw=(e)=>{
        getCoords(e)
        //console.log(mouse.x,mouse.y)

        if(!painting) return;
        if(!prevPos ){
            prevPos= [e.clientX,e.clientY]
            return
        }
        console.log(window.offsetLeft)
         //let screenCursor=[e.pageX-this.offsetLeft,e.pageY-this.offsetTop]
        //drawing.push([e.clientX-totalPan[0],e.clientY-totalPan[1]])
        //drawing.push([e.clientX-totalPan[0],e.clientY-totalPan[1]])

        //drawing.push([e.clientX/mult+totalPan[0]/mult,e.clientY/mult+totalPan[1]/mult])


        //drawing.push([...screenToWorld([e.clientX,e.clientY])])
        //drawing.push([e.clientX,e.clientY])
        drawing.push(screenToWorld([e.clientX,e.clientY]))

        //console.log(totalPan)
//            if(true){
//            c.lineWidth = line;
//            c.lineCap = 'round';
//            c.beginPath()
//            c.moveTo(prevPos[0],prevPos[1])
//            c.lineTo(mouse.x,mouse.y)
//            c.closePath()
//            c.stroke()
//            c.save()
//
//            c.restore()
//            prevPos=[ mouse.x, mouse.y]
//        }
        redraw()
    }

    let drawTool=true


    const tool=(e)=>{
        if(drawTool){
            draw(e)
        }else{
            pan(e)
            //redraw()
            

        }
    }
    let panAmount=[0,0]
    const pan=(e)=>{
        //console.log(e.clientX,e.clientY,painting,'we are panning')

        //if(painting){
            panAmount[0]=e.clientX-prevPos[0]
            panAmount[1]=e.clientY-prevPos[1]
            totalPan[0]+=panAmount[0]
            totalPan[1]+=panAmount[1]

            //console.log(e.clientX,e.clientY,'this is it?')
            console.log(panAmount)
            c.translate(...panAmount)
            prevPos=[e.clientX,e.clientY]
            //console.log(prevPos,'this is prev')
            c.clearRect(-totalPan[0],-totalPan[1], c.canvas.width, c.canvas.height);
            //c.clearRect(totalPan[0],totalPan[1], c.canvas.width, c.canvas.height);
            redraw()
        //}
    }


    canvas.addEventListener('mousedown', startPos,false)
    canvas.addEventListener('mouseup', endPos,false)
    canvas.addEventListener('mousemove',tool,false)
    let panning=false


    document.addEventListener('keydown',(e)=>{
        if ( e.key==="h"){
            mult+=.1
            c.scale(mult,mult)
            scale=mult

        }
        if(e.key===" "){
            panning=!panning
            drawTool= !drawTool
            //console.log('pan',panning)
            //c.translate(200,0)
            redraw()
        }
    })

}



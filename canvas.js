onload=()=>{
    //Setting up Canvas
    let canvas = document.querySelector('#myCanvas')
    //const dim=window.innerHeight
    const dim=window.innerWidth
    canvas.width =  dim
    canvas.height = dim
    const c = canvas.getContext('2d');


    //Zoom Factor
    let scale=1

    //Last Position
    let prevPos=[0,0]
    let start=[]

    //Boxes Indicating alst click
    let boxes=[]


    //If mouse1 is down
    let painting =false

    //The array of [x,y] coordinates for the strokes
    let drawing=[]


    //This is the offset for the pan Amount
    let totalPan=[0,0]


    //This is the difference between when the mouse is clicked to start pan and the new postion its dragged to
    let panAmount=[0,0]


    const startPos=(e)=>{
        start=[e.clientX,e.clientY]
        painting = true;
        boxes.push(start)
    }

    const endPos=(e)=>{
        redraw()
        //totalPan[0]=totalPan[0]/scale
        //totalPan[1]=totalPan[1]/scale
        painting = false;

    }




    const redraw=()=>{
        console.log(totalPan,'-----------this is to talp apn --------------')
        c.clearRect(-totalPan[0]*scale,-totalPan[1]*scale, c.canvas.width*scale, c.canvas.height*scale);

        c.fillStyle = "#a0a0a0";
        c.fillRect(0,0,50,50)
        c.fillStyle = "#FF0000";
        c.fillRect(-totalPan[0],-totalPan[1],50,50)
        for(let i =1;i < drawing.length;i++){
            c.beginPath()
            prevX=drawing[i-1][0]
            prevY=drawing[i-1][1]
            curX=drawing[i][0]
            curY=drawing[i][1]
            c.moveTo(...[prevX,prevY])
            c.lineTo(...[curX,curY])
            c.closePath()
            c.stroke()
        }

        //Draw Boxes On Clicks
        for(let i =0;i< boxes.length;i++){
            c.fillRect(...boxes[i],50,50) 
        }
    }

    let mult=1
    //This transform screen coorindates to the painting coordinates
    let screenToWorld=(ar)=>{
        return [(ar[0]/scale)-totalPan[0],(ar[1]/scale)-totalPan[1]]
    }

    const worldToScreen=(ar)=>{
        return [(ar[0]-totalPan[0])*mult,(ar[1]-totalPan[1])*scale]
    }
    let zoomedOffset=[0,0]
    let zoomed=false

    const draw=(e)=>{
        if(!painting) return;
        if(!prevPos ){
            prevPos= [e.clientX,e.clientY]
            return
        }

        /*thi sis working */
        //drawing.push([...screenToWorld([e.clientX/scale,e.clientY/scale])])
        /*this */

        drawing.push([...screenToWorld([e.clientX,e.clientY])].slice())

       redraw()
    }

    //This is to toggle on and of the 'brush' tool as opposed to panning
    let drawTool=true



    //The tool which will be called to brush or pan
    const tool=(e)=>{
        currentCoord=[e.clientX,e.clientY]
        if(drawTool){
            draw(e)
        }else{
            pan(e)
            redraw()
        }
    }


    const pan=(e)=>{
        if(painting){
            /*
                const x = event.center.x / (this._canvas.width / sWidth) + this._sx;
                const y = event.center.y / (this._canvas.height / sHeight) + this._sy;
                this._sx += (this._canvasPanStart.x - x);
                this._sy += (this._canvasPanStart.y - y) ;
            */

            panAmount[0]=(e.clientX-start[0])/scale
            panAmount[1]=(e.clientY-start[1])/scale


            totalPan[0]+=panAmount[0]
            totalPan[1]+=panAmount[1]

            start=[e.clientX,e.clientY]

            c.translate(...panAmount)
            c.clearRect(-totalPan[0]*scale,-totalPan[1]*scale, c.canvas.width*scale, c.canvas.height*scale);
            //c.clearRect(totalPan[0],totalPan[1], c.canvas.width, c.canvas.height);
            redraw()
        }
    }


    let panning=false


    document.addEventListener('keydown',(e)=>{
        e.preventDefault()
        if ( e.key==="h"){
            let zoomed=true
            mult+=.1

            //let hold =[1,1]
            let hold =currentCoord

            let beforeZoom=screenToWorld(hold)
            c.translate(-totalPan[0],-totalPan[1])
            c.scale(mult,mult)
            scale*=mult

            let afterZoom=screenToWorld(hold)

            totalPan=[0,0]
            //let zoomedOffset=[beforeZoom[0]-afterZoom[0],beforeZoom[1]-afterZoom[1]]

            console.log(zoomedOffset)
            //totalPan[0]-=zoomedOffset[0]
            //totalPan[1]-=zoomedOffset[1]



            redraw()
        }else if(e.key==='g'){
            mult-=.1
            c.translate(-totalPan[0],-totalPan[1])
            c.scale(mult,mult)

            scale*=mult
            totalPan=[0,0]
            redraw()

        }else if(e.key==='z'){
            c.scale(1/scale,1/scale)
            scale=1
            c.translate(-totalPan[0],-totalPan[1])

            totalPan=[0,0]
            redraw()
        }

        if(e.key===" "){
            panning=!panning
            drawTool= !drawTool
            redraw()
        }

    })

    canvas.addEventListener('mousedown', startPos,false)
    canvas.addEventListener('mouseup', endPos,false)
    canvas.addEventListener('mousemove',tool,false)

}



onload=()=>{

    //Setting up Canvas
    let canvas = document.querySelector('#myCanvas')
    //const dim=window.innerHeight
    let dim=window.innerWidth
    canvas.width =  dim*2
    canvas.height = dim*2
    const c = canvas.getContext('2d');
    dim=-window.innerWidth/2-100
    dimY= window.innerHeight/2


    //Zoom Factor
    let scale=1

    //Last Position
    let prevPos=[0,0]
    let start=[]

    //Boxes Indicating alst click
    //let boxes=[]

    let brushWidth=.25
    let brushColor='green'
    let gridWidth = 1


    //If mouse1 is down
    let painting =false
    let drawing=[[undefined,undefined,undefined,undefined]]

    //The array of [x,y] coordinates for the strokes
    if(localStorage.drawing){
        //console.log(localStorage.drawing)
        //drawing=JSON.parse(localStorage.getItem('drawing'))
        //drawing=JSON.parse(localStorage.getItem('drawing'))
    }


    //This is the offset for the pan Amount
    let totalPan=[0,0]


    //This is the difference between when the mouse is clicked to start pan and the new postion its dragged to
    let panAmount=[0,0]


    const startPos=(e)=>{
        start=[e.clientX,e.clientY]
        painting = true;
        //boxes.push(start)
    }

    const endPos=(e)=>{
        //redraw()
        //totalPan[0]=totalPan[0]/scale
        //totalPan[1]=totalPan[1]/scale
        painting = false;
        drawing.push([undefined,undefined,undefined,undefined])
        if(zoomInTool){
            zoomIn()
        }

    }

    c.translate(-dim,dimY)
    let deg = 30


    let gridOn=true

    const redraw=()=>{
        //localStorage.setItem('drawing', JSON.stringify(drawing))
        //window.localStorage['drawing']=JSON.stringify(drawing)
        //canvas.width =  canvas.width
        //console.log(totalPan,'-----------this is to talp apn --------------')
        let rectMult = scale<1 ?  10000000000000*(1/scale):1
        console.log('this is saclae', scale, rectMult)
        c.clearRect((-totalPan[0]+dim)*rectMult,(-totalPan[1]+dim)*rectMult, (c.canvas.width+dim)*rectMult, (c.canvas.height+dim)*rectMult);
        //c.clearRect(-Infinity,-Infinity,Infinity,Infinity)

        //c.clearRect((-totalPan[0]-dim),(-totalPan[1]-dim), (c.canvas.width+dim), (c.canvas.height+dim));

//        c.fillStyle = "#a0a0a0";
//        c.fillRect(0,0,50,50)
//        c.fillStyle = "#FF0000";
        //c.fillStyle = brushColor
        //c.strokeStyle=brushColor

        //c.fillRect(-totalPan[0],-totalPan[1],50,50)
        //c.lineWidth=brushWidth*2
        let curBrushColor
        let curBrushWidth
        for(let i =1;i < drawing.length;i++){

            if(360%deg===0){
                for(let j =0;j < 360/deg;j++ ){
                c.rotate(deg * Math.PI / 180); // rotate canvas
            curBrushColor = drawing[i][3]
            curBrushWidth = drawing[i][2]

            c.strokeStyle=curBrushColor
            c.fillStyle = curBrushColor

            c.lineWidth=curBrushWidth*2
            c.beginPath()
            prevX=drawing[i-1][0]
            prevY=drawing[i-1][1]
            curX=drawing[i][0]
            curY=drawing[i][1]
            c.moveTo(...[prevX,prevY])
            c.lineTo(...[curX,curY])
            c.closePath()

            c.stroke()
            //c.arc(curX,curY,curBrushWidth*.85,0, Math.PI*2,false)
            c.arc(curX,curY,curBrushWidth,0, Math.PI*2,false)
            c.fill()
                }
            }
        }
        //if(gridOn===true){
        if(gridOn){
            c.lineWidth=gridWidth
            if(360%deg===0){
                for(let j =0;j < 360/deg;j++ ){
                c.rotate(deg * Math.PI / 180); // rotate canvas
            c.strokeStyle='black'
            c.beginPath();
            c.moveTo(-3000, 0);
            c.lineTo( 3000,0);
            c.stroke();
                }
            }
        }

        //Draw Boxes On Clicks
//        for(let i =0;i< boxes.length;i++){
//            c.fillRect(...boxes[i],50,50) 
//        }
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
        if(360%deg===0){
            for(let j =0;j < 360/deg;j++ ){
            c.rotate(deg * Math.PI / 180); // rotate canvas

        c.beginPath()
//        console.log(screen.height,screen.width)
//        let ax=0
//        let ay=0
//        if( mult!=1){
//            ax=screen.innerWidth/2
//            ay =screen.innerHeight/2
//        }
    
            //c.moveTo((prevPos[0]-dim/2+this.scrollX )*mult, (prevPos[1]-dim/2+this.scrollY)*mult)
        c.strokeStyle=brushColor
        c.fillStyle = brushColor

        c.lineWidth=brushWidth*2
        //c.moveTo((prevPos[0]-center[0]+this.scrollX)*mult, (prevPos[1]-center[1]+this.scrollY)*mult)
        if(!drawing.length){
            drawing.push([...screenToWorld([e.clientX+dim,e.clientY-dimY]),brushWidth,brushColor])
        }
        c.moveTo(drawing[drawing.length-1][0], drawing[drawing.length-1][1])
        //c.lineTo((e.clientX-center[0]+this.scrollX)*mult, (e.clientY-center[1]+this.scrollY)*mult)
        c.lineTo(...screenToWorld([e.clientX+dim,e.clientY-dimY]))
    
        //console.log(mult,[e.clientX-dim/2+this.scrollX*mult, e.clientY-dim/2+this.scrollY*mult])
    
        c.closePath()
        c.stroke()
        //c.arc(curX,curY,brushWidth,0, Math.PI*2,false)
        c.arc(...screenToWorld([e.clientX+dim,e.clientY-dimY]),brushWidth,0,Math.PI*2,false)
        c.fill()
            }
        }
        drawing.push([...screenToWorld([e.clientX+dim,e.clientY-dimY]),brushWidth,brushColor])
        if(gridOn){
            c.lineWidth=gridWidth
            if(360%deg===0){
                for(let j =0;j < 360/deg;j++ ){
                c.rotate(deg * Math.PI / 180); // rotate canvas
            c.strokeStyle='black'
            c.beginPath();
            c.moveTo(-3000, 0);
            c.lineTo( 3000,0);
            c.stroke();
                }
            }
        }


       //redraw()
    }

    //This is to toggle on and of the 'brush' tool as opposed to panning
    let drawTool=true
    let panTool =false
    let zoomInTool=false



    //The tool which will be called to brush or pan
    const tool=(e)=>{
        currentCoord=[e.clientX,e.clientY]
        if(drawTool){
            draw(e)
        }else if(panTool){
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
            //c.clearRect(-totalPan[0]*scale,-totalPan[1]*scale, c.canvas.width*scale, c.canvas.height*scale);
            //c.clearRect(totalPan[0],totalPan[1], c.canvas.width, c.canvas.height);
        }
    }
    const zoomIn = ()=>{

            let zoomed=true
            mult+=.1

            //let hold =[1,1]
            let hold =[currentCoord[0]+dim,currentCoord[1]-dimY]
            console.log(currentCoord,'<--------------------this is curcord')
            console.log(hold,'<--------------------this is hold')

            let beforeZoom=screenToWorld(hold)


            c.translate(-totalPan[0],-totalPan[1])
            scale*=mult
            c.scale(mult,mult)

            //c.translate(totalPan[0]*mult,totalPan[1]*mult)
            //totalPan[0]-=totalPan[0]*mult
            //totalPan[1]-=totalPan[1]*mult

            let afterZoom=screenToWorld(hold)




            let zoomedOffset=[beforeZoom[0]-afterZoom[0],beforeZoom[1]-afterZoom[1]]
            console.log("thisi is before",beforeZoom,'this is afeter: ',afterZoom)
            console.log('this isis zoomofset',zoomedOffset)
            //c.translate(...zoomedOffset)
            let trsl=[-zoomedOffset[0]+totalPan[0],-zoomedOffset[1]+totalPan[1]]
            c.translate(...trsl)
            totalPan=trsl


            console.log(trsl,'<=====================this is is translate?')
            //console.log(zoomedOffset,"this is offset", beforeZoom,'thisis after:',afterZoom)
            //totalPan[0]-=zoomedOffset[0]
            //totalPan[1]-=zoomedOffset[1]
            //console.log(mult)
            redraw()

    }


    let panning=false


    document.addEventListener('keydown',(e)=>{
        e.preventDefault()
        if ( e.key==="h"){
            let zoomed=true
            mult+=.1

            //let hold =[1,1]
            let hold =[currentCoord[0]+dim,currentCoord[1]-dimY]
            console.log(currentCoord,'<--------------------this is curcord')
            console.log(hold,'<--------------------this is hold')

            let beforeZoom=screenToWorld(hold)


            c.translate(-totalPan[0],-totalPan[1])
            scale*=mult
            c.scale(mult,mult)

            //c.translate(totalPan[0]*mult,totalPan[1]*mult)
            //totalPan[0]-=totalPan[0]*mult
            //totalPan[1]-=totalPan[1]*mult

            let afterZoom=screenToWorld(hold)




            let zoomedOffset=[beforeZoom[0]-afterZoom[0],beforeZoom[1]-afterZoom[1]]
            console.log("thisi is before",beforeZoom,'this is afeter: ',afterZoom)
            console.log('this isis zoomofset',zoomedOffset)
            //c.translate(...zoomedOffset)
            let trsl=[-zoomedOffset[0]+totalPan[0],-zoomedOffset[1]+totalPan[1]]
            c.translate(...trsl)
            totalPan=trsl


            console.log(trsl,'<=====================this is is translate?')
            //console.log(zoomedOffset,"this is offset", beforeZoom,'thisis after:',afterZoom)
            //totalPan[0]-=zoomedOffset[0]
            //totalPan[1]-=zoomedOffset[1]
            //console.log(mult)



            redraw()
        }else if(e.key==='g'){
            mult-=.1
//            c.translate(-totalPan[0],-totalPan[1])
//            c.scale(mult,mult)
//
//            scale*=mult
//            totalPan=[0,0]
//            redraw()
//

            let hold =[currentCoord[0]+dim,currentCoord[1]-dimY]
            //console.log(currentCoord,'<--------------------this is curcord')
            //console.log(hold,'<--------------------this is hold')

            let beforeZoom=screenToWorld(hold)


            c.translate(-totalPan[0],-totalPan[1])
            scale*=mult
            c.scale(mult,mult)

            //c.translate(totalPan[0]*mult,totalPan[1]*mult)
            //totalPan[0]-=totalPan[0]*mult
            //totalPan[1]-=totalPan[1]*mult

            let afterZoom=screenToWorld(hold)




            let zoomedOffset=[beforeZoom[0]-afterZoom[0],beforeZoom[1]-afterZoom[1]]
            //console.log("thisi is before",beforeZoom,'this is afeter: ',afterZoom)
            //console.log('this isis zoomofset',zoomedOffset)
            //c.translate(...zoomedOffset)
            let trsl=[-zoomedOffset[0]+totalPan[0],-zoomedOffset[1]+totalPan[1]]
            c.translate(...trsl)
            totalPan=trsl


            //console.log(trsl,'<=====================this is is translate?')
            //console.log(zoomedOffset,"this is offset", beforeZoom,'thisis after:',afterZoom)
            //totalPan[0]-=zoomedOffset[0]
            //totalPan[1]-=zoomedOffset[1]
            //console.log(mult)



            redraw()

        }else if(e.key==='z'){
            c.translate(-totalPan[0],-totalPan[1])
            totalPan=[0,0]
            c.scale(1/scale,1/scale)
            mult=1
            scale=1

            redraw()
        }

        if(e.key===" "){
            panning=!panning
            drawTool= !drawTool
            panTool=!panTool

            //redraw()
        }
        if(e.key==="q"){
            console.log(brushColor)
            brushColor='green'
        }
        if(e.key==="w"){
            console.log(brushColor)
            brushColor='pink'
        }
        if(e.key==="e"){
            brushWidth=35
        }

    })
    function change(e){
        brushColor=this.value
        console.log(this.value)
        //color = this.value;

    }

    document.getElementById("html5colorpicker").onchange = change;

    document.getElementById("undoButton").onclick = undo;
    let redoArray=[]


    function undo(){
        drawing.pop()
        let holderArray=[]
        if(drawing[drawing.length-1]){
            console.log(drawing[drawing.length-1])
            while(drawing[drawing.length-1][0]!==undefined){
                holderArray.push(drawing.pop())
            }
        }else{
            drawing=[[undefined,undefined,undefined,undefined]]
        }
        console.log(drawing[drawing.length-1])
        redoArray.push(holderArray)
        redraw()
    }

    function redo(){

    }
    let slider = document.getElementById("myRange");

    let zoomInButton = document.getElementById("zoomIn");

    let gridHtml = document.getElementById("grids");

    let panButton = document.getElementById("pan");

    let resetButton = document.getElementById("reset");

    gridHtml.onclick = function(){
        gridOn=!gridOn
        redraw()
    }
    resetButton.onclick=function(){
        c.translate(-totalPan[0],-totalPan[1])
        totalPan=[0,0]
        c.scale(1/scale,1/scale)
        mult=1
        scale=1

        redraw()

    }

    zoomInButton.onclick=function(){
        console.log('draw should be fales')
        drawTool=false
        panTool=false
        zoomInTool=!zoomInTool


    }

    panButton.onclick = function(){
        panning=!panning
        drawTool= !drawTool
        panTool=!panTool
    }
    //output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        //output.innerHTML = this.v        <button id="grids">Grid</button>alue;
        brushWidth=this.value
    }

    canvas.addEventListener('mousedown', startPos,false)
    canvas.addEventListener('mouseup', endPos,false)
    canvas.addEventListener('mousemove',tool,false)

    window.onresize = function(e){


        
         dim= window.innerWidth
        //canvas.width =  wind*2
        //canvas.height = wind*2
         console.log('this is in the  resize: withis is::', dim)
    }
    redraw()

}



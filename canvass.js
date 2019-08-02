
onload=()=>{

    let canvas = document.querySelector('#myCanvas')
    const dim=window.innerHeight

    canvas.width =  dim
    canvas.height = dim
    const c = canvas.getContext('2d');


    //c.transform(1,0,0,1,dim/2,dim/2)

    canvas.addEventListener('mousedown', function(e){
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
                
        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        console.log(clickX)
        redraw();
    })


    canvas.addEventListener('mousemove', function(e){
        if(paint){
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redraw();
        }
    });

    canvas.addEventListener('mouseup', function(e){
        paint = false;
    });


    canvas.addEventListener('mouseleave', function(e){
        paint = false;
    });

    let clickX = new Array();
    let clickY = new Array();
    let clickDrag = new Array();
    let paint;

    function addClick(x, y, dragging) {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }
    let deg=60

    c.transform(1,0,0,1,dim/2,dim/2)
    function redraw(){
        c.clearRect(0, 0, c.canvas.width, c.canvas.height); // Clears the canvas
  
        c.strokeStyle = "#df4b26";
        c.lineJoin = "round";
        c.lineWidth = 5;
                    
        for(var i=0; i < clickX.length; i++) {		
            c.beginPath();
            if(clickDrag[i] && i){
            c.moveTo(clickX[i-1], clickY[i-1]);
            }else{
            c.moveTo(clickX[i]-1, clickY[i]);
            }
            c.lineTo(clickX[i], clickY[i]);
            c.closePath();
            c.stroke();
        }


            if(360%deg===0){
            
            for(let j =0;j < 360/deg;j++ ){
                c.rotate(deg * Math.PI / 180); // rotate canvas
                for(var i=0; i < clickX.length; i++) {		
                    c.beginPath();
                    if(clickDrag[i] && i){
                    c.moveTo(clickX[i-1], clickY[i-1]);
                    }else{
                    c.moveTo(clickX[i]-1, clickY[i]);
                    }
                    c.lineTo(clickX[i], clickY[i]);
                    c.closePath();
                    c.stroke();
                }

            }
            }else{
                for(let j =0;j < 359;j++ ){
                    c.rotate(deg * Math.PI / 180); // rotate canvas
                for(var i=0; i < clickX.length; i++) {		
                    c.beginPath();
                    if(clickDrag[i] && i){
                    c.moveTo(clickX[i-1], clickY[i-1]);
                    }else{
                    c.moveTo(clickX[i]-1, clickY[i]);
                    }
                    c.lineTo(clickX[i], clickY[i]);
                    c.closePath();
                    c.stroke();
                }

                    //callback(e)

                }

            }


        }
        console.log(clickX)
    }


//}
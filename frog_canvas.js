	var canvas = document.getElementsByTagName('canvas')[0];
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let cur=[0,0]
    document.addEventListener('keydown',(e)=>drg=!drg)
    let drg=false
      //let cur=[0,0]


      let mult=1
	var gkhead = new Image;

	window.onload = function(){		
    
		    var ctx = canvas.getContext('2d');
		    trackTransforms(ctx);
		  
    function redraw(){

          // Clear the entire canvas
          var p1 = ctx.transformedPoint(0,0);
          var p2 = ctx.transformedPoint(canvas.width,canvas.height);
          ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);

          ctx.save();
          ctx.setTransform(1,0,0,1,0,0);
          ctx.clearRect(0,0,canvas.width,canvas.height);
          ctx.restore();

          ctx.drawImage(gkhead,0,0);

        }
        redraw();

      var lastX=canvas.width/2, lastY=canvas.height/2;

      var dragStart,dragged;
      let space=true

      canvas.addEventListener('mousedown',function(evt){

        if(drg){

          document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
          lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
          lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
          dragStart = ctx.transformedPoint(lastX,lastY);
          dragged = false;
        }
      },false);

      canvas.addEventListener('mousemove',function(evt){
          lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
          lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
          dragged = true;
          if (dragStart){
            var pt = ctx.transformedPoint(lastX,lastY);
            ctx.translate(pt.x-dragStart.x,pt.y-dragStart.y);
            cur[0]+= pt.x-dragStart.x
            cur[1]+=pt.y-dragStart.y
            //console.log(cur,'======this is cur=====')
            redraw();
                }
      },false);

      canvas.addEventListener('mouseup',function(evt){
          dragStart = null;
          //ctx.transform(1,0,0,1,cur[0],cur[1])
          //ctx.transform(1,0,0,1,window.innerWidth/2,window.innerWidth/2)
          if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
      },false);

      var scaleFactor = 1.1;

      var zoom = function(clicks){
          //cur=[cur[0],cur[1]]
          var pt = ctx.transformedPoint(lastX,lastY);
          //cur=[0,0]
          //ctx.translate(pt.x,pt.y);
          var factor = Math.pow(scaleFactor,clicks);
          ctx.scale(factor,factor);
          mult*=(1/factor)
          //ctx.translate(-pt.x,-pt.y);
          redraw();
//          console.log(clicks)
//          var pt = ctx.transformedPoint(lastX,lastY);
//          //ctx.translate(pt.x,pt.y);
//          ctx.translate(cur[0],cur[1]);
//          //cur=[pt.x,pt.y]
//          var factor = Math.pow(scaleFactor,clicks);
//          ctx.scale(factor,factor);
//          mult*=(1/factor)
//          //ctx.translate(-pt.x,-pt.y);
//          ctx.translate(-cur[0],-cur[1]);
//          //ctx.transform(1,0,0,1,lastX,lastY )
//          redraw();
      }

      var handleScroll = function(evt){
          var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;
          if (delta) zoom(delta);
          return evt.preventDefault() && false;
      };
    
      canvas.addEventListener('DOMMouseScroll',handleScroll,false);
      canvas.addEventListener('mousewheel',handleScroll,false);
	};

	gkhead.src = 'https://i.imgur.com/1QC2elw.png';
	
	// Adds ctx.getTransform() - returns an SVGMatrix
	// Adds ctx.transformedPoint(x,y) - returns an SVGPoint
	function trackTransforms(ctx){
      var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
      var xform = svg.createSVGMatrix();
      ctx.getTransform = function(){ return xform; };

      var savedTransforms = [];
      var save = ctx.save;
      ctx.save = function(){
          savedTransforms.push(xform.translate(0,0));
          return save.call(ctx);
      };
    
      var restore = ctx.restore;
      ctx.restore = function(){
        xform = savedTransforms.pop();
        return restore.call(ctx);
		      };

      var scale = ctx.scale;
      ctx.scale = function(sx,sy){
        xform = xform.scaleNonUniform(sx,sy);
        return scale.call(ctx,sx,sy);
		      };
    
      var rotate = ctx.rotate;
      ctx.rotate = function(radians){
          xform = xform.rotate(radians*180/Math.PI);
          return rotate.call(ctx,radians);
      };
    
      var translate = ctx.translate;
      ctx.translate = function(dx,dy){
          xform = xform.translate(dx,dy);
          return translate.call(ctx,dx,dy);
      };
    
      var transform = ctx.transform;
      ctx.transform = function(a,b,c,d,e,f){
          var m2 = svg.createSVGMatrix();
          m2.a=a; m2.b=b; m2.c=c; m2.d=d; m2.e=e; m2.f=f;
          xform = xform.multiply(m2);
          return transform.call(ctx,a,b,c,d,e,f);
      };
    
      var setTransform = ctx.setTransform;
      ctx.setTransform = function(a,b,c,d,e,f){
          xform.a = a;
          xform.b = b;
          xform.c = c;
          xform.d = d;
          xform.e = e;
          xform.f = f;
          return setTransform.call(ctx,a,b,c,d,e,f);
      };
    
      var pt  = svg.createSVGPoint();
      ctx.transformedPoint = function(x,y){
          pt.x=x; pt.y=y;
          return pt.matrixTransform(xform.inverse());
      }

    canvas.addEventListener('mousedown', function(e){
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
                
        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        //console.log(clickX)
        redraw();
    })


    canvas.addEventListener('mousemove', function(e){
        //debugger
        if(paint){
            console.log((e.pageX - this.offsetLeft)*mult-cur[0], (e.pageY - this.offsetTop)*mult-cur[1]);
            console.log(e.pageX,e.pageY)
            console.log(cur,"----------thsiis i cur-------")

            let screenCursor=[e.pageX-this.offsetLeft,e.pageY-this.offsetTop]
            screenCursor[0]*=mult
            screenCursor[1]*=mult
            screenCursor[0]-=cur[0]*mult
            screenCursor[1]-=cur[1]*mult
            //addClick((e.pageX - this.offsetLeft)*mult-cur[0]*(1/mult), (e.pageY - this.offsetTop)*mult-cur[1]*(1/mult), true);
            addClick(...screenCursor, true);
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

    //canvas.transform(1,0,0,1,dim/2,dim/2)
    function redraw(){
        //canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height); // Clears the canvas
  
        ctx.strokeStyle = "#df4b26";
        ctx.lineJoin = "round";
        ctx.lineWidth = 5;
        //console.log(cur,'this is is in redraw')
        //ctx.transform(1,0,0,cur[0],cur[1])
                    
        for(var i=0; i < clickX.length; i++) {		
            ctx.beginPath();
            if(clickDrag[i] && i){
            ctx.moveTo(clickX[i-1], clickY[i-1]);
            }else{
            ctx.moveTo(clickX[i]-1, clickY[i]);
            }
            ctx.lineTo(clickX[i], clickY[i]);
            ctx.closePath();
            ctx.stroke();
        }


            if(360%deg===0){
            
            for(let j =0;j < 360/deg;j++ ){
                ctx.rotate(deg * Math.PI / 180); // rotate canvas
                for(var i=0; i < clickX.length; i++) {		
                    ctx.beginPath();
                    if(clickDrag[i] && i){
                    ctx.moveTo(clickX[i-1], clickY[i-1]);
                    }else{
                    ctx.moveTo(clickX[i]-1, clickY[i]);
                    }
                    ctx.lineTo(clickX[i], clickY[i]);
                    ctx.closePath();
                    ctx.stroke();
                }

            }
            }else{
                for(let j =0;j < 359;j++ ){
                    ctx.rotate(deg * Math.PI / 180); // rotate canvas
                for(var i=0; i < clickX.length; i++) {		
                    ctx.beginPath();
                    if(clickDrag[i] && i){
                    ctx.moveTo(clickX[i-1], clickY[i-1]);
                    }else{
                    ctx.moveTo(clickX[i]-1, clickY[i]);
                    }
                    ctx.lineTo(clickX[i], clickY[i]);
                    ctx.closePath();
                    ctx.stroke();
                }

                    //callback(e)

                }

            }


        }
        //console.log(clickX)
	}
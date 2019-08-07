$(document).ready(function () {
    var canvas = document.getElementById("paintCanvas"),
    paintContext = paintCanvas.getContext("2d"),
        currentPathIndex = 0,
        draw = false,
        paths = [],
        scale = 1,
        scaleStep = 0.25,
        styles = {
            lineWidth: 10,
            strokeStyle: "#000000"
        };

    paintContext.imageSmoothingEnabled = false;
    paintContext.mozImageSmoothingEnabled=false;
    paintContext.webkitImageSmoothingEnabled=false;
    var cvSize = 500;

    var drawCanvas = document.createElement('canvas');
    var drawCtx = drawCanvas.getContext('2d');

    drawCanvas.width = drawCanvas.height = cvSize;
    canvas.width = canvas.height = cvSize;

    var context = drawCtx;

    function updatePaintCanvas() {
            paintContext.clearRect(0, 0, paintContext.canvas.width, paintContext.canvas.height); 
        paintContext.save();
        paintContext.translate(cvSize*0.5, cvSize*0.5);
        paintContext.scale(scale, scale);
        paintContext.drawImage(drawCanvas, -cvSize*0.5, -cvSize*0.5);
        paintContext.restore();
    }


    var canvasRect = canvas.getBoundingClientRect();
    var mouse = {
        x: 0,
        y: 0
    };

    function getCoords(e) {
        mouse.x = e.clientX || e.pageX || 0;
        mouse.y = e.clientY || e.pageY || 0;
        mouse.x -= canvasRect.left;
        mouse.y -= canvasRect.top;
        mouse.x = cvSize*0.5 + (mouse.x - cvSize*0.5)/scale;
        mouse.y = cvSize*0.5 + (mouse.y - cvSize*0.5)/scale;
    }

    function applyStyles(context, styles) {
        for (var style in styles)
        context[style] = styles[style];
    };

    function reDrawHistory() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.save();
        applyStyles(context, styles);
        scaleFromCenter(context, scale);
        for (var i = 0; i < paths.length; i++) {
            context.beginPath();
            context.moveTo(paths[i][0].x, paths[i][0].y);
            for (var j = 1; j < paths[i].length; j++)
            context.lineTo(paths[i][j].x, paths[i][j].y);
            context.stroke();
        }
        context.restore();
    }

    function zoom(context, paths, styles, scale) {

    };

    $("#clear").on("click", function () {
        paths = [];
        currentPathIndex = 0;
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    });

    $("#zoomIn").on("click", function () {
        scale += scaleStep;
        updatePaintCanvas();
    });

    $("#zoomOut").on("click", function () {
        scale -= scaleStep;
        updatePaintCanvas();
    });

    $("#paintCanvas").on("mousedown", function (e) {
        getCoords(e);
        draw = true;
        context.save();
        applyStyles(context, styles);
        context.beginPath();
        context.moveTo(mouse.x, mouse.y);
        updatePaintCanvas();

        // save the path to memory
        if (typeof paths[currentPathIndex] == 'undefined') paths[currentPathIndex] = [];

        paths[currentPathIndex].push({
            x: mouse.x,
            y: mouse.y
        })

    });

    $("#paintCanvas").on("mousemove", function (e) {
        getCoords(e);
        if (draw) {
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
                        updatePaintCanvas();
            paths[currentPathIndex].push({
                x: mouse.x,
                y: mouse.y
            })
        }
    });

    $("#paintCanvas").on("mouseup", function (e) {
        draw = false;
        context.restore();
        currentPathIndex++;
        updatePaintCanvas();
    });


});
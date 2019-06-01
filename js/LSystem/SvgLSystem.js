function SvgLSystem(container) {
    
    var def = null;
    var n = 0;
    var b = {x1:0, x2:0, y1:0, y2:0};
        
    var svg = null;
        
    var h = null;
    var t = null;
    var drawing = false;
 
    this.onTurtleStep = function(currentStep, totalSteps) {
    };
 
    this.onPauseDraw = function() {
    };
 
    this.onStartDraw = function() {
    };
    
    function clear() {
        if (drawing)
            return;    
            
        if (svg != null) 
            container.removeChild(svg);
          
        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttributeNS(null, "preserveAspectRatio", "xMidYMid meet");
        container.appendChild(svg);
    }

    function line(x1, y1, x2, y2) {
        b.x1 = Math.min(b.x1, x1, x2);
        b.y1 = Math.min(b.y1, y1, y2);
        b.x2 = Math.max(b.x2, x1, x2);
        b.y2 = Math.max(b.y2, y1, y2);  
    
        var viewBox = (b.x1-1) + ',' + (b.y1-1) + ',' + (b.x2-b.x1+2) + ',' + (b.y2-b.y1+2);
        svg.setAttributeNS(null, 'viewBox', viewBox);
    
        var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        //moved to css
        //line.setAttributeNS(null, 'vector-effect', 'non-scaling-stroke');
        //line.setAttributeNS(null, 'stroke', 'black');
        //line.setAttributeNS(null, 'stroke-width', '1');
        //line.setAttributeNS(null, 'stroke-linecap', 'round'); 
        line.setAttributeNS(null, 'x1', x1);
        line.setAttributeNS(null, 'y1', y1);
        line.setAttributeNS(null, 'x2', x2);
        line.setAttributeNS(null, 'y2', y2);
        svg.appendChild(line);
    };
    
    this.initialize = function (defA, nA) {
        if (drawing)
            return;
            
        clear(); //important - create empty svg
  
        def = defA;
        n = nA;
        b = {x1:0, x2:0, y1:0, y2:0};
 
        var lSystem = new LSystem(def);
        for (var i=0; i<n; i++)
            lSystem.rewrite();

        t = new Turtle(lSystem.getPattern(), def, line);
        t.onTurtleStep = this.onTurtleStep;
    }

    this.pauseDraw = function() {
        drawing = false;
        window.cancelAnimationFrame(h);
        this.onPauseDraw();
    }

    var draw = (function() {
        if (t.hasNextStep()) {
            t.next();
            h = window.requestAnimationFrame(draw);    
        } else {
            this.pauseDraw();
        }
    }).bind(this); //important - setting context

    this.startDraw = function() {
        if (drawing)
            return;

        if (t == null)
            return;

        this.onStartDraw();

        drawing = true;
        draw();
    }
    
}

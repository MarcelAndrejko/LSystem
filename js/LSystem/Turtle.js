function Turtle(pattern, def, drawLine) {

    var currentStep = 0;
    var totalSteps = pattern.length;

    var x = 0;
    var y = 0;
    var angle = 0;
    var stack = [];    
    var length = 1;
        
    this.onTurtleStep = function(currentStepA, totalStepsA) {};
                      
    function moveForward() {
        var rad = angle*(Math.PI/180.0);
        var x1 = x;
        var y1 = y;
        var x2 = x1+(length*Math.sin(rad));
        var y2 = y1-(length*Math.cos(rad));
        x = x2; //new x-position of turtle
        y = y2; //new y-position of turtle
        drawLine(x1, y1, x2, y2);
    }
    
    function rotateLeft(angleA) {
        angle -= angleA;
    }
    
    function rotateRight(angleA) {
        angle += angleA;
    }
    
    function pushState() {
        stack.push([x, y, angle])
    }
    
    function popState() {
        var state = stack.pop();
        x = state[0];
        y = state[1];
        angle = state[2];
    }
    
    this.hasNextStep = function () {
        return currentStep<totalSteps;
    }
    
    this.next = function () {
        if (!this.hasNextStep())
            return false;
            
        var c = pattern.charAt(currentStep);
        if (def.turtle[c]!=undefined) {
            if (def.turtle[c]=="f")
                moveForward();
            else if (def.turtle[c].charAt(0)=="<")
                rotateLeft(parseInt(def.turtle[c].substring(1)));
            else if (def.turtle[c].charAt(0)==">")
                rotateRight(parseInt(def.turtle[c].substring(1)));
            else if (def.turtle[c]=='push')
                pushState();
            else if (def.turtle[c]=='pop')
                popState();
        }

        currentStep++;
        this.onTurtleStep(currentStep, totalSteps);
    }

}
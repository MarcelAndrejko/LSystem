class LSystem {

    constructor() {}

    rnd(min, max) {
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    /*
    createPattern(def, n) {
        var s = def.axiom;
        for (i=0; i<n; i++) {
            var ss = '';
            for (const c of s) {
                if (def.rules[c]!=undefined) {
                    ss += def.rules[c];
                } else {
                    var a = def.rules[c].split(','); 
                    ss += a.length == 1 ? a[0] : a[this.rnd(0, a.length-1)];
                }
            }
            s = ss;
        }
        return s;
    }
    */
    
    //todo escape special chars /.*+?|()[]{}\
    rewrite(str, mapObj) {
        var re = new RegExp(Object.keys(mapObj).join("|"),"g");
        return str.replace(
            re, 
            function(matched){
                var a = mapObj[matched].split(','); 
                return a.length == 1 ? a[0] : a[getRnd(0, a.length-1)];
            }
        )
    }
    
    createPattern(def, n) {
        var s = def.axiom;
        for (i=0; i<n; i++)
            s = this.rewrite(s, def.rules);
        return s;
    }
    
    draw(def, n, drawLineCallback) {
        var pattern = this.createPattern(def, n);
        console.log('pattern --- ' + pattern);
        
        var x = 0;
        var y = 0;
        var angle = 0;
        var stack = [];    
        
        for (const c of pattern) {
            if (def.turtle[c]==undefined) {
                //nothing to do
            } else if (def.turtle[c]=="f") {
                var rad = angle*(Math.PI/180.0);
                var x1 = x;
                var y1 = y;
                var x2 = x1+Math.sin(rad);
                var y2 = y1-Math.cos(rad);
                x = x2; //new x-position of turtle
                y = y2; //new y-position of turtle
                drawLineCallback(x1, y1, x2, y2);                                                                            
            } else if (def.turtle[c].charAt(0)=="<") {
                angle = angle - parseInt(def.turtle[c].substring(1));
            } else if (def.turtle[c].charAt(0)==">") {
                angle = angle + parseInt(def.turtle[c].substring(1));
            } else if (def.turtle[c]=='push') {
                stack.push([x,y,angle])
            } else if (def.turtle[c]=='pop') {
                var state = stack.pop();
                x = state[0];
                y = state[1];
                angle = state[2];
            }
        }
    }
}
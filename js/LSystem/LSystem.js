function LSystem(def) {
    
    var pattern = def.axiom;
    //todo escape special chars /.*+?|()[]{}\
    var re = new RegExp(Object.keys(def.rules).join("|"),"g");  

    this.rewrite = function() {
        pattern = pattern.replace(
            re, 
            function(matched){
                var a = def.rules[matched].split(','); 
                var index = 0;
                if (a.length > 1)
                    index = Math.floor(Math.random()*a.length);                  
                return a[index];
            }
        )    
    }
    
    this.getPattern = function() {
        return pattern;
    }
    
}
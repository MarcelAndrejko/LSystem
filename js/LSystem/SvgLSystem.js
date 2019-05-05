(function($) {
    $.fn.SvgLSystem = function(options) {

        var settings = $.extend({
            'def': null,
            'n': 0
        }, options);

        var bx1 = 0;
        var bx2 = 0;
        var by1 = 0;
        var by2 = 0;

        var svg = $(this).first().get(0);

        if (svg!==undefined && svg!=null) {
            $(this).empty();
            var l = new LSystem();
            l.draw(
                settings.def, 
                settings.n, 
                function(x1, y1, x2, y2) {
                    bx1 = Math.min(bx1, x1, x2);
                    by1 = Math.min(by1, y1, y2);
                    bx2 = Math.max(bx2, x1, x2);
                    by2 = Math.max(by2, y1, y2);  
    
                    var viewBox = (bx1-1) + ',' + (by1-1) + ',' + (bx2-bx1+2) + ',' + (by2-by1+2);
                    svg.setAttributeNS(null, 'viewBox', viewBox);
    
                    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
                    line.setAttributeNS(null, 'vector-effect', 'non-scaling-stroke');
                    line.setAttributeNS(null, 'x1', x1);
                    line.setAttributeNS(null, 'y1', y1);
                    line.setAttributeNS(null, 'x2', x2);
                    line.setAttributeNS(null, 'y2', y2);
                    line.setAttributeNS(null, 'style', 'stroke:rgb(0,0,0);stroke-width:1;');
                    svg.appendChild(line);
                }
            );
        }

        return this;
    };

})(jQuery);

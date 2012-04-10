(function($){
    $.fn.rotate = function(options){
        var options = $.extend({
                                    deg: 0
                                  },options);
        if (($.browser.msie) && (parseInt($.browser.version) < 9)) {
            var nulledCSS = "zoom:1; position: relative; filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.0, M12=0.0, M21=0.0, M22=0.0, SizingMethod='auto expand', enabled=true);";
            var obj = $(this);
            obj =  obj[0];
            $(this).each(function(){
                $(this).attr('style', nulledCSS);
            });
            var rad = options.deg * Math.PI * 2 / 360;
            costheta = Math.cos(rad);
            sintheta = Math.sin(rad);
            obj.filters.item(0).M11 = costheta;
            obj.filters.item(0).M12 = -sintheta;
            obj.filters.item(0).M21 = sintheta;
            obj.filters.item(0).M22 = costheta;
        }
        return this;
    };
})(jQuery);   

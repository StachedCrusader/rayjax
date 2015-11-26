(function($){
    var ajaxObj = {};

    $.rayjax = function(ajaxOpts, name){
        if(name !== undefined){
            //can't do operations if it's undefined
            if(ajaxObj[name] === undefined){
                return initAjax();
            }
            else {
                if(ajaxObj[name] && ajaxObj[name]){
                    ajaxObj[name].abort();
                }
                return initAjax();
            }
            
            function initAjax(){
                ajaxObj[name] = $.ajax(ajaxOpts)
                .done(function(){
                    delete ajaxObj[name];
                });
                
                return ajaxObj[name];
            }   
        }
        //If the name wasn't provided, just act like normal ajax
        else{
            return $.ajax(ajaxOpts);
        }
        
    };

})(jQuery);
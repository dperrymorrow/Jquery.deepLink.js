jQuery.fn.deepLink = function(options) {
  var $elements = this;
  var hash = window.location.hash.substring(1);
  
  options = typeof options === 'undefined' ? {} : options;
  var attr = typeof options.attr === 'undefined' ? 'href' : options.attr;
  var seoPrefix = typeof options.seoPrefix === 'undefined' ? '!/' : options.seoPrefix;
  var capitalize = typeof options.capitalize === 'undefined' ? true : options.capitalize;
  
  if( hash != '' && hash != seoPrefix ){
    findDeepLink();
  }
    
  function findDeepLink(){
    $elements.each(function() {
      if( makeHash( $(this).attr( attr )) === hash ){
        $(this).click();
        return false;
      }
    });
  }
  
  function updateHashOnClick(){
    $elements.each(function() {
      $(this).bind('click', function(){
        window.location.hash = makeHash( $(this).attr( attr ));
        return false;
      });
    });
  }
  
  function makeHash(str){
    
    if( capitalize === true ){
      str = str.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
    }
      
    str = str.replace( / /g, " ").replace( /\s{2,}/, "")
            .replace( /s{\s+$}{}gm/, "").replace(' ', '-')
            .replace( /[^\w\/+-]+/g, '');
            
    if( str.indexOf( seoPrefix ) === -1 ){
      str = seoPrefix + str;
    }
    
    return str;
  }
  
  updateHashOnClick();
  return $elements;
}

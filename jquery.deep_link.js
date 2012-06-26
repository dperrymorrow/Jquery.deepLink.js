jQuery.fn.deepLink = function(attr) {
  var $elements = this;
  var attribute = typeof attr === 'undefined' ? 'href' : attr
  var hash = window.location.hash.substring(1);
  
  if( hash != '' ){
    findDeepLink();
  }
  
  function findDeepLink(){
    $elements.each(function() {
      if( makeHash( $(this).attr( attribute )) === hash ){
        $(this).click();
      }
    });
  }
  
  function updateHashOnClick(){
    $elements.each(function() {
      $(this).bind('click', function(){
        window.location.hash = makeHash( $(this).attr( attribute ));
      });
    });
  }
  
  function makeHash(str){
    str = str.replace(' ', '-');
    return encodeURIComponent( str );
  }
  
  updateHashOnClick();
  return $elements;
};
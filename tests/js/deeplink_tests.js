

test("calls click on an item if the hash is present at startup", function() {
  var wasCalled = false;
  
  $('.deep').first().click(function(){
    wasCalled = true;
  });
  
  window.location.hash = $('.deep').first().attr('href');
  $('.deep').deepLink({seoPrefix:'',capitalize:false});
  equals( wasCalled, true );
});


test("adds google crawler deep links if not specified", function() {
  $('.deep').first().attr('href', 'some link & something )(*&(^%&^%#&#$&))');
  window.location.hash = $('.deep').first().attr('href');
  $('.deep').deepLink({});
  $('.deep').first().click();
  equals( window.location.hash, '#!/Some-LinkSomething' );
});


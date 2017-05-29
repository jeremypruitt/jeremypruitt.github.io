$(document).ready(function() {
  $('.close1').click(function() {
    $('.card1').slideToggle();
  });
  $('.close2').click(function() {
    $('.card2').slideToggle();
  });
  $('.close3').click(function() {
    $('.card3').slideToggle();
  });
  $('.close4').click(function() {
    $('.card4').slideToggle();
  });
  
  $('.final1').click(function() {
    $('.middle1').slideToggle('slow');
    $('.reply1').toggle();
    $('.text1').text(function(i, v) {
      return v === 'More Info' ? 'Collapse' : 'More Info'
    });
  });

  $('.final2').click(function() {
    $('.middle2').slideToggle('slow');
    $('.reply2').toggle();
    $('.text2').text(function(i, v) {
      return v === 'More Info' ? 'Collapse' : 'More Info'
    });
  });

  $('.final3').click(function() {
    $('.middle3').slideToggle('slow');
    $('.reply3').toggle();
    $('.text3').text(function(i, v) {
      return v === 'More Info' ? 'Collapse' : 'More Info'
    });
  });
  
  $('.final4').click(function() {
    $('.middle4').slideToggle('slow');
    $('.reply4').toggle();
    $('.text4').text(function(i, v) {
      return v === 'More Info' ? 'Collapse' : 'More Info'
    });
  });
});

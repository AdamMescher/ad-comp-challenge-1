$('.profile-box').mouseover( function() {
  $('.profile-icon').attr('src', 'images/icons/profileIconBlack.svg');
});

$('.profile-box').mouseout()( function() {
  $('.profile-icon').attr('src', 'images/icons/profileIconWhite.svg');
})

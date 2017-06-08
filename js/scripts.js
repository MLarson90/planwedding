

$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBj3bVP0n4AaTYfM5J8VPZ5mlAWahCQL54",
    authDomain: "wedding-1fde5.firebaseapp.com",
    databaseURL: "https://wedding-1fde5.firebaseio.com",
    projectId: "wedding-1fde5",
    storageBucket: "wedding-1fde5.appspot.com",
    messagingSenderId: "713343180215"
  };

  firebase.initializeApp(config);
    var database = firebase.database();
    //Fade in home page
  $("#first").fadeIn(1000);
  $("#nameSpace").fadeIn(3000);
  $("#last").fadeIn(3500);
  $(".leftSide").fadeIn(2500);
  $('#plus').fadeIn(4000);
  $('#kids').fadeIn(4500);
  $('#addRSVP').fadeIn(5000);
   //fade in second window on the big day
  $(window).scroll( function(){
        $('.rightSide').each(function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() +100;
          if( bottom_of_window < bottom_of_object ){
              $(this).animate({'opacity':'1'},2000);
          }
        });
        $('.bottomSide').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window < bottom_of_object ){
              $(this).animate({'opacity':'1'},2000);
            }
        });
        });
 //save to firebase
 $('#RSVP').submit(function(event){
   event.preventDefault();
   var firstname = $('#first').val();
   var lastname = $('#last').val();
   console.log(firstname);
   console.log(lastname);
   var usersRef = database.ref("guests");
   usersRef.push().set({
     first: firstname,
     last: lastname,
  });
});
//RSVP form functions
$('#plus').click(function(event){
  event.preventDefault();
  $('#plusOne').fadeIn(1000);
  $('#plus').fadeOut(1000);
});
$('#kids').click(function(event){
  event.preventDefault();
  $('#numberOfKids').fadeIn(1000);
  $('#kids').fadeOut(1000);
});
});

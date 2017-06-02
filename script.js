jQuery(function() {

    //land page to race game
    $('button').click(function(){
        window.location.href='index.html';
    });

  function game() {
      //function responds according to a keyboard pressed event
      $(document).keydown(function(event) {
          //if pressed right arrow
          if (event.which === 39){
            //this function is called to move the player 1
            move($('#player1'));
            //this function is called to check if player1 reached the maximum width
            checkForWinner($('#player1'), 1100, "player1");
          }
          //if pressed z
          if (event.key == 'z'){
            //this function is called to move the player 2
            move($('#player2'));
            //this function is called to check if player2 reached the maximum width
            checkForWinner($('#player2'), 1100, "player1");
          }
      });
      /*this function is called to move the carrot at the beggining of the game
        *it sets a time of 200s to run the function
        *then the carrot is moved
        */
      setTimeout(moveCarrot, 200);
  }

  game();

  //function to move the carrot
  function moveCarrot() {

    //create a variable to call the element by Id "carrot"
    var carrot = $("#carrot");

    /*assign an animation that moves the carrot to the left by 1000px
      *and sets a time of 2000 to start moving it*/
    carrot.animate({"left": "1000px"}, 2000);
  }

  //function to move any element to the left by incrementing 10px to the offset position
  function move(element)  {
    left = element.offset().left;
    element.css('left', left + 10);
  }

  /*function that checks when the element reaches a particular width
    *and if it does, it pops up a window with a message for the winner*/
  function  checkForWinner(element, width, player) {
      left = element.offset().left;
      if (left >= width){
        alert(player + " WIN!!!");
      }
  }

});

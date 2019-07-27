$(document).ready(function() {
  var totalHeads = 0;
  var totalTails = 0;

  //make the button clickable
  $(".flipIt").on("click", function() {
    var randomNumber = Math.round(Math.random());
    if (randomNumber === 1) {
      $(".coinImage").html(
        `<img src="https://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg" alt="heads">`
      );
    } else {
      $(".coinImage").html(
        "<img src='https://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg' alt='tails'>"
      );
    }
    totals(randomNumber);
  });

  //insert results of how many of each flip
  function totals(randomNumber) {
    console.log(randomNumber);
    if (randomNumber === 1) {
      totalHeads++;
      $(".headsTotal").text(totalHeads);
    } else {
      totalTails++;
      $(".tailsTotal").text(totalTails);
    }
  }
});

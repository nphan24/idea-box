var $titleInput = $('#input-title');
var $bodyInput = $('#input-body');
var $saveBtn = $('#save-btn');
var $appendHere = $('.append-here');
var $deleteBtn = $('#delete-btn');


$saveBtn.on('click', function(event){
  event.preventDefault();
  $appendHere.append(`<article class="cards">
    <button class="top-card card-button" id="delete-btn"></button>
    <h3 class="top-card">${$titleInput.val()}<span class="card-counter">1</span>
    </h3>
    <p>${$bodyInput.val()}</p>
    <button class="card-button bottom-line" id="upvote-btn"></button>
    <button class="card-button bottom-line"
    id="downvote-btn"></button>
    <h6 class="bottom-line">quality:<span class="quality-change"> swill</span></h6>
    <hr>
    </article>`);
  $('#input-title').empty();
  $('#input-body').empty();
});

$appendHere.on('click', '#delete-btn', function(event) {
    $(this).parent().remove();
 // remove();
});
// });
// $deleteBtn.on('click', deleteCard);

// function deleteCard() {
//   console.log('hello');
//   $(this).parent().remove();
// }
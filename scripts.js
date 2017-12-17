var $titleInput = $('#input-title');
var $bodyInput = $('#input-body');
var $saveBtn = $('#save-btn');
var $appendHere = $('.append-here');
var $deleteBtn = $('#delete-btn');


function NewCard (title, body, id){
  this.title = title;
  this.body = body;
  this.id = id;
  this.quality = 'swill';
}

NewCard.prototype.prependCard = function() {
   $appendHere.prepend(`<article class="cards">
    <button class="top-card card-button" id="delete-btn"></button>
    <h3 class="top-card">${this.title}</h3>
    <p>${this.body}</p>
    <button class="card-button bottom-line" id="upvote-btn"></button>
    <button class="card-button bottom-line"
    id="downvote-btn"></button>
    <h6 class="bottom-line">quality:<span class="quality-change">${this.quality}</span></h6>
    <hr>
    </article>`);
};

$saveBtn.on('click', function(event){
  event.preventDefault();
  var id = Date.now();
  var card = new NewCard ($titleInput.val(), $bodyInput.val(), id);
  card.prependCard();
  $titleInput.val("");
  $bodyInput.val("");
});

$appendHere.on('click', '#delete-btn', function(event) {
    $(this).parent().remove();
});

// $appendHere.on('click', 'h3', function(event){
//   console.log(('h3').text);
//   var $cardTitle = $('.top-card');
//   editContent.setAttribute('contenteditable', true);
// })
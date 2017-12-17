var $titleInput = $('#input-title');
var $bodyInput = $('#input-body');
var $saveBtn = $('#save-btn');
var $parentElement = $('.parent-element');


$saveBtn.on('click', function(event){
	event.preventDefault();
	$parentElement.append(
		`<button class="top-card card-button" id="delete-btn"></button>
        <h3 class="top-card">${$titleInput.val()}<span class="card-counter">1</span>
        </h3>
        <p>${$bodyInput.val()}</p>
        <button class="card-button bottom-line" id="upvote-btn"></button>
        <button class="card-button bottom-line"
        id="downvote-btn"></button>
        <h6 class="bottom-line">quality:<span class="quality-change"> swill</span></h6>
        <hr>`);
});
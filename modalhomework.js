var modal = document.getElementsByClassName('mod1')[0];
var close = document.getElementById('cl');
//These variables take the element from the html page
function appear(){
	modal.style.display = 'block';
}
//This function sets the modal to block so you can see it
setTimeout(appear, 3000);
//This function tells the modal when to pop up

close.addEventListener('click', function(){
	modal.style.display = 'none';
});
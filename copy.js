var copyTextareaBtn = document.querySelector('#copy');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('#html');
  copyTextarea.focus();
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    alert(`Code successfully copied!`);
  } catch (err) {
    alert('Oops! Unable to copy!');
  }
});
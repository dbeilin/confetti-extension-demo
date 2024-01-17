document.addEventListener('DOMContentLoaded', function() {
  var confettiButton = document.getElementById('confettiButton');
  if (!confettiButton) {
    console.error('Confetti button not found!');
    return;
  }
  confettiButton.addEventListener('click', function() {
    console.log('Confetti button clicked!');
    chrome.runtime.sendMessage({message: 'confetti'});
  }, false);
}, false);

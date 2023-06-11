document.addEventListener('DOMContentLoaded', function () {
  var popup = document.getElementById('popup-container');
  var closeButton = document.getElementById('close-button');

  closeButton.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  popup.style.display = 'block';
});

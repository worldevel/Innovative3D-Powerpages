window.onload = function() {
  loadMedia('/damoHouse.jpg');
};


function loadMedia(url) {
  var mediaContainer = document.querySelector('.ICMedia');
  mediaContainer.innerHTML = '';
  
  if (url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.gif')) {
    var mediaImage = document.createElement('img');
    mediaImage.src = url;
    mediaImage.style.maxHeight = '100%';
    mediaContainer.appendChild(mediaImage);
  } else {
    var mediaFrame = document.createElement('iframe');
    mediaFrame.src = url;
    mediaFrame.style.width = '100%';
    mediaFrame.style.height = '100%';
    mediaFrame.style.objectFit = 'none';
    mediaContainer.appendChild(mediaFrame);
  }
}
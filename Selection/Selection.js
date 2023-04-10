const images = document.querySelectorAll('.photo-row img');
const popup = document.getElementById('popup');
const popupImg = document.createElement('img');
popupImg.classList.add('popup-img');

images.forEach(function(image) {
  image.addEventListener('click', function() {
    const title = this.getAttribute('data-title');
    const description = this.getAttribute('data-description');
    const src = this.getAttribute('src');
    
    document.getElementById('title').textContent = title;
    document.getElementById('description').textContent = description;
    
    popupImg.setAttribute('src', src);
    document.getElementById('popupContent').appendChild(popupImg);
    
    popup.classList.remove('hidden');
  });
});

document.getElementById('closeButton').addEventListener('click', function() {
  popup.classList.add('hidden');
  popupImg.remove();
});
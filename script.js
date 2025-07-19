
function openPopup(imageSrc, text){
   document.getElementById('popup-img').src = imageSrc;
   document.getElementById('popup-text').innerText = text;
   document.getElementById('popup').style.display = 'flex';
   document.getElementById('gallery').style.display = 'none';
   document.getElementById('backBotton').style.display = 'none';
}

function closePopup(){
   document.getElementById('popup').style.display = 'none';
   document.getElementById('gallery').style.display = 'grid';
   document.getElementById('backBotton').style.display = 'grid';
}
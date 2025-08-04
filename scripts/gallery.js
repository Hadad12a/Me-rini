let textPopupShow = false;

function openPopup(imageItem, text){
   document.getElementById('imagesContiner').style.display = 'none';
   document.getElementById('popup-text').innerText = text;
   document.getElementById('popup-img').src = imageItem;
   document.getElementById('popup').style.display = 'grid';
   document.getElementById('menu').style.display = 'none';
   if(textPopupShow === true){
      clickImagePopup();
   }
}

function clickImagePopup(){
   if(textPopupShow === false){
      document.getElementById('popup-text').style.display = 'flex';
      textPopupShow = true;
   }
   else{
      document.getElementById('popup-text').style.display = 'none';
      textPopupShow = false;
   }
}

function closePopup(){
   document.getElementById('imagesContiner').style.display = 'grid';
   document.getElementById('popup').style.display = 'none';
   document.getElementById('menu').style.display = '';
}
let textPopupShow = false;

function openPopup(numimage, text){
   document.getElementById('imagesContiner').style.display = 'none';
   document.getElementById('popup-text').innerText = text;
   document.getElementById('popup-img').src = 'imgs/' + numimage + '.JPG';
   document.getElementById('popup').style.display = 'grid';
   document.getElementById('menu').style.display = 'none';
   
   if(textPopupShow === true){
      clickImagePopup();
   }
}

function clickImagePopup(){
   if(textPopupShow === false){
      document.getElementById('popup-text').style.display = 'flex';
      document.getElementById('popup-img').classList.add('selected');
      textPopupShow = true;
   }
   else{
      document.getElementById('popup-text').style.display = 'none';
      document.getElementById('popup-img').classList.remove('selected');
      textPopupShow = false;
   }
}

function closePopup(){
   document.getElementById('imagesContiner').style.display = 'grid';
   document.getElementById('popup').style.display = 'none';
   document.getElementById('menu').style.display = '';
}
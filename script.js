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

function openMassage(massageNum){
   document.getElementById('massageCon').style.display = 'none';
   document.getElementById('backMassagecon').style.display = 'none';

   const massage = "massage" + massageNum;
   document.getElementById(massage).style.display = 'flex';

   document.getElementById('massages').style.display = 'flex';
}
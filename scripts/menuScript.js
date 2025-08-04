let isOpen = false;

function openPhoneMenu(){
   if(isOpen === false){
      document.getElementById('phoneMenu').style.display = 'flex';
      isOpen = true;
   }
   else{
      document.getElementById('phoneMenu').style.display = 'none';
      isOpen = false;
   }
}
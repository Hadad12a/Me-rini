sessionStorage.setItem("isPassword", true);

function openAndClosePasswordSystem(){
   if(sessionStorage.getItem('isPassword') = true){
      document.getElementById('menu').style.display = 'none';
      document.getElementById('homeBody').style.display = 'none';
      document.getElementById('passwordSystem').style.display = 'flex';
   }
   
   if(sessionStorage.getItem('isPassword') === false){//logged in....
      document.getElementById('passwordSystem').style.display = '';
      document.getElementById('menu').style.display = '';
      document.getElementById('homeBody').style.display = '';
   }
}

function login(){
   let password = 'riniduli';

   if(document.getElementById('passIN').value === password){
      sessionStorage.setItem("isPassword", false);
      openAndClosePasswordSystem(); 
      alert('ברוך הבא');
   }
   else{
      alert('הסיסמה שגויה');
   }
}
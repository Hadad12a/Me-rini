sessionStorage.setItem("isPassword", true);
let needPass = sessionStorage.getItem("isPassword");

console.log(needPass);

function openAndClosePasswordSystem(){
   if(needPass = true){
      document.getElementById('menu').style.display = 'none';
      document.getElementById('homeBody').style.display = 'none';
      document.getElementById('passwordSystem').style.display = 'flex';
   }
   
   if(!needPass){//logged in....
      document.getElementById('passwordSystem').style.display = '';
      document.getElementById('menu').style.display = '';
      document.getElementById('homeBody').style.display = '';
   }
}

function login(){
   let password = 'riniduli';
   if(document.getElementById('passIN').innerText = password){
      console.log('work');
      sessionStorage.setItem("isPassword", false);
      openAndClosePasswordSystem();
   }else{
      console.log('not the same!');
   }
}
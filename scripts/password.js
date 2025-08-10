let needToLogin = sessionStorage.getItem("isPassword");
console.log(needToLogin);

if(needToLogin = true){
   window.location.href = "index.html";
}
else{
   return;
}
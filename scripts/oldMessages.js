function openMessagePopup(messageNum, messageText){
   document.getElementById('messageCon').style.display = 'none';
   document.getElementById('messagesPopup').style.display = 'flex';

   document.getElementById('titlePopup').innerText = 'הודעה מס ' + messageNum;
   document.getElementById('textMssagePopup').innerText = messageText;
}

function closeMassagePopup(){
   document.getElementById('messageCon').style.display = '';
   document.getElementById('messagesPopup').style.display = '';
}
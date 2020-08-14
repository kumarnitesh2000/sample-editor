//web socket client side
 
const ws = new WebSocket("ws://localhost:8082");
//on connected to the server client side will execute this function
ws.addEventListener("open" ,(e) =>{
    console.log("connected");
    //sending the msg on the client side
   
});




//message event when server sent the msg
ws.addEventListener("message",({ data }) =>{
//console.log(data);
var dat = JSON.parse(data);

if(dat.event=="message"){
var msg = JSON.parse(data).payload.msg;
console.log("msg is ",msg);

  var msg_list = document.getElementsByClassName('message-list')[0];
  var new_a  = document.createElement('a');
  new_a.setAttribute('class','item');
  msg_list.appendChild(new_a);
  new_a.innerHTML = msg;
  
}
else if(dat.event=="text"){
    
    var id = dat.payload.id;
    var content = dat.payload.content;
    document.getElementById(id).value = content;
    
}


});

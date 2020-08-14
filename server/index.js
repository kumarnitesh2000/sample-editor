//web Socket Server side 
const WebSocket = require('ws');
const yup = require('yup');

//wss actual server
const wss = new WebSocket.Server({port: 8082});
/*Collection of "yup" schemas for each event type */ 
const yupEventSchemas ={
    "message": yup.object().shape({    
    msg: yup.string().required().max(20),

    
    })

};


function parseMessage(message){
    const object = JSON.parse(message);
    if(!("event" in object)){
        throw new "Event Property not Provided ."
    }
    if(!("payload" in object)){
        throw new "Event Property not Provided ."
    }

    object.payload = yupEventSchemas[object.event].validateSync(object.payload);


    return object;
}

//ws refers to single connection

let CLIENTS=[];

wss.on("connection" , (ws,client) => {
CLIENTS.push(ws);



ws.on("message",message =>{
    //console.log(`Recieved Mess: ${message} from ${client}`);
    //if(JSON.parse(message).event=='text'){
    //console.log(data);
    //sendAll_text(JSON.stringify(data));
    //}
    let data = JSON.parse(message) ;
    /*
    try{
    data=parseMessage(message);}
    catch(err){
    console.log(err.message);
    return ;
    }
    */
//switch case are also there for case on event basis
switch(data.event){

    case "message":
        //console.log("message event from client ");
        console.log(data);

        sendAll(JSON.stringify(data));
        break;    
    default:
        console.log(JSON.parse(message));    
        sendAll_text(JSON.stringify(data));
}



});

});

function sendAll (message) {
    for (var i=0; i<CLIENTS.length; i++) {

        CLIENTS[i].send(message);
        
    }
}



function sendAll_text(dat){


for (var i=0; i<CLIENTS.length; i++) {
    CLIENTS[i].send(dat);
        }


}




//console.log("Client Connected");

//message from client to server side
/*
ws.on("message",data =>{
try{
    console.log(`client has sent us ${data}`);
//ws.send(data.toUpperCase());
const dat = JSON.parse(data);
const msg = dat.msg.toUpperCase();
const str = JSON.stringify({"new_msg":msg});

ws.send(str);
}catch(e){
    console.log('Not Expected!');
}
});

//on closing server side notify
ws.on("close" ,() =>{
console.log("Client Disconnected");
});
});
*/
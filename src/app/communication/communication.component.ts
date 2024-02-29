import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../Services/communication-service.service';
import { Communication } from '../Model/Communication';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})




export class CommunicationComponent implements OnInit {
   user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    weight: number;
    height: number;
    password: string;
  } = {
    id: 1,
    firstName: "firas",
    lastName: "hanini",
    email: "",
    weight: 0,
    height: 0,
    password: ""
  };
  
   userList: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    weight: number;
    height: number;
    password: string;
  }[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      weight: 70,
      height: 180,
      password: "securePassword123"
    },
    {
      id: 2,
      firstName: "Alice",
      lastName: "Smith",
      email: "alice.smith@example.com",
      weight: 65,
      height: 165,
      password: "strongPassword456"
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob.johnson@example.com",
      weight: 80,
      height: 175,
      password: "safePassword789"
    },
  ];

  communicationList: Communication[] = [
    {
      id: 1,
      message: "Bonjour, comment ça va ?",
      sentDate: new Date("2024-02-27T08:00:00"),
      seen: false,
      sender: this.user
    },
    {
      id: 2,
      message: "Tout va bien, merci !",
      sentDate: new Date("2024-02-27T08:05:00"),
      seen: true,
      sender: this.userList[3]
    },
    {
      id: 3,
      message: "Avez-vous terminé le rapport ?",
      sentDate: new Date("2024-02-27T08:10:00"),
      seen: false,
      sender: this.userList[2]
    },
    
  ];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(private service:CommunicationServiceService, ){}
//bd old messages
  messages:Communication[]=this.communicationList;
  //Community name waiting for session
  CommunityName:string="one";
  //Community members
  members=this.userList;  // User[]=[]

  // Sending message
  communication:Communication=new Communication();
  message:string="";

//Message revieved 
  communicationRecieved:Communication=new Communication();
  current="test"; //this.user; //User
  communityId:number=1;
  
 

ngOnInit(){
  this.service.communityId=1;
  this.connect();
  
}



/*  getAllcomunication(){
    this.service.findysenderAndReciever.Subscribe(mes=>this.Messages=mes)
  }*/



  handleMessage(communication:Communication) {
    communication.sender=this.userList[2];
    this.messages.push(communication);
  }

  connect(){
    this._connect();
  }

  disconnect(){
    this._disconnect();
  }

  
  sendMessage(/*communication:Communication*/){
    this.communication.sender=this.current;
    var com:Communication=new Communication();
    com.sender=this.current;

    com.message=this.message;
    console.log("houna"+this.message);
    this.messages.push(com);

    console.log(this.messages);
    this._send(this.communication);
    
    this.message="";
    console.log(2);
  }































































































//////////////////////////////////////////////////////////////////////////////////

webSocketEndPoint: string = 'http://localhost:8081/ws';
  topic:string="/topic/";
  sendMsg:string="/app/chat.sendMessage/"

  stompClient:any=null;

  _connect() {
    console.log("Initialize WebSocket Connection");
    console.log("soket houna"+this.communityId);
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, this.onConnected.bind(_this), this.errorCallBack);
};

onConnected=()=> {
  console.log(this.communityId);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Subscribe to the community Topic                     //this.handleMessage directement
  this.stompClient.subscribe(this.topic+this.communityId, this.onMessageReceived);
  

  
}

_disconnect() {
  if (this.stompClient !== null) {
      this.stompClient.disconnect();
  }
  console.log("Disconnected");
}


errorCallBack(error:Communication) {
  console.log("errorCallBack -> " + error.message)
  setTimeout(() => {
      this._connect();
  }, 5000);
}


_send(message:Communication) {
  console.log("calling logout api via web socket");

  this.stompClient.send(this.sendMsg+this.communityId, {}, JSON.stringify(message));

}


onMessageReceived(message:Communication) {
  console.log("Message Recieved from Server :: " + message.message +" "+message.sentDate);
  this.handleMessage(message);
} 













}

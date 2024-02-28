import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../Services/communication-service.service';
import { Communication } from '../Model/Communication';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})




export class CommunicationComponent implements OnInit {
setMessage() {
throw new Error('Method not implemented.');
}
  
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
    // Ajoutez autant d'objets utilisateur que nécessaire
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
    // Ajoutez autant d'objets de communication que nécessaire
  ];


  constructor(private service:CommunicationServiceService, ){}

  messages:Communication[]=this.communicationList;
  CommunityName:string="one";
  members=this.userList;  // User[]=[]
  communication:Communication=new Communication();
  message:string="dazdaz";
  communicationSent!:Communication;
  current=this.user; //User
  
  colors = [
    '#2196F3', '#32c787', '#00BCD4', '#ff5652',
    '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
];

ngOnInit(){
  this.service.communityId=1;
  this.connect();
  
}



/*  getAllcomunication(){
    this.service.findysenderAndReciever.Subscribe(mes=>this.Messages=mes)
  }*/



  handleMessage(communication:Communication) {
    this.communication=this.service.comm;
  }

  connect(){
    this.service._connect();
  }

  disconnect(){
    this.service._disconnect();
  }

  sendMessage(/*communication:Communication*/){
    this.communication.sender="test";
    
    this.communication.message=this.message;
    console.log("houna"+this.message);
    this.service._send(this.communication);
    console.log(2);
  }

}

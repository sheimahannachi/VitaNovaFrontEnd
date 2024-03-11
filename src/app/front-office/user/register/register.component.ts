import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string ="";
  firstName: string ="";
  lastName: string ="";
  dateOfBirth!: Date;
  email: string ="";
  password: string ="";
  role: string="";
  picture: string ="";
  gender:string="";
  weight:number=0;
  
  height:number=0;
  selectedFile: File | null = null;
  showVerificationCodeInput: boolean = false;
  verificationCode!: string;
  generatedCode!: string;
  show_verification:boolean=false;
verified:boolean=false;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {

  }

  save()
  {
  
    let bodyData = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password,
      "role": this.role,
      "picture":this.picture,
      "gender":this.gender,
      "height":this.height,
      "weight":this.weight,
      "dateOfBirth":this.dateOfBirth,
      "firstName":this.firstName,
      "lastName":this.lastName,
      "verified":this.verified
    };
    
    if(this.verified==true){
    this.http.post("http://localhost:8081/api/signup",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {

        console.log(bodyData);
        alert(" Registered Successfully");

    });
  }}

 verifyEmail() {
    if (this.verificationCode === this.generatedCode) {
      // If the codes match, set verified to true
      this.verified = true;
      console.log('Email verified successfully');
    } else {
      console.log('Verification code does not match');
    }
    console.log(this.verificationCode);
    console.log(this.generateVerificationCode);

  }




  sendVerificationCode() {
    this.generatedCode=this.generateVerificationCode();
this.showVerificationCodeInput=true;
    // Make HTTP POST request to your backend endpoint
    const apiUrl = 'http://localhost:8081/api/sendEmail';
    const payload = { to: this.email, subject:"verification",text: this.generatedCode };

    this.http.post(apiUrl, payload).subscribe(
      (response) => {
        console.log('Verification code sent successfully');
        // Handle success (e.g., show a success message to the user)
      },
      (error) => {
        console.error('Error sending verification code:', error);
        // Handle error (e.g., show an error message to the user)
      }
    );
  }













  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
  }


getSelectedFileUrl(): SafeUrl | null {
    if (this.selectedFile) {
      const url = window.URL.createObjectURL(this.selectedFile);
      return this.sanitizer.bypassSecurityTrustUrl(url);
    } else {
      return null;
    }
  }


  generateVerificationCode(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let verificationCode = '';
    for (let i = 0; i < 6; i++) {
      verificationCode += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return verificationCode;
  }
  


  
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {  ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

@Injectable()
export class CalculatorComponent {
  
  @ViewChild('result') result: ElementRef;

  constructor(private http: HttpClient) { }


  dis(val) 
         { 
            this.result.nativeElement.value+=val ;
         } 

  clr() 
      { 
        this.result.nativeElement.value = "" ;
      }        
           
         

  

    cals() :void{

      let val = this.result.nativeElement.value;
      
      if(val.includes("+"))
      {

        console.log("Plus operator");
        var n =val.indexOf("+");
      var a= val.substr(0,n);
      var b= val.substr(n+1,val.length+1);
      var x1=parseFloat(a);
      var x2=parseFloat(b);
      console.log("hello"+x1+"\t"+x2);
      alert(val);

      if(x1&&x2){
        let sumrequest=this.http.get("http://localhost:5000/maths/sum?a="+x1+"&b="+x2) ;
        sumrequest.subscribe((data:any) =>  {
          debugger  
         console.log("answer is "+data);
         this.result.nativeElement.value=data;

        });
    
      }
      }

      else if(val.includes("-"))
      {

        console.log("minus operator");
        var n =val.indexOf("-");
      var a= val.substr(0,n);
      var b= val.substr(n+1,val.length+1);
      var x1=parseFloat(a);
      var x2=parseFloat(b);


      alert(val);
      console.log("hello"+x1+"\t"+x2);
      
      if(x1&&x2){
        let sumrequest=this.http.get("http://localhost:5000/maths/Sub?a="+x1+"&b="+x2) ;
        sumrequest.subscribe((data:any) =>  {
          debugger  
         console.log("answer is "+data);
         this.result.nativeElement.value=data;

        });
    
      }
      }


      else if(val.includes("*"))
      {

        console.log("multiplication operator");
        var n =val.indexOf("*");
      var a= val.substr(0,n);
      var b= val.substr(n+1,val.length+1);
      var x1=parseFloat(a);
      var x2=parseFloat(b);


      alert(val);
      console.log("hello"+x1+"\t"+x2+"\t"+a+"\t"+b);

      if(x1&&x2){
        let sumrequest=this.http.get("http://localhost:5000/maths/mul?a="+x1+"&b="+x2) ;
        sumrequest.subscribe((data:any) =>  {
          debugger  
         console.log("answer is "+data);
         this.result.nativeElement.value=data;

        });
    
      }
      }

     else if(val.includes("/"))
      {

        console.log("division operator");
        var n =val.indexOf("/");
      var a= val.substr(0,n);
      var b= val.substr(n+1,val.length+1);
      var x1=parseFloat(a);
      var x2=parseFloat(b);


      alert(val);
      console.log("hello"+x1+"\t"+x2);

      if(x1&&x2){
        let sumrequest=this.http.get("http://localhost:5000/maths/div?a="+x1+"&b="+x2) ;
        sumrequest.subscribe((data:any) =>  {
          debugger  
         console.log("answer is "+data);
         this.result.nativeElement.value=data;

        });
    
      }
      }

      
    }
}









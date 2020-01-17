import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  title = "Create 1st dropdown"

  month = ['Jan','Feb', 'Mar', 'Apr', 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov', 'Dec'];

  isAvailable = "false";

  myFunction($event){
    // alert('Button working');
    console.log('Function working');
    this.isAvailable = !this.isAvailable;
  }
  
  changeMonth(event){
    console.log('Month is change');
    alert('Month is changed from the dropdown');
    console.log(event);
  }

/** single event binging start **/
  valueName : string = "shalinee";

  handleClick(){
    this.valueName = "Shreya"
  }
  handleBlur(event : any){
    this.valueName = event.target.value;
    console.log("event");
  }
  handleInput(event : any) {
    this.valueName = event.target.value;
  }
/** single event binging end **/

/** two way event binging start **/
  newName : string = "shalinee";

  handleChange(value : string){
       this.newName = value;
  }
/** two way event binging end **/


// 

 getUserName( value : string){
 console.log(value);
  }
}

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  // title : String;
  // constructor(){
  //   this.title = 'chicken';
  // }

  lValue = [];

  title = "MSW";

  todoClick(e) {
    this.lValue.push(e.value);
    console.log(this.lValue);
  }
  deletedd(e) {
    this.lValue.splice(this.lValue.indexOf(e), 1);
  }
  ascend(){
    this.lValue.sort()
  }
  dscend(e){
    this.lValue.sort()
    this.lValue.reverse()
  }
}

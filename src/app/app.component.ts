import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  receiverName: string = "";
  dateVal: string = '';
  amount: number = 0; 

  onNameInput(val: string){
    this.receiverName = val
  }

  onDateInput(val: string){
    this.dateVal = val
  }

  onAmountInput(val: number){
    this.amount = val
  }
}

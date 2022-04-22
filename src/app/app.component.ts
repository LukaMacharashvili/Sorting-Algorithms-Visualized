import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Sorting Algorithms Visualized';
  tmpArray:any[] = [
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
        {color: 'rgb(72,0,255)', number: Math.round(Math.random() * 100)},
  ]

  arrayToSort:any[] = this.tmpArray;

  disableBtns:boolean = false;

  sleep(time:any) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  async bubbleSort(){
    this.disableBtns = true;
    for(var i = 0; i < this.arrayToSort.length; i++){
      for(var j = 0; j < ( this.arrayToSort.length - i -1 ); j++){
        if(this.arrayToSort[j].number > this.arrayToSort[j+1].number){
          this.arrayToSort[j].color = 'red'
          this.arrayToSort[j + 1].color = 'yellow'
          await this.sleep(10)
            var temp = this.arrayToSort[j]
            this.arrayToSort[j] = this.arrayToSort[j + 1]
            this.arrayToSort[j+1] = temp
            this.arrayToSort[j].color = 'rgb(72,0,255)'
            this.arrayToSort[j + 1].color = 'rgb(72,0,255)'
        }
      }
    }
}

  async insertionSort(){
    this.disableBtns = true;
    for (let i = 0; i < this.arrayToSort.length; i++) {
      for (let j = i; j > 0; j--) {
          if (this.arrayToSort[j].number < this.arrayToSort[j - 1].number) {
              this.arrayToSort[j].color = 'red';
              await this.sleep(10);
              [this.arrayToSort[j], this.arrayToSort[j - 1]] = [this.arrayToSort[j - 1], this.arrayToSort[j]]
              this.arrayToSort[j].color = 'rgb(72,0,255)';
              this.arrayToSort[j - 1].color = 'rgb(72,0,255)';
            } else {
              break
          }
        }
      }
    }

  async selectionSort() {
    this.disableBtns = true;
    for (let i = 0; i < this.arrayToSort.length; i++) {
      this.arrayToSort[i].color = 'red'
      await this.sleep(10);
      let currentIndex = i;
      for (let j = i; j < this.arrayToSort.length; j++) {
          if (this.arrayToSort[currentIndex].number > this.arrayToSort[j].number) {
            this.arrayToSort[j].color = 'yellow'
            await this.sleep(10);  
            currentIndex = j
          }
      }
      this.arrayToSort[i].color = 'rgb(72,0,255)';
      [this.arrayToSort[i], this.arrayToSort[currentIndex]] = [this.arrayToSort[currentIndex], this.arrayToSort[i]]
      this.arrayToSort[i].color = 'rgb(72,0,255)' 
      this.arrayToSort[currentIndex].color = 'rgb(72,0,255)'
    }
  }

}
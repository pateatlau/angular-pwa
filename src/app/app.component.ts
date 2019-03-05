import { Component } from '@angular/core';
import { ApiService, Item } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String = 'Angular Progressive Web App';

  items:  Array<Item>;

  constructor(private  apiService:  ApiService) {
    console.log('Ápp Component constructor');
  }
  
  ngOnInit() {
    console.log('onInit: Call fetchData()');
    this.fetchData();
  }

  fetchData() {
    this.apiService.fetch().subscribe((data:  Array<Item>) => {
      console.log(data);
      this.items = data;
    }, err => {
      console.log(err);
    });
  }
}

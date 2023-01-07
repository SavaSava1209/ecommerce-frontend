import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  searchProducts(value: string) {
    this.route.navigateByUrl(`/search/${value}`)
    
  }

}

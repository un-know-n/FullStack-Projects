import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { IProduct } from './@types/IProduct';
import { ProductsService } from './services/products.service';

//import productsJson from './data/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  //products: IProduct[] = [];
  loader = false;
  products$: Observable<IProduct[]>;

  ngOnInit(): void {
    this.loader = true;
    this.products$ = this.productsService.getAll().pipe(
      tap(() => {
        this.loader = false;
      })
    );

    // this.productsService.getAll().subscribe((products) => {
    //   this.products = products;
    // });
  }
}

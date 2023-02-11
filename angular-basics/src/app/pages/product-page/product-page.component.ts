import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  //products: IProduct[] = [];
  loader = false;
  //products$: Observable<IProduct[]>;
  searchTerm = '';

  ngOnInit(): void {
    this.loader = true;
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => {
    //     this.loader = false;
    //   })
    // );

    this.productsService.getAll().subscribe(() => {
      this.loader = false;
    });
  }
}

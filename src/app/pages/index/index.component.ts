import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { finalize, mergeMap } from 'rxjs/Operators';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // loader les datas
    this.productService.get().subscribe((data) => (this.products = data));
  }

  delete(id: number) {
    /*
    sans le pipe, la suppression a lieu mais pas de refresh visuel
    ==> rappeler le get pour maj products
    ==> à l'aide d'un pipe qui contiendra des operations intermédiaire : 
        - mergemap
        - finalize
        etc

    ==> https://rxjs.dev/api
    */

    this.productService
      .delete(id)
      .pipe(
        mergeMap(() => this.productService.get()),
        finalize(() => console.log('coucou'))
      )
      .subscribe((data) => (this.products = data));
  }
}

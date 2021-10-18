import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductForm } from 'src/app/forms/product.form';
import { ProductService } from 'src/app/services/product.service';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  formGroup!: FormGroup;

  id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private serviceProduct: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * On utilise le meme formulaire pour l'ajout et l'update
   * pour distinguer les deux, ca se fera sur base de la presence de l'id dans l'url active
   * ==> ActivedRoute
   */

  ngOnInit(): void {
    // recuperer l'id
    this.id = this.route.snapshot.params.id;
    this.formGroup = this.formBuilder.group(ProductForm);

    // rechercher un produit et patcher les valeurs de celui-ci dans notre formulaire
    // ==> patchValue
    if (this.id) {
      this.serviceProduct
        .getById(this.id)
        .subscribe((data) => this.formGroup.patchValue(data));
    }
  }

  submit() {
    if (this.formGroup.valid) {
      // update + redirection (router)
      if (this.id) {
        this.serviceProduct
          .update(this.id, this.formGroup.value)
          .subscribe(() => this.router.navigateByUrl('/index'));

        // ajout + redirection (router)
      } else {
        this.serviceProduct
          .add(this.formGroup.value)
          .subscribe(() => this.router.navigateByUrl('/index'));
      }
    }
  }
}

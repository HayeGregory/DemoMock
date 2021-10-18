import { Validators } from '@angular/forms';

// nos controls present dans le/les formulaires concernant products
export const ProductForm = {
  name: [
    null,
    [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
  ],
  price: [null, [Validators.required, Validators.min(0), Validators.max(9999)]],
};

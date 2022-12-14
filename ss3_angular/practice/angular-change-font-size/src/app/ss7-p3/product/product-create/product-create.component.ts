import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  constructor(private productService: ProductService,
              private activateRouter: ActivatedRoute ) {
    console.log('contructor create ');
  }

  ngOnInit(): void {
    console.log('create khoi tao');
  }
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.productForm.reset();
  }
}

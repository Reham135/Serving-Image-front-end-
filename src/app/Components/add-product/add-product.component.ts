import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ImagesService } from 'src/app/Services/images.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private imageService: ImagesService) {}
  imageURL = '';
  form = new FormGroup({
    name: new FormControl<string>(''),
    quantity: new FormControl<number>(0),
    image: new FormControl<string>(''),
  });

  uploadPhoto(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.imageService.Upload(file).subscribe((data) => {
      (this.imageURL = data.url),
        this.form.patchValue({ image: this.imageURL });
    });
  }

  AddProduct(e: Event) {
    e.preventDefault();
    console.log(this.form.value);
  }
}

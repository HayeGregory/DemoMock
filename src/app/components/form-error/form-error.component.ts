import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
})
export class FormErrorComponent implements OnInit {
  // pour passer le control du parent dans notre composant
  @Input() control!: AbstractControl | null;

  constructor() {}

  ngOnInit(): void {}
}

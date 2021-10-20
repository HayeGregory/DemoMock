import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulaire-test',
  templateUrl: './formulaire-test.component.html',
  styleUrls: ['./formulaire-test.component.scss'],
})
export class FormulaireTestComponent implements OnInit {
  public formulaire!: FormGroup;
  public rangeDate!: AbstractControl;

  activityFavorite: string = '';
  activities: string[] = [
    'Activite A',
    'Activite B',
    'Activite C',
    'Activite D',
    'Activite E',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rangeDate = this.fb.group({
      startDate: [''],
      endDate: [''],
    });

    this.formulaire = this.fb.group({
      inputName: ['', [Validators.required, Validators.maxLength(20)]],
      checkboxMajeur: [''],
      radioActivity: [''],
      toggleMajeur: [''],
      selectFood: [''],
      sliderQuantity: [''],
      date: [''],
      rangeDate: this.rangeDate,
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class CustomInputComponent implements OnInit {
  @Input() leading?: HTMLElement;
  @Input() label: string = ''; // Optional label for the input
  @Input() placeholder: string = ''; // Placeholder text
  @Input() class: string = 'text';
  @Input() type: string = 'text'; // Input type (e.g., text, password, email)
  @Input() control: FormControl = new FormControl(); // FormControl bound to this input
  @Input() errorMessage: string = ''; // Custom error message for validation

  inputId: string = ''; // Unique ID for the input

  get hasError(): boolean {
    return this.control.touched && this.control.invalid;
  }

  ngOnInit() {
    // Generate a unique ID for accessibility
    this.inputId = 'input-' + Math.random().toString(36).substring(2, 15);
  }
}

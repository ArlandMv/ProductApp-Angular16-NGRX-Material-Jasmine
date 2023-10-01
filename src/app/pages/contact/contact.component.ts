import { Component } from '@angular/core';

// TODO: Integrate with backend API

// TODO: Create unit tests

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
    `
      .container {
        max-width: 800px;
        margin: auto;
        padding: 20px;
        background: #f2ebf9;
      }
      div {
        max-width: 400px;
        margin: auto;
      }
      form {
        display: flex;
        flex-direction: column;
      }
      label {
        margin-bottom: 5px;
      }
      input,
      textarea {
        margin-bottom: 10px;
      }
      .mat-elevation-z4 {
        box-shadow: 0 2px 4px rgba(106, 5, 114, 0.24),
          0 4px 8px rgba(106, 5, 114, 0.18);
      }
    `,
  ],
})
export class ContactComponent {
  submitForm(form: any): void {
    console.log('Form submitted!', form.value);
  }
}

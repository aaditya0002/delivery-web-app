import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrl: './admin-log-in.component.css'
})
export class AdminLogInComponent {
  @ViewChild('adminForm', { static: true }) form!: NgForm;
  noOfCenters = 10;
  adminSubmit(adminForm: NgForm) {
    // Handle form submission logic here
    if(adminForm.value.id.toString() === "1215" && adminForm.value.password === "Admin123") {
      
    }
}

  idErr(value: any) {
    const numericRegex = /^[0-9]+$/;
    const isValid = numericRegex.test(value);
  
    if (!isValid || parseInt(value, 10) !=1215) {
      this.form.controls['id'].setErrors({ invalidId: true });
      if (!isValid) {
        this.form.controls['id'].setErrors({ pattern: true });
      }
      if (parseInt(value, 10) <= 0) {
        this.form.controls['id'].setErrors({ required: true });
      }
      if (parseInt(value, 10) > this.noOfCenters) {
        this.form.controls['id'].setErrors({ pattern: true });
      }
    } else {
      this.form.controls['id'].setErrors(null);
    }
  }
}

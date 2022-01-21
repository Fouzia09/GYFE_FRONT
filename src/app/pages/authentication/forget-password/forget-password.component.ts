import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { first,finalize } from 'rxjs/operators';
import { AuthenticationService } from './../../../services/authentication.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.forgotPassword(this.f['email'].value)
      .pipe(first())
      .pipe(finalize(() => this.loading = false))
      .subscribe({});
  }

}

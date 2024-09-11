import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm: FormGroup = this.fb.group({
    id:['',[Validators.required]],
    pin:['',[Validators.required]]
  })
  constructor(private fb: FormBuilder){}

  onLogin():void{
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      console.log("tas mal");
      return;
    }
  }

}

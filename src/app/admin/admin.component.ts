import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 myForm: FormGroup;

 constructor(private fb: FormBuilder, private authService: AuthService,
private router: Router) {}

 ngOnInit() {
this.myForm = this.fb.group ({
name: '',
password: '',
role: ''
});
 }

 onSubmit() {
this.authService.regUser(this.myForm.value.name,
this.myForm.value.password, this.myForm.value.role).subscribe();
this.router.navigateByUrl('/login');
}
}

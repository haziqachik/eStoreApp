import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RevService } from '../rev.service';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title: string;
	desc: string;
	price: number;
	date: string;
	type: string;
  image: string;
  myForm: FormGroup;
  revs: any = [];
  private sub: any;
  

  constructor(private authService:AuthService, private route: ActivatedRoute, private fb: FormBuilder, private router:Router, private revService:RevService, private modalService: NgbModal) 
  {
    this.ngOnInit(); 
    this.revService.getAllReviews(this.title).subscribe(reviews => {
      this.revs = reviews;
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{
    this.title = params['product_title'];
    this.desc = params['product_description'];
  	this.price = +params['product_unitPrice'];
  	this.date = params['product_releaseDate'];
  	this.type = params['product_type'];
    this.image = params['product_image'];
    });
    
    this.myForm = this.fb.group({ 
      revname: '', 
      revdescription: '',
      revrate: '' 
      
    });
  }

  onSubmit(content) 
  {
     if (this.authService.getSecureToken()==null && this.authService.getUserRole()==null) {
      this.modalService.open(content); 
      this.router.navigateByUrl('/logout');
     }
     else
     {
      this.revService.insertReview(this.myForm.value.revname, 
      this.myForm.value.revdescription, this.myForm.value.revrate, this.authService.getSecureToken() , this.title).subscribe();
       }
  }
}

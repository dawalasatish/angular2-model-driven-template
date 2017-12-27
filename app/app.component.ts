import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; //FormControl using weare not using formbuilder
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles:[`
	input.ng-invalid{border-left: 5px solid red;}
	input.ng-valid{border-left: 5px solid green;}
  `]
})
export class AppComponent implements OnInit{ 
	
	//using form builder api and also using ngOnInit

	userForm : FormGroup;

	constructor(private _formBuilder: FormBuilder){}

	ngOnInit(){
		this.userForm = this._formBuilder.group({
			name: ['satish',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
			email: [],
			address : this._formBuilder.group({
				street: [],
				city: [],
				postalCode: [null,[Validators.pattern('^[1-9][0-9]{4}$')]]
			})
		})
	}




///using model driven form validate

	/*userForm = new FormGroup({
		name : new FormControl('satish',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
		email : new FormControl(),
		address : new FormGroup({
			street : new FormControl(),
			city : new FormControl(),
			postalCode : new FormControl(null,Validators.pattern('^[1-9][0-9]{4}$'))
		})
	});*/
	onSubmit(){
		console.log(this.userForm.value);
	}
}

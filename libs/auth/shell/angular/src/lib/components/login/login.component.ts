import {Component, OnInit, ViewChild} from '@angular/core';
import {map} from "rxjs/operators";

import {FormComponent, IButtonOptions, IFormOptions} from "@smartsoft001/angular";
import {LoginDto} from "@smartsoft001/auth-shell-dtos";

import {AuthFacade} from "../../+state/auth.facade";

@Component({
  selector: 'smart-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _loading$ = this.facade.loaded$.pipe(map(l => !l));

  buttonOptions: IButtonOptions = {
    type: 'submit',
    click: () => this.login(),
    loading$: this._loading$
  };
  formOptions: IFormOptions<LoginDto> = {
    model: new LoginDto(),
    loading$: this._loading$
  };

  @ViewChild(FormComponent, { read: FormComponent, static: false })
  formComponent: FormComponent<LoginDto>;

  constructor(private facade: AuthFacade) { }

  login(): void {
    if (this.formComponent.form.valid) {
      this.facade.login(this.formComponent.form.value);
      this.formComponent.form.controls['password'].setValue('');
    }
  }

  ngOnInit() {
  }

}

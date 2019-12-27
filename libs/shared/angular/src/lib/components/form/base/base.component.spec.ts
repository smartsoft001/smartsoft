import 'jest-preset-angular';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from "@angular/forms";

import { FormBaseComponent } from './base.component';
import {Component} from "@angular/core";
import {FormFactory} from "@smartsoft001/angular";
import {Model} from "@smartsoft001/models";

describe('shared-angular: BaseComponent', () => {

  @Component({
    // tslint:disable-next-line:component-selector
    selector: 'smartsoft-test',
    template: 'test'
  })
  class TestFormBaseComponent extends FormBaseComponent<any> {
    constructor(factory: FormFactory) {
      super(factory);
    }
  }

  let component: TestFormBaseComponent;
  let fixture: ComponentFixture<TestFormBaseComponent>;
  let formFactory: FormFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFormBaseComponent ],
      providers: [ FormFactory ],
      imports: [
          ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    formFactory = TestBed.get(FormFactory);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form', () => {

    it('should return form from model',  done => {
      @Model({}) class TestModel {}

      const form = {};
      const model = new TestModel();
      const spy = jest.spyOn(formFactory, 'create').mockReturnValueOnce((Promise.resolve(form as any)));

      component.model = model;

      setTimeout(() => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(model);
        expect(component.form).toBe(form);

        done();
      });
    });

  })
});

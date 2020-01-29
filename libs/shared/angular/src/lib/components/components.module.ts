import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material";
import {RouterModule} from "@angular/router";

import {DetailTextComponent} from "./detail/text/text.component";
import {DetailFlagComponent} from "./detail/flag/flag.component";
import {DetailEnumComponent} from "./detail/enum/enum.component";
import {DetailEmailComponent} from "./detail/email/email.component";
import {InputErrorComponent} from "./input/error/error.component";
import {InputTextComponent} from "./input/text/text.component";
import {InputPasswordComponent} from "./input/password/password.component";
import {InputFlagComponent} from "./input/flag/flag.component";
import {InputEnumComponent} from "./input/enum/enum.component";
import {InputEmailComponent} from "./input/email/email.component";
import {InputCurrencyComponent} from "./input/currency/currency.component";
import {InputDateComponent} from "./input/date/date.component";
import {AppSplitPanelComponent} from './app/split-panel/split-panel.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { FormStandardComponent } from './form/standard/standard.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { ListMobileComponent } from './list/mobile/mobile.component';
import { ListDesktopComponent } from './list/desktop/desktop.component';
import { LoaderComponent } from './loader/loader.component';
import { PageStandardComponent } from './page/standard/standard.component';
import { PageComponent } from './page/page.component';
import {SharedPipesModule} from "../pipes/pipes.module";
import {SharedDirectivesModule} from "../directives/directives.module";
import {DetailsComponent} from "./details/details.component";
import { DetailsStandardComponent } from './details/standard/standard.component';

export const APP_COMPONENTS = [AppSplitPanelComponent];

export const BUTTON_COMPONENTS = [ButtonComponent];

export const CARD_COMPONENTS = [CardComponent];

export const DETAILS_COMPONENTS = [
    DetailsComponent,
    DetailsStandardComponent
];

export const DETAIL_COMPONENTS = [
    DetailComponent,
    DetailTextComponent,
    DetailFlagComponent,
    DetailEnumComponent,
    DetailEmailComponent
];

export const FORM_COMPONENTS = [FormStandardComponent, FormComponent];

export const INPUT_COMPONENTS = [
    InputComponent,
    InputErrorComponent,
    InputTextComponent,
    InputPasswordComponent,
    InputFlagComponent,
    InputEnumComponent,
    InputEmailComponent,
    InputCurrencyComponent,
    InputDateComponent
];

export const LIST_COMPONENTS = [
    ListComponent,
    ListMobileComponent,
    ListDesktopComponent
];

export const LOADER_COMPONENTS = [LoaderComponent];

export const PAGE_COMPONENTS = [PageStandardComponent, PageComponent];

export const COMPONENTS = [
    ...FORM_COMPONENTS,
    ...APP_COMPONENTS,
    ...PAGE_COMPONENTS,
    ...INPUT_COMPONENTS,
    ...BUTTON_COMPONENTS,
    ...CARD_COMPONENTS,
    ...LIST_COMPONENTS,
    ...LOADER_COMPONENTS,
    ...DETAIL_COMPONENTS,
    ...DETAILS_COMPONENTS
];

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    entryComponents: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        TranslateModule,
        RouterModule,
        SharedPipesModule,
        SharedDirectivesModule,
        HttpClientModule,
        MatTableModule,
    ]
})
export class SharedComponentsModule {

}
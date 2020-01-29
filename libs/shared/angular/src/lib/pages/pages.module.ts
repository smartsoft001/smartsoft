import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";

import {SharedServicesModule} from "../services/services.module";
import {DetailsPage} from "./details/details.page";
import {SharedComponentsModule} from "../components/components.module";
import {SharedDirectivesModule} from "../directives/directives.module";

export const COMPONENTS = [
    DetailsPage
];

@NgModule({
    imports: [
        IonicModule,
        SharedServicesModule,
        SharedComponentsModule,
        SharedDirectivesModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    entryComponents: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class SharedPagesModule {

}
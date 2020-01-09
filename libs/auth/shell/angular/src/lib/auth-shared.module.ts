import {NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

import {AuthInterceptor} from "./interceptors";

@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ]
})
export class AuthSharedModule {

}

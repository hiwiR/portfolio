import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { LandingComponent } from './landing/landing.component';
@NgModule({
    declarations: [
        NavbarComponent,
        LandingComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavbarComponent,
        LandingComponent
    ]
})
export class SharedModule{

}
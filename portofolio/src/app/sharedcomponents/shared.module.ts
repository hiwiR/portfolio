import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { LandingComponent } from './landing/landing.component';
import { CardcomponentComponent } from './cardcomponent/cardcomponent.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
    declarations: [
        NavbarComponent,
        LandingComponent,
        CardcomponentComponent,
        ResumeComponent,
        ContactComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavbarComponent,
        LandingComponent,
        CardcomponentComponent,
        ResumeComponent
    ]
})
export class SharedModule{

}
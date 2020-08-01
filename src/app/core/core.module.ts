import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiPrefixInterceptor } from './interceptors/api-prefix.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MenubarModule,
    FormsModule,ReactiveFormsModule,
    ButtonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    }],
  exports: [
    HeaderComponent, FooterComponent
  ]
})
export class CoreModule { }

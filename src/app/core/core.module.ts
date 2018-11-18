import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalStorageService} from './services/local-storage.service';
import {ConfigOptionsService} from './services/config-options.service';
import {CONSTANTS_SERVICE, Constants} from './services/constants.service';
import {GENERATOR_SERVICE, generatorsFactory} from './services/generator.service';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    { provide: CONSTANTS_SERVICE, useValue: Constants },
    { provide: GENERATOR_SERVICE, useFactory: generatorsFactory(10), deps: [] }
  ],
  exports: [
    ContactUsComponent
  ]
})
export class CoreModule { }

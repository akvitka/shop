import {Component, Inject, OnInit, Optional} from '@angular/core';
import {ConfigOptionsService} from '../../services/config-options.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {CONSTANTS_SERVICE} from '../../services/constants.service';
import {GENERATOR_SERVICE, GeneratorService} from '../../services/generator.service';
import {ConfigOptions} from '../../models/config-options.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private configOptionsService: ConfigOptionsService,
              private localStorageService: LocalStorageService,
              @Optional() @Inject(CONSTANTS_SERVICE) private constants: any,
              @Optional() @Inject(GENERATOR_SERVICE) private generatorService: GeneratorService) { }

  ngOnInit() {
    this.configOptionsService.set(new ConfigOptions('123', 'asd', 'dsa@asd.com'));
    console.log('>>> configOptionsService.get() >>> ', JSON.stringify(this.configOptionsService.get()));

    this.localStorageService.setItem('key1', 'value1');
    console.log('>>> localStorageService.getItem() >>> ', this.localStorageService.getItem('key1'));

    console.log('>>> constants.app >>> ', this.constants.app);

    console.log('>>> generatorService.generate() >>> ', this.generatorService.generate());
  }

}

import { Injectable } from '@angular/core';
import {ConfigOptions} from '../models/config-options.model';

@Injectable()
export class ConfigOptionsService {

  private options: ConfigOptions;

  constructor() { }

  set(options: ConfigOptions) {
    this.options = options;
  }

  get(): ConfigOptions {
    return this.options;
  }

}

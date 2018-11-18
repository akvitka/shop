import { InjectionToken } from '@angular/core';

export const GENERATOR_SERVICE = new InjectionToken<string>('GENERATOR_SERVICE');

export function generatorsFactory(length: number) {
  return (): GeneratorService => new GeneratorService(length);
}

export class GeneratorService {

  readonly acceptableChar: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  constructor(private length: number) { }

  generate(): string {
    let text = '';
    for (let i = 0; i < this.length; i++) {
      text += this.acceptableChar.charAt(Math.floor(Math.random() * this.acceptableChar.length));
    }
    return text;
  }
}

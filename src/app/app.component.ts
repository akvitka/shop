import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;

  ngAfterViewInit(): void {
    (<HTMLHeadingElement>this.appTitle.nativeElement).textContent = 'Shop';
  }
}

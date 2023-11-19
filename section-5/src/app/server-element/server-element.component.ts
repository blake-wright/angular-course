import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  // called when this comp starts init, doesnt mean display/view
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content: ', this.header.nativeElement.textContent);
    console.log(
      'Text Content Paragraph: ',
      this.paragraph.nativeElement.textContent
    );
  }

  // lots of checks
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  // projected content into this comp, called after done initing
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  // called after change detection cycle
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  // after view is displayed
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ', this.header.nativeElement.textContent);
    console.log(
      'Text Content Paragraph: ',
      this.paragraph.nativeElement.textContent
    );
  }

  // logs after view init / when the view is checked
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  // when comp is destroyed
  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}

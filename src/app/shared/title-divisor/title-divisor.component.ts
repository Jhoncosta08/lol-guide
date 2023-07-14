import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-title-divisor',
  templateUrl: './title-divisor.component.html',
  styleUrls: ['./title-divisor.component.scss']
})
export class TitleDivisorComponent {
  @Input({required: true}) title: string = 'Title';
  @Input() showSearch: boolean = false;
  @Output() sendInput: EventEmitter<string> = new EventEmitter<string>();

  sendInputText(inputEvent: any) {
    this.sendInput.emit(inputEvent.target.value);
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.scss']
})
export class DynamicButtonComponent {
  @Input({required: true}) buttonId: string = '';
  @Input({required: true}) buttonText: string = 'Button';
  @Input({required: true}) buttonStyle: 'primary' | 'outline' | 'warn' | 'danger' = 'primary';
  @Input({required: true}) buttonType: 'button' | 'submit' | 'reset' = 'button';
  @Input({required: true}) buttonDisable: boolean = false;
  @Input() buttonWidth: number = 150;
  @Input() buttonHeight: number = 35;
  @Output() buttonAction: EventEmitter<void> = new EventEmitter<void>();
}

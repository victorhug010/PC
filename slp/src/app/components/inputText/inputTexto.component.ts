import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'inputText',
  templateUrl: './inputTexto.component.html',
  styleUrls: ['./inputTexto.component.scss']
})
export class InputTextComponent {
    enterEvent: any;
    pressEnter() {
        this.enterEvent.emit();
      }

      @Input()
  placeholder: String = '';

  @Input('type')
  inputType: String = 'text';

  _textoDigitado: String = '';

  @Input('value')
  set textoDigitado(newValue: String) {
    this._textoDigitado = newValue;
    this.valueChanged.emit(this._textoDigitado);

  }
  @Output()
  valueChanged = new EventEmitter();
}
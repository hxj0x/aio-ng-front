import {TuiAppearance, TuiButton, TuiInteractiveState, TuiRoot} from "@taiga-ui/core";
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {DemoComponent} from './demo.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiButton,
  ],
  template: `
    <div>
      <button size="l"
              tuiButton
              appearance="outline"
              [tuiAppearanceState]="disabled"
              type="button">按钮
      </button>
      <button type="button" tuiButton (click)="updateTitle()">更新</button>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `
})
export class AppComponent {
  title = signal('taiga-demo');
  disabled: TuiInteractiveState | null = null;

  updateTitle() {

    if (this.disabled === null) {
      this.disabled = "disabled";
    } else {
      this.disabled = null;
    }
  }
}

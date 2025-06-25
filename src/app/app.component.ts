import {TuiButton, TuiIcon, TuiInteractiveState} from "@taiga-ui/core";
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {TuiButtonLoading} from '@taiga-ui/kit';

@Component({
  selector: 'aio-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiButton,
    TuiButtonLoading,
    TuiIcon,
  ],
  template: `
    <div>
      <button
        tuiButton
        appearance="outline"
        [loading]="true"
        (click)="login($event)"
        type="button">按钮
      </button>
      <button type="button" tuiButton (click)="updateTitle()">更新</button>
      <button
        appearance="secondary"
        size="m"
        tuiButton
        type="button"
      >
        <tui-icon
          icon="@tui.user"
          [style.height.rem]="1"
        />
        Users
      </button>
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

  login($event: MouseEvent) {
    console.log($event);
  }

  updateTitle() {

    if (this.disabled === null) {
      this.disabled = "disabled";
    } else {
      this.disabled = null;
    }
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent {
  @Input() numeriPariRomani!: string[];

  @Component({
    selector: 'app-padre',
    template: '<p>Padre works!</p>',
  })
  public PadreComponent: any;
}


import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px' //fará animação para baixo
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px' //animação será feita para cima
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')), //duração, delay e maciez da animação
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Hello there!';

  snackVisibility: string = 'hidden';

  constructor() { }

  ngOnInit() {
  }

  toggleSnack() {
    this.snackVisibility = this.snackVisibility === 'hidden' ? 'visible' : 'hidden';
  }

}

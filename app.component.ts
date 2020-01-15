import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-example';
  private password = '';
  private name = '';
  private vypis = '';
  private logged = true;
  clickLogin() {
    if ( this.name === 'Ondrej' && this.password === '123') {

      this.logged = false;
      this.vypis = 'Logged in';
    } else {
      this.logged = false;
      this.vypis = 'Incorrect';
    }
  }

}

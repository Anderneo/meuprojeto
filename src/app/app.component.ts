import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  pages: Array<{ title: string, url: string, icon: string }>;

  constructor(private menu: MenuController) {
    menu.enable(true);

    this.pages = [
      { title: 'Cadastro', url: 'cadastro', icon: 'list' },
      { title: 'Login', url: 'login', icon: 'list' },
      { title: 'Recepcao', url: 'recepcao', icon: 'list' },
      { title: 'Mídia', url: 'media', icon: 'list' }
    ];

  }

}


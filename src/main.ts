
// ponto de entrada

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //inicia e executa a aplicação
import { AppModule } from './app/app.module'; //módulo raiz da sua aplicação, onde você define todos os componentes, serviços, diretivas

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// (Promise) caso ocorra algum erro durante a inicialização, será capturado pelo método .catch()


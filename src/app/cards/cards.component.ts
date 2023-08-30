import { Component, OnInit } from '@angular/core';
//método ngOnInit() que será chamado automaticamente pelo ciclo de vida do Angular quando o componente for inicializado.
import { HttpClient } from '@angular/common/http';  
import { Router } from '@angular/router';
// protocolo HTTP: fazer requisições POST, PUT, DELETE e outras interações.

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  flipped = false;

  toggle() {
    this.flipped = !this.flipped;
  }

  /****************************************************************** */

  arrayFrenteVersoCard = [];

  frente = '';
  verso = '';

  contAcerto = 0;
  contCards = 0;

  constructor(private http: HttpClient, private router: Router) { }
  // O HttpClient agora está disponível como 'http' dentro deste construtor
  // Construtor configura o objeto
  // Métodos do HttpClient (como get(), post(), put(), delete()) para realizar as operações de rede necessárias.

  // router é a class de navegação de página do angula. Chama o arquivo de rotas

  ngOnInit(): void {
    this.leiaJsonData();
  }

  leiaJsonData(): void {
    this.http.get('../../assets/data/cards.json').subscribe(
      (jsonData: any) => {
        if(jsonData != null && jsonData != undefined){
          this.arrayFrenteVersoCard = jsonData['cards'];
          this.contCards = this.arrayFrenteVersoCard.length;
          this.populaCard();
        }
      },
      error => {
        console.error('Error loading JSON data:', error);
      }
    );
  }

  populaCard(): void{
    if(this.arrayFrenteVersoCard.length > 0){
      this.frente = this.arrayFrenteVersoCard[0]['F'];
      this.verso = this.arrayFrenteVersoCard[0]['V'];
    }else{
      this.router.navigate(['']) // Navega até a home denovo
    }
  }

  certo(): void{
    if(this.arrayFrenteVersoCard.length > 0){
      this.arrayFrenteVersoCard.shift();   // remove o primeiro elemento do array 
      this.populaCard();      // tô chamando a função de cima
    }
    this.contAcerto += 1;     //tô incrementando a propriedade contAcerto 
    this.flipped = false;
  }
  
  errado(): void{
    if(this.arrayFrenteVersoCard.length > 0){
      this.arrayFrenteVersoCard.push(this.arrayFrenteVersoCard[0]);
      this.arrayFrenteVersoCard.shift();
      this.populaCard();
    }
    this.flipped = false;
  }

}


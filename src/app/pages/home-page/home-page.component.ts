import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  projects = [{
    name: 'Dicas para criar seu primeiro projeto Angular',
    description: 'A pagina material.angular.io te mostra de forma detalhada como dar seus primeiros passos com o Framework Angular...'
  }, {
    name: 'Biblioteca SeleniumLibrary no RobotFramework',
    description: 'SeleniumLibrary utiliza os modulos do Selenium WebDriver com Python na escrita de suas Keywords...'
  }, {
    name: 'PUC Minas iniciar segundo semestre com mais de 140 turmas na Pos',
    description: 'O modelo remoto ao vivo possibilita que alunos de diferentes lugares façam a POS sem ter que se deslocar até os grandes centros...'
  }];

  constructor() { }

  ngOnInit() {
  }

}
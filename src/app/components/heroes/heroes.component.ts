import { Component, OnInit } from '@angular/core';
import { HeroesService, heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})

export class HeroesComponent implements OnInit {
  heroes: heroe[] = [];

  constructor(private _heroesService: HeroesService, private _router : Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(index: number) {
    console.log(index);
    this._router.navigate(['/heroe/',index]);
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent {
  heroes: any[] = [];
  termino: string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) {}

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['term'];
      this.heroes = this._heroesService.buscarHeroes(params['term']);
    });
  }
}

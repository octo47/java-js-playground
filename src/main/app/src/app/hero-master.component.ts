import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'hero-master',
  templateUrl: './hero-master.component.html'
})
export class HeroMasterComponent implements OnInit{
  @Input()
  name: string = "Master";

  @Input()
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.topHeroes().then(heroes => this.heroes = heroes);
  }
}

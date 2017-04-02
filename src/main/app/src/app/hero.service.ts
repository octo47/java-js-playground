import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


import {Hero} from "./hero";

@Injectable()
export class HeroService {

  constructor(private http: Http) {}

  topHeroes(): Promise<Hero[]> {
    return this.getHeroes()
      .then(heroes => heroes.slice(1, 5))
      .catch(HeroService.handleError)
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get('/api/heroes')
      .toPromise()
      .then(response =>
        response.json() as Hero[])
      .catch(HeroService.handleError);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

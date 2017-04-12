import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from './hero';
import {HeroVoterComponent} from './hero-voter.component';

@Component({
  selector: "hero-child",
  templateUrl: "./hero-child.component.html",
  entryComponents: [HeroVoterComponent],
})
export class HeroChildComponent {
  @Input() hero: Hero;
  @Input("master") masterName: string;
  @Output() onVoted = new EventEmitter();

  voted(isGood: boolean) {
    this.onVoted.emit(isGood)
  }
}

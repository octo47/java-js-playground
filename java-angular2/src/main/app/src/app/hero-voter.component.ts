import {Component, EventEmitter, Output} from '@angular/core';
@Component({
  selector: "hero-voter",
  template: `
    <button (click)="voteGood(true)" [disabled]="voted">Good</button>
    <button (click)="voteGood(false)" [disabled]="voted">Bad</button>
  `
})
export class HeroVoterComponent {
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;

  voteGood(isGood: boolean) {
    if (!this.voted) {
      this.voted = true;
      this.onVoted.emit(isGood)
    }
  }
}

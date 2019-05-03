import { Component, OnInit, HostListener } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  hideTooltipBodyA = true;
  hideTooltipBodyB = true;
  tooltipBodyA = 'This is the tooltip for button A';
  tooltipBodyB = 'This is the tooltip for button B';
  speech: any;
  classContainer = 'tooltip-container';
  classContent = 'tooltip-text';
  constructor() {}

  ngOnInit() {
    this.initializeSpeech();
  }

  initializeSpeech() {
    this.speech = new Speech(); // will throw an exception if not browser supported
    if (this.speech.hasBrowserSupport()) {
      // returns a boolean
      console.log('speech synthesis supported');
      this.speech
        .init({
          volume: 1,
          lang: 'en-US',
          rate: 1,
          pitch: 1,
          voice: 'Google US English',
          splitSentences: true,
          listeners: {
            onvoiceschanged: voices => {
              console.log('Event voiceschanged', voices);
            }
          }
        })
        .then(data => {
          // The "data" object contains the list of available voices and the voice synthesis params
          console.log('Speech is ready, voices are available', data);
        })
        .catch(e => {
          console.error('An error occured while initializing : ', e);
        });
    }
  }

  showTooltip(event) {
    switch (event.target.value) {
      case 'A':
        this.hideTooltipBodyA = false;
        this.hideTooltipBodyB = true;
        this.playText(this.tooltipBodyA);
        break;

      case 'B':
        this.hideTooltipBodyA = true;
        this.hideTooltipBodyB = false;
        this.playText(this.tooltipBodyB);
        break;
    }
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.hideTooltipBodyA = true;
    this.hideTooltipBodyB = true;
  }

  onClickedOutside(event) {
    if (
      event.target.value !== 'A' &&
      event.target.value !== 'B' &&
      event.target.id !== 'tooltipContent'
    ) {
      this.hideTooltipBodyA = true;
      this.hideTooltipBodyB = true;
    }
  }

  playText(toolTipText) {
    this.speech
      .speak({
        text: toolTipText
      })
      .then(() => {
        console.log('Success !');
      })
      .catch(e => {
        console.error('An error occurred :', e);
      });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      this.classContainer = 'tooltip-container-bottom';
      this.classContent = 'tooltip-text-bottom';
      console.log('changed class');
    } else {
      this.classContainer = 'tooltip-container';
      this.classContent = 'tooltip-text';
      console.log('changed class back');
    }
  }
}

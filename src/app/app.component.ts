import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {FormControl} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practice work';
  BarChart = [];
  wordsCount: number;
  words: string[];
  wordsLength: number;
  // letters declaration
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;
  f = 0;
  g = 0;
  h = 0;
  i = 0;
  j = 0;
  k = 0;
  l = 0;
  m = 0;
  n = 0;
  o = 0;
  p = 0;
  q = 0;
  r = 0;
  s = 0;
  t = 0;
  u = 0;
  v = 0;
  w = 0;
  x = 0;
  y = 0;
  z = 0;
  exclamatory = 0;
  question = 0;
  point = 0;
  comma = 0;
  star = 0;
  leftTemple = 0;
  rightTemple = 0;
  semicolons = 0;
  leftDiamond = 0;
  rightDiamond = 0;
  slash = 0;
  reverseSlash = 0;

  public textControl = new FormControl('');
  public descriptionLength = new BehaviorSubject(0);

  constructor() {
    this.textControl.valueChanges.subscribe((v) => this.descriptionLength.next(v.length));
  }
  countingMarks(text: string) {
    this.exclamatory = text.split('!').length - 1;
    this.semicolons = text.split('"').length - 1;
    this.question = text.split('?').length - 1;
    this.point = text.split('.').length - 1;
    this.comma = text.split(',').length - 1;
    this.star = text.split('*').length - 1;
    this.leftTemple = text.split('(').length - 1;
    this.rightTemple = text.split(')').length - 1;
    this.leftDiamond = text.split('<').length - 1;
    this.rightDiamond = text.split('>').length - 1;
    this.slash = text.split('/').length - 1;
  }
  countingLetters(text: string) {
    this.a = text.split('a').length - 1;
    this.b = text.split('b').length - 1;
    this.c = text.split('c').length - 1;
    this.d = text.split('d').length - 1;
    this.e = text.split('e').length - 1;
    this.f = text.split('f').length - 1;
    this.g = text.split('g').length - 1;
    this.h = text.split('h').length - 1;
    this.i = text.split('i').length - 1;
    this.j = text.split('j').length - 1;
    this.k = text.split('k').length - 1;
    this.l = text.split('l').length - 1;
    this.m = text.split('m').length - 1;
    this.n = text.split('n').length - 1;
    this.o = text.split('o').length - 1;
    this.p = text.split('p').length - 1;
    this.q = text.split('q').length - 1;
    this.r = text.split('r').length - 1;
    this.s = text.split('s').length - 1;
    this.t = text.split('t').length - 1;
    this.u = text.split('u').length - 1;
    this.v = text.split('v').length - 1;
    this.w = text.split('w').length - 1;
    this.x = text.split('x').length - 1;
    this.y = text.split('y').length - 1;
    this.z = text.split('z').length - 1;
  }

  generateLettersChart(text: string) {
    this.wordsCount = text.split(' ').length;
    this.countingLetters(text);
    this.words = text.split(' ');
    this.wordsLength = this.words.join('').length / this.words.length;
    // Bar chart:
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
          'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        datasets: [{
          data: [this.a, this.b, this.c, this.d, this.e, this.f, this.g, this.h, this.i, this.j,
            this.k, this.l, this.m, this.n, this.o, this.p, this.q, this.r, this.s, this.t, this.u, this.v, this.w, this.x, this.y, this.z],
          backgroundColor: [
            'rgba(255,46,73,0.81)',
            'rgba(54,162,235,0.79)',
            'rgba(255,206,86,0.74)',
            'rgba(75,192,192,0.78)',
            'rgba(153,102,255,0.78)',
            'rgba(255,159,64,0.77)',
            'rgba(42,255,228,0.77)',
            'rgba(193,255,103,0.77)',
            'rgba(160,14,255,0.77)',
            'rgba(255,195,227,0.77)',
            'rgba(95,255,253,0.77)',
            'rgba(255,235,0,0.77)',
            'rgba(199,255,173,0.77)',
            'rgba(79,242,255,0.77)',
            'rgba(145,193,255,0.77)',
            'rgba(255,107,138,0.77)',
            'rgba(255,33,131,0.77)',
            'rgba(254,255,166,0.77)',
            'rgba(110,255,167,0.77)',
            'rgba(255,71,199,0.77)',
            'rgba(60,255,57,0.77)',
            'rgba(255,240,49,0.77)',
            'rgba(8,255,197,0.78)',
            'rgba(231,221,255,0.77)',
            'rgba(75,75,75,0.77)',
            'rgba(158,255,228,0.77)',


          ],
          borderColor: [
            'white'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: 'Letters Diagram',
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

  generateMarksChart(text: string) {
    this.countingMarks(text);
    // Bar chart:
    this.BarChart = new Chart('markChart', {
      type: 'bar',
      data: {
        labels: ['mark', 'comma', 'exclamatory mark', 'star', 'semicolons', 'left diamond', 'right diamond',
            'slash', 'question mark', 'left temple', 'right temple'],
        datasets: [{
          data: [this.point, this.comma, this.exclamatory, this.star, this.semicolons, this.leftDiamond, this.rightDiamond, this.slash,
            this.question, this.leftTemple, this.rightTemple],
          backgroundColor: [
            'rgba(255,46,73,0.81)',
            'rgba(54,162,235,0.79)',
            'rgba(255,206,86,0.74)',
            'rgba(75,192,192,0.78)',
            'rgba(153,102,255,0.78)',
            'rgba(255,159,64,0.77)',
            'rgba(42,255,228,0.77)',
            'rgba(193,255,103,0.77)',
            'rgba(160,14,255,0.77)',
            'rgba(255,195,227,0.77)',
            'rgba(95,255,253,0.77)'
          ],
          borderColor: [
            'white'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: 'Letters Diagram',
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

  ngOnInit(): void {
  }
}

import './style.css';

import { of, map, Observable } from 'rxjs';
import kick from 'jskick';
//Learn jskick by example https://stackblitz.com/edit/kick-js1?file=index.html

const UCaseAlphas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LCaseAlphas = UCaseAlphas.toLowerCase();
const BGs = [
  '#f00',
  '#0f0',
  '#00f',
  '#ff0',
  '#f0f',
  '#700',
  '#070',
  '#00A',
  '#AA0',
  '#A0A',
];
let marbles = {
  opers: [],
  search: '',
  lanes: [],
  result: {},

  addBall: (lane) => {},
  addLane: (ballType) => {},
  remBall: (lane, ball, idx) => {},
};
marbles.addBall = (lane) => {
  lane.cur = (lane.cur || 0) + 1;
  let cur = lane.cur;
  let text =
    lane.ballType == '#'
      ? cur
      : lane.ballType == 'A'
      ? UCaseAlphas.charAt((cur - 1) % UCaseAlphas.length)
      : LCaseAlphas.charAt((cur - 1) % LCaseAlphas.length);
  lane.balls.push(text);
};
marbles.addLane = (ballType) => {
  let bg = BGs[marbles.lanes.length % BGs.length];
  let lane = { ballType: ballType, cur: null, bg: bg, balls: [] };
  marbles.lanes.push(lane);
  marbles.addBall(lane);
};
marbles.remBall = (lane, ball, idx) => {
  //let idx = marbles.lanes.indexOf(ball);
  console.log(lane, ball, idx);
  lane.balls.splice(idx, 1);
};

kick.bind('', marbles);
marbles.addLane('#');

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

// Open the console in the bottom right to see results.

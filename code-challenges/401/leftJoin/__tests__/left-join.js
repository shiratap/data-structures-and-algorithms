'use strict';

let LJ = require('../left-join.js');
let HT = require('../hashtable.js');

describe('Left Join tests', () => {
  it('Should properly join, (functional)', () => {
    let h1 = new HT();
    let h2 = new HT();

    h1.add('roasty', 'warm');
    h1.add('theFupJuice', 'acid');
    h1.add('angry', 'pissed');

    h2.add('cold', 'warm');
    h2.add('theFu', 'ac');
    h2.add('content', 'pissed');

    expect(LJ(h1, h2)).toEqual([{ key: 'acid', value: ['theFupJuice'] }, { key: 'warm', value: ['roasty', 'cold'] }, { key: 'pissed', value: ['angry', 'content'] }]);
  });
  it('Should return an empty array if either HT1 or 2 is empty, (functional)', () => {
    let h1 = new HT();
    let h2 = new HT();

    expect(LJ(h1, h2)).toEqual([]);
  });
  it('Should fail with bad input', () => {
    let h1 = 'HOwdy DoOdy';
    let h2 = 'I dun no what to call this';

    expect(LJ(h1, h2)).toEqual(null);
  });
});
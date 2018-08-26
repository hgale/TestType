
import { minByKey } from './index';

it('Test returns map with lowest value', () => {
  let expectedAnswer = new Map( [['a', 1], ['b,', 2]] );
  let records: Map<string, number>[] = new Array( expectedAnswer, new Map([['a', 2]]) );
  let answer = minByKey('a', records);  
  expect(answer).toBe(expectedAnswer);
});

it('Test if no key present, it treats value as 0', () => {
  let expectedAnswer = new Map( [['a', 2]] );

  let records: Map<string, number>[] = new Array( expectedAnswer, new Map([['a', 1], ['b', 2] ]) );
  let answer = minByKey('b', records);  
  expect(answer).toBe(expectedAnswer);
});

it('Test it handles the empty map case', () => {
  let expectedAnswer = new Map<string, number>();
  let records: Map<string, number>[] = new Array(expectedAnswer);
  let answer = minByKey('a', records);
  expect(answer).toBe(expectedAnswer);
});

it('Test it handles negative value case', () => {
  let expectedAnswer = new Map( [['b', -1]] );

  let records: Map<string, number>[] = new Array( expectedAnswer, new Map([['a',- 1]]) );
  let answer = minByKey('b', records);  
  expect(answer).toBe(expectedAnswer);
});


it('Test it handles empty array', () => {
  let expectedAnswer = new Map<string, number>();

  let records: Map<string, number>[] = new Array();
  let answer = minByKey('b', records)
  expect(answer).toEqual(expectedAnswer);
});


import 'jest-matcher-one-of';
import { minByKey, Order, firstByKey } from './index';

it('minByKey Test returns map with lowest value', () => {
  let expectedAnswer = new Map( [['a', 1], ['b,', 2]] );
  let records: Map<string, number>[] = new Array( expectedAnswer, new Map([['a', 2]]) );
  let answer = minByKey('a', records);  
  expect(answer).toBe(expectedAnswer);
});

it('minByKey Test if no key present, it treats value as 0', () => {
  let expectedAnswer = new Map( [['a', 2]] );

  let records: Map<string, number>[] = new Array( expectedAnswer, new Map([['a', 1], ['b', 2] ]) );
  let answer = minByKey('b', records);  
  expect(answer).toBe(expectedAnswer);
});

it('minByKey Test it handles the empty map case', () => {
  let expectedAnswer = new Map<string, number>();
  let records: Map<string, number>[] = new Array(expectedAnswer);
  let answer = minByKey('a', records);
  expect(answer).toBe(expectedAnswer);
});

it('minByKey Test it handles negative value case', () => {
  let expectedAnswer = new Map( [['b', -1]] );

  let records: Map<string, number>[] = new Array( expectedAnswer, new Map([['a',- 1]]) );
  let answer = minByKey('b', records);  
  expect(answer).toBe(expectedAnswer);
});


it('minByKey Test it handles empty array', () => {
  let expectedAnswer = new Map<string, number>();

  let records: Map<string, number>[] = new Array();
  let answer = minByKey('b', records)
  expect(answer).toEqual(expectedAnswer);
});


it('firstByKey Test returns map with lowest value', () => {
  let expectedAnswer = new Map( [['a', 1], ['b,', 2]] );
  let records: Map<string, number>[] = new Array( expectedAnswer, new Map([['a', 2]]) );
  let answer = firstByKey('a', Order.Asc, records);  
  expect(answer).toBe(expectedAnswer);
});

it('firstByKey', () => {
  let expectedAnswer = new Map( [['a', 2]] );

  let records: Map<string, number>[] = new Array( expectedAnswer, new Map([['a', 1], ['b', 2] ]) );
  let answer = firstByKey('b', Order.Asc, records);  
  expect(answer).toBe(expectedAnswer);
});

it('firstByKey Test it handles the empty map case', () => {
  let expectedAnswer = new Map<string, number>();
  let records: Map<string, number>[] = new Array(expectedAnswer);
  let answer = firstByKey('a', Order.Asc, records);
  expect(answer).toBe(expectedAnswer);
});

it('firstByKey Test it handles negative value case', () => {
  let expectedAnswer = new Map( [['b', -1]] );

  let records: Map<string, number>[] = new Array( expectedAnswer, new Map([['a',- 1]]) );
  let answer = firstByKey('b', Order.Asc, records);  
  expect(answer).toBe(expectedAnswer);
});

it('firstByKey Test it handles empty array', () => {
  let expectedAnswer = new Map<string, number>();

  let records: Map<string, number>[] = new Array();
  let answer = firstByKey('b', Order.Asc, records)
  expect(answer).toEqual(expectedAnswer);
});

// assert first_by_key("a", "asc", [{"a": 1}]) == {"a": 1}
it('firstByKey asc', () => {
  let expectedAnswer = new Map( [['a', 1],] );
  let records: Map<string, number>[] = new Array( expectedAnswer );
  let answer = firstByKey('a', Order.Asc, records);  
  expect(answer).toBe(expectedAnswer);
});

// assert first_by_key("a", "asc", [{"b": 1}, {"b": -2}, {"a": 10}]) in [{"b": 1}, {"b": -2}]
it('firstByKey asc', () => {
  let expectedAnswerOne = new Map( [['b', 1]] );
  let expectedAnswerTwo = new Map( [['b', -2]] );  
  let records: Map<string, number>[] = new Array( expectedAnswerOne, new Map([['a', 10]]), expectedAnswerTwo  );
  let answer = firstByKey('a', Order.Asc, records);  
  expect(answer).toBeOneOf([expectedAnswerOne, expectedAnswerTwo]);
});

// assert first_by_key("a", "desc", [{"b": 1}, {"b": -2}, {"a": 10}]) == {"a": 10}
it('firstByKey desc', () => {
  let expectedAnswer = new Map( [['a', 10]] );
  let records: Map<string, number>[] = new Array( expectedAnswer, new Map([['b', 1]]), new Map([['b', -2]]));
  let answer = firstByKey('a', Order.Desc, records);  
  expect(answer).toBe(expectedAnswer);
});

// assert first_by_key("b", "asc", [{"b": 1}, {"b": -2}, {"a": 10}]) == {"b": -2}
it('firstByKey asc', () => {
  let expectedAnswer = new Map( [['b', -2]] );
  let records: Map<string, number>[] = new Array( expectedAnswer, new Map([['b', 1]]), new Map([['a', 10]]));
  let answer = firstByKey('a', Order.Asc, records);  
  expect(answer).toBe(expectedAnswer);
});


// assert first_by_key("b", "desc", [{"b": 1}, {"b": -2}, {"a": 10}]) == {"b": 1}
it('firstByKey Desc ', () => {
  let expectedAnswer = new Map( [['b', 1]] );
  let records: Map<string, number>[] = new Array( expectedAnswer, new Map([['b', -2]]), new Map([['a', 10]]));
  let answer = firstByKey('b', Order.Desc, records);  
  expect(answer).toBe(expectedAnswer);
});

// assert first_by_key("a", "desc", [{}, {"a": 10, "b": -10}, {}, {"a": 3, "c": 3}]) == {"a": 10, "b": -10}
it('firstByKey desc', () => {
  let expectedAnswer = new Map( [['b', -10], ['a', 10] ] );
  let records: Map<string, number>[] = new Array( expectedAnswer, new Map<string, number>(), new Map( [['a', 3], ['c', 3] ] ) );
  let answer = firstByKey('a', Order.Desc, records);  
  expect(answer).toBe(expectedAnswer);
});
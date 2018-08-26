

/*
 
Step 1: min_by_key
Throughout this interview, we'll pretend we're building a new analytical database. Don't worry about actually building a database though – these will all be toy 
problems.
 
Here's how the database works: all records are represented as maps, with string keys and integer values. The records are contained in an array, in no particular order.
 
To begin with, the database will support just one function: min_by_key. This function scans the array of records and returns the record that has the minimum value 
for a specified key. Records that do not contain the specified key are considered to have value 0 for the key. Note that keys may map to negative values!
 
Here's an example use case: each of your records contains data about a school student. You can use min_by_key to answer questions such as 
"who is the youngest student?" and "who is the student with the lowest grade-point average?"
 
Implementation notes:
 
You should handle an empty array of records in an idiomatic way in your language of choice.
If several records share the same minimum value for the chosen key, you may return any of them.
Java function signature:
 
public static Map<String, Integer> minByKey(String key, List<Map<String, Integer>> records);
Examples (in Python):
 
assert min_by_key("a", [{"a": 1, "b": 2}, {"a": 2}]) == {"a": 1, "b": 2}
assert min_by_key("a", [{"a": 2}, {"a": 1, "b": 2}]) == {"a": 1, "b": 2}
assert min_by_key("b", [{"a": 1, "b": 2}, {"a": 2}]) == {"a": 2}
assert min_by_key("a", [{}]) == {}
assert min_by_key("b", [{"a": -1}, {"b": -1}]) == {"b": -1}
 
*/


export function minByKey(key: string, records: Map<string, number>[]): Map<string, number> {
  let answer: Map<string, number> | undefined;
  let min: number;
  records.forEach( ( record: Map<string, number>) => {
    let currentValue = record.get(key);
    currentValue = currentValue === undefined ? 0 : currentValue;
    if (!answer) {
      answer = record;
      min = currentValue;
    } else {
      if (currentValue < min ) {
        answer = record;
        min = currentValue;
      }
    }    
  })

  if (!answer) {
    answer = new Map<string, number>();
  }
  return answer;
}

// let records: Map<string, number>[] = new Array( new Map( [['a', 1], ['b,', 2]] ), new Map([['a', 2]]) );

// let answer = minByKey('a', records);
// console.log('Answer is ', answer);

/*
 
Step 2: first_by_key
Our next step in database development is to add a new function. We'll call this function first_by_key. It has much in common with min_by_key. 
first_by_key takes three arguments:
 
a string key
a string sort direction (which must be either "asc" or "desc")
an array of records, just as in min_by_key.
If the sort direction is "asc", then we should return the minimum record, otherwise we should return the maximum record. As before, records without a value for 
the key should be treated as having value 0.
 
Once you have a working solution, you should re-implement min_by_key in terms of first_by_key .
 
Java function signature:
 
public static Map<String, Integer> firstByKey(String key, String direction, List<Map<String, Integer>> records);
Examples (in Python):
 
assert first_by_key("a", "asc", [{"a": 1}]) == {"a": 1}
 
 
assert first_by_key("a", "asc", [{"b": 1}, {"b": -2}, {"a": 10}]) in [{"b": 1}, {"b": -2}]
assert first_by_key("a", "desc", [{"b": 1}, {"b": -2}, {"a": 10}]) == {"a": 10}
assert first_by_key("b", "asc", [{"b": 1}, {"b": -2}, {"a": 10}]) == {"b": -2}
assert first_by_key("b", "desc", [{"b": 1}, {"b": -2}, {"a": 10}]) == {"b": 1}
 
 
assert first_by_key("a", "desc", [{}, {"a": 10, "b": -10}, {}, {"a": 3, "c": 3}]) == {"a": 10, "b": -10}
 
*/
 
export enum Order {
  Asc = "Asc",
  Desc = "Desc",
}

export function firstByKey(key: string, order: Order, records: Map<string, number>[]): Map<string, number> {
  let answer: Map<string, number> | undefined;

  let minMaxValue: number;

  const compareBy = (current: number, minMax: number) : boolean => {
    return (order === Order.Desc) ? current > minMax : current < minMax;
  }

  records.forEach( ( record: Map<string, number>) => {
    let currentValue = record.get(key);
    currentValue = currentValue === undefined ? 0 : currentValue;
    if (!answer) {
      answer = record;
      minMaxValue = currentValue;
    } else {
      if (compareBy(currentValue, minMaxValue)) {
        answer = record;
        minMaxValue = currentValue;
      }
    }    
  })

  if (!answer) {
    answer = new Map<string, number>();
  }
  return answer;  
}


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


function minByKey(key: string, records: Map<string, number>[]): Map<string, number> | undefined {
  // TODO Check input to see if valid or not
  let answer: Map<string, number> | undefined;
  console.log('Key is ', key);
  console.log('records is ', records);
  let min: number;
  records.forEach( ( record: Map<string, number>) => {
    let currentValue = record.get(key);        
    if (currentValue) {
      if (!answer) {
        console.log('No answer so set to', record);
        answer = record;
        min = currentValue;
      } else {
        if (currentValue < min ) {
          console.log('currentValue is less than min so set ', record);          
          answer = record;
          min = currentValue;
        }
      }
    }
  })
  return answer;
}

let records: Map<string, number>[] = new Array( new Map( [['a', 2], ['b,', 2]] ), new Map([['a', 2]]) );

let answer = minByKey('a', records);
console.log('Answer is ', answer);

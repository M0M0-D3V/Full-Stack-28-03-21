# :tada: WELCOME TO WEEK 12 DAY 2! :tada:

---

## :school_satchel: LINQ - ~10am

---

### LINQ (Language Integrated Query)

- allows us to query `IEnummerable` types in the same ways you can query a db
- allows us to query a db with entity framework and get model class instances as the result
- many LINQ expressions return `IEnummerable` so that you can chain more LINQ expressions onto the returned collection
  - can use `.ToList()` or `.ToArray()` at end of LINQ expression

---

### Lambda (fat arrow, anonymous function)

---

#### Lamda Predicate

- In grammar, a predicate is one of the main two parts of a sentence, modifying the subject.
- `.Where('lambda predicate')`
  - `.Where(person => person.Name == "Monica")`
  - `.Where(p => p.Name == "Monica")` is the same as above
  - left side of lambda predicate is defining a temporary variable (parameter), like the one used in `foreach`
  - you can think of `.Where` as a `foreach` that uses the provided boolean expression to determine what items to include in the returned collection

---

#### Lamda Selector

- `people.Min(person => person.Age)`
- `.OrderBy('lamda selector')`
- `.Min()` `.Min('lamda selector')`

---

#### Etc

- `.Where(person => person.Name.Contains("Will")).OrderBy(p => p.Age)`
- `.First()` will give a runtime error if nothing is found
- `.FirstOrDefault()` returns `null` or default for the type: `0` for `int`

---

## Examples

- `using System.Linq;`

---

## Check in + Continue - 3pm

### - Bring questions for Q & A

### - More LINQ Stuff

---

#### `gentle reminders...`

- 20 minute rule! - set a timer if you have to
- ask questions if you're not sure, chances are, your question will help another classmate
- schedule a :one: on :one: with me on calendly before the exam, let's get you prepared! :muscle:

---

### END OF DAY GOAL: :sparkler: SPORTS ORM :sparkler:

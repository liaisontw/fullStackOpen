### [Part 2: Communicating with server](../../tree/main/part2)

- a: Rendering a collection, modules
- [courseinfo](../../../tree/main/part2/courseinfo)
- 2.1  : Course information step6

Define a component responsible for formatting a single course called Course. 

>const App = () => {
>
>...
>
>  return ( courses.map((course) => <Course course={course} /> ))}

- 2.2  : Course information step7

Show also the sum of the exercises of the course. 

- 2.3* : Course information step8

Calculate the sum of exercises with the array method reduce.

>const Total = ( { parts } ) => {
>
>  const total = parts.reduce( ( accum, current ) => {
>
>     return accum + current.exercises
>
>   }, 0 )
 
- 2.4  : Course information step9

To allow for an arbitrary number of courses:

>const App = () => {
>
>...
>
>  return ( courses.map((course) => <Course course={course} /> ))}

- 2.5  : separate module

Declare the Course component as a separate module, which is imported by the App component.

- b: Forms
- [Phonebook](../../../tree/main/part2/phonebook)
- 2.6  : The Phonebook Step1

Implement the addition of a person (name only) to phonebook.
![test](./fsoPart2Form.png)

- 2.7  : The Phonebook Step2

Issue a warning with the alert command when such an action is attempted:
![test](./10e.png)

- 2.8  : The Phonebook Step3

Expand your application by allowing users to add phone numbers to the phone book. You will need to add a second input element to the form:
![test](./11e.png)

- 2.9* : The Phonebook Step4

Implement a search field that can be used to filter the list of people by name:
![test](./12e.png)

- 2.10 : The Phonebook Step5

Refactor the application by extracting suitable parts into new components.
![test](./fsoPart2Form_1.png)

- c: Getting data from server
- [Phonebook](../../../tree/main/part2/phonebook)
- 2.11 : The Phonebook Step6
- [countries](../../../tree/main/part2/countries)
- 2.12*: Data for countries, step1
- 2.13*: Data for countries, step2
- 2.14*: Data for countries, step3

- d: Altering data in server
- [Phonebook](../../../tree/main/part2/phonebook)
- 2.15 : Phonebook step7
- 2.16 : Phonebook step8
- 2.17 : Phonebook step9
- 2.18*: Phonebook step10

- e: Adding styles to React app
- [Phonebook](../../../tree/main/part2/phonebook)
- 2.19 : Phonebook step11
- 2.20*: Phonebook step12


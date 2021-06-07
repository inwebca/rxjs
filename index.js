import { of, from } from "rxjs";
import { tap, filter, map, distinct } from "rxjs/operators";

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */

const voyels = ["A", "e", "i", "o", "u"];
const test = "hello my name is";
const testNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const obsTest$ = from(test.split(""));
const obsTestNumber$ = from(testNumber);

//filter array
obsTest$.
pipe(
    filter(x => voyels.includes(x))).
subscribe(value => {
    console.log(value)
});

//modulo
obsTestNumber$.
    pipe(
        filter( x => x > 1),
        filter(x => 3 % x == 0 || 5 % x == 0)
        ).
subscribe((value) => {
        console.log(value);
});

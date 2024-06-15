"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Write a function fetchData that returns a Promise which resolves with the string
"Data fetched successfully!" after a delay of 1 second.*/
function fetchData() {
    Promise;
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data fetched succcessfully!");
        }, 1000);
    });
}
fetchData().then(function (result) {
    console.log(result);
});

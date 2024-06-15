import { resolve } from "path"

/*Write a function fetchData that returns a Promise which resolves with the string
"Data fetched successfully!" after a delay of 1 second.*/
function fetchData (){
  Promise <string>
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Data fetched succcessfully!")

        }, 1000);
    });
   
}
fetchData().then((result)=>{
    console.log(result);
})
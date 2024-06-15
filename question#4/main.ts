/*Write a function fetchWithError that returns a Promise. It should randomly either
resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
delay of 1 second. Handle the rejection using .catch*/

import { resolve } from "path"
async function fetchWithError(): Promise<string>{
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            if (Math.random() < 0.5){
                resolve("Data Fetched Successfully!");
            }else{
                reject("Data fetch failed");
            }
            
        }, 1000);
    });
}
fetchWithError().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});


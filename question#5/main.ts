/*Question # 5
Write a function executeSequentially that executes two functions fetchData and
processData sequentially using Promises, and logs the results in the order they are
called.*/


let fetchData = new Promise ((resolve  ,reject)=>{
    resolve( "Data fetched!");
})
let processData = new Promise ((resolve , reject)=>{
    resolve ("Processed Data");
})
async function executeSequentially(){
    let fetch = await fetchData;
    let process = await processData;
    console.log(fetch);
    console.log(processData);

};
executeSequentially();
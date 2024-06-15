/*Write a simple asynchronous TypeScript function fetchGreeting that returns a
greeting message after a 2-second delay using setTimeout.*/

async function fetchingGreeting (): Promise<string>{           //    // The Promise<string> type ensures that the resolved value will be a string.
    return new Promise(( resolve)=>{
        setTimeout(() => {
            resolve ("Hello Everyone!!");
            
        }, 2000);
    });
       
    };
    fetchingGreeting().then((result)=>{
        console.log(result);
    }).catch((error)=>{            // if there will be any error it will handle it during delay
        console.log(error);
    })


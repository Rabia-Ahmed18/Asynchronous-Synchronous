/*Write a function simulateTask that simulates a task by logging "Task started",
waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.*/
function simulateTask() {
    console.log("Task started");
}
setTimeout(function () {
    console.log("Task completed");
}, 1000);
simulateTask();

function synchronousTask() {
    console.log('Synchronous Task 1<br/>');
    console.log('Synchronous Task 2<br/>');
    console.log('Synchronous Task 3<br/>');
}

function asynchronousTask() {
    console.log('Asynchronous Task 1<br/>');
    setTimeout(() => console.log('Asynchronous Task 2<br/>'), 500);
    setInterval(() => console.log('Asynchronous Task 3<br/>'), 1000);
}
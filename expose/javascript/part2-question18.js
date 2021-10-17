var intervalID = setInterval(myCallBack, 1000);

function myCallBack() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}
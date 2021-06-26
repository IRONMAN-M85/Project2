// let a;
// let date;
// let time;

// setInterval(() => {
//     a = new Date();
//   date = a.toLocaleDateString();
//     time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
//     document.getElementById('add').innerHTML = time + " <BR> " + date;
// }, 1000);


let samay ;
let time ;
setInterval(() => {
    
    samay = new Date ();
    
    time = samay.getHours() + ':' + samay.getMinutes() + ':' + samay.getSeconds();
    
    document.getElementById('add').innerHTML = time ;
}, 0.00000);


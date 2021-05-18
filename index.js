// Code your solutions in this file

// const nameList = [];

// function writeCards(nameList, birthday) {
//     const thankYouList = [];
//     for (let i=0; i<nameList.length; i+=1) {
//         thankYouList[i] = (`Thank you, ${nameList[i]}, for the wonderful surprise gift!`); 
//     }
//     return thankYouList;
// }

// let n; 

// function countDown(n) {
//     while (n>=0) {
//         console.log(n);
//         n = n-1;
//     }
//     return n;
// }



function  writeCards(array, event) {
    const thankYouList = [];
    for (let i=0; i<array.length; i++) {
        thankYouList[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    }
    return thankYouList;
}

function countDown(i) {
    while ( i >= 0 ) {
        console.log(i);
        i -=1;
    }
}
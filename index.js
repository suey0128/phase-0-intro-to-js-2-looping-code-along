// Code your solutions in this file

const nameList = [];

function writeCards(nameList, birthday) {
    const thankYouList = [];
    for (let i=0; i<nameList.length; i+=1) {
        thankYouList[i] = (`Thank you, ${nameList[i]}, for the wonderful surprise gift!`); 
    }
    return thankYouList;
}

let n; 

function countDown(n) {
    while (n>=0) {
        console.log(n);
        n = n-1;
    }
    return n;
}


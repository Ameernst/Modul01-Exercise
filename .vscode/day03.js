let limit = 15;

for (let i = 1; i <= limit; i++) {
if (i % 3 == 0 && i % 5 == 0) {
    console.log("BuzzBizz ==>", i)
} else if (i % 5 == 0) {
     console.log("Buzz ==>", i); 
} else if (i % 3 == 0)  {      
     console.log("Bizz ==>", i); 
}
}
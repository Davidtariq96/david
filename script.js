var person = {name : "David Tariq",
    myCourse : ["html", "css", "javascript",]

}
console.log(person);
if(person.myCourse.length % 2 ===0){
    console.log("even detected");
    for(number = 0; number<= 200; number++){
        if(number % 2 ==0){
            console.log(number);
        }
    }
} 
   
    else{
        console.log("odd detected");
        for(number = 0; number<= 200; number++){
            if(number % 2 ==1){
                console.log(number);
            }
        }
    }
   

 
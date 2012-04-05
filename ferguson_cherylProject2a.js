//Cheryl Ferguson
//SDI Project 2 Term 1204
//


//Procedure
var firstDay = function(days){
    console.log("It\'s almost time for the first day of the semester!");
        console.log("Time to get mentally prepared.");
        if(days < 14 && days >=7){
            console.log("I have two weeks of fun time before the first day of the semester.");
        }else{
            console.log("Time to begin the semester.");
        }
    };

firstDay(6);

//Boolean
var schoolStatus = function(appliedSchools, idealSchools){
    var myFuture;
    if(appliedSchools == 7 && idealSchools === true){
            console.log("I was accepted to" + " "+ idealSchools + "my ideal schools.");
        }else{
            console.log("I was not accepted to my ideal school.");
        }
    myFuture = ("I have applied to" +" " + appliedSchools+ ".");
    return myFuture;
};
var mySchoolStatus = schoolStatus(3, false);
console.log(mySchoolStatus);


//Number
var schools = function(accepted){
var desiredNumber;
var numberApplied = 3;
        while(numberApplied <= accepted){
            console.log(numberApplied);
            numberApplied++;
        }
    desiredNumber= "I need"+" " + accepted +" "+"acceptance letters.";
    console.log("I need to apply to atleast 7 schools.");
    return desiredNumber;
      
};
var lettersNeeded = schools(7);
console.log(lettersNeeded);



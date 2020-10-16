//***********************************
//Testing my script if it is linked
//***********************************

console.log('js');

$(document).ready(function(){

  $('#result').hide();
  $('#everythingElse').show();

  // Definition of function with dummy arguments
function calculateAccomodationCost(accomodation, meal){
  var myTotal = accomodation + meal;
  var withGST = myTotal+ (12 /100*myTotal);
  return (withGST); //to return the value to the place where this function was called
}
// $('#calculate').click(function() {
// //calling the Functions with dummy arguments
//
// var stay = parseInt($('#accomodation').val());
// var food = parseInt($('#meal').val());
// console.log(stay, food);
//
// var totalCost = calculateAccomodationCost (stay, food); //real arguments
// console.log('$', totalCost);
//
// });




// ind the total, average and grade of student

$('#grade').click(function(){

      //declaring marks array and also empties wheneve button is clicked
  var marks = [];

// receiving input from the html form and storing in js variables
  var module1 = parseInt($('#module1').val());
  var module2 = parseInt($('#module2').val());
  var module3 = parseInt($('#module3').val());
  var module4 = parseInt($('#module4').val());

  // validation to check if the marks entered by the user is within 0-100
  if ((module1 >= 0)  && (module1 <=100)) {
    marks.push(module1); //adds to the marks array
  } else {
    $('#module1').val(''); // clears the input box
  }

  if ((module2 >= 0)  && (module2 <=100)) {
    marks.push(module2); //adds to the marks array
  } else {
    $('#module2').val(''); // clears the input box
  }

  if ((module3 >= 0)  && (module3 <=100)) {
    marks.push(module3); //adds to the marks array
  } else {
    $('#module3').val(''); // clears the input box
  }

  if ((module4 >= 0)  && (module4 <=100)) {
    marks.push(module4); //adds to the marks array
  } else {
    $('#module4').val(''); // clears the input box
  }

// if not all marks are in the array, notifies the user
  if (marks.length < 4){
    alert ('Please enter marks between 0 and 100');
  } else {
    console.log(marks);
    $('#result').show(); // result container is hidden otherwise
    $('#everythingElse').hide();
  // finding total marks using function
  var totalMarks = totalMarksCalculation(module1, module2, module3, module4);
  console.log('total = ' + totalMarks);

  //finding average of marks using function
  var averageMarks = averageMarksCalculation(totalMarks);
  console.log('average = ' + averageMarks);

  //finding grade based on the criteria using Function
  var grade = findGrade(averageMarks);
  console.log('Grade =' + grade);

  //finding the highest mark among the modules
  var highestMark = findHighest(marks);
  console.log('highestMark = ' + highestMark);

    // displaying results in the result container (modal)
    $('#result').append('Total = ' + totalMarks + '<br>');
    $('#result').append('Average = ' + averageMarks + '<br');
    $('#result').append('Highest Mark = ' + highestMark[0] + '<br');
    $('#result').append('Highest in Module' + highestMark[1] + '<br>');
    $('#result').append('Grade = ' + grade + '<br>');

}; //end of else

}); //end of grade function

$('#closeBtn').click(function(){
  $('#result').hide();
  $('#everythingElse').show();
});
}); //end of document.ready

// function definition to add up all the marks
function totalMarksCalculation(mark1, mark2, mark3, mark4){
  return (mark1 + mark2 + mark3 + mark4);

}
// function definition to find the average of marks
function averageMarksCalculation(total){
  return (total / 4);
}
//function definition to find the Grade
function findGrade(avg){
  if (avg < 50) {
    return ('failed');
  } else if (avg < 80) {
    return ('passed');
  } else {
    return ('passed with distinction');
  }
}
//function definition to find the highest
function findHighest(scores){
  var high = 0; //assumption
  var i = 0;
  var moduleNumber = 0;
  var highResult = [];
  for (i = 0; i < scores.length; i++){
    console.log(scores[i]);
    if (scores[i] >= high) {
      high = scores[i];
      moduleNumber = i ;

    }
  }
  console.log(high, moduleNumber+1);
  highResult.push(high);
  highResult.push(moduleNumber+1);
  console.log(highResult);
  return (highResult);
}
  }


//1.feedback to users if mark is not in the range
//2. what if highest mark is in more than 1 module?
//3. Without refresh if continued, the module number adds up to the previous
//4. take care of marks array when refreshed

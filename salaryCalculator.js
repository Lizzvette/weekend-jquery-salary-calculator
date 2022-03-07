console.log('JS');
/*$(onReady).click(function)*/
/*$(onReady);   //    Check which is best for future use of JQuery - above or below "on Ready JQ"
function onReady (){
}*/

//To DO: variable for my form(s) / tables of data of employees IN INDEX
// get input values put in html then JS 
//storing on click 
//take html input to add to DOM

//id is #
//class is .

//NEXT STEPS:
// 1.) click EVENT listener  submit/delete function readyNow ()
// 2.) grab index.html employee data so function add employees ()
// append employees and append delete button give an id 

$(document).ready(onReady);

let calculateMthlyCost = []; // you push into this later the objects // 

function onReady() {
  console.log ('on ready') ;
// Hmmm my console log is ugly... 

//1.)
// A.) turn on submit button to calculate monthly cost (so all EE monthly salaries correct?)
// Hey JQuery get employeeForm (Event Listener)
$('#employeeForm').on('submit', onAddEmployee); // create a function to listen to this event
$('#employeeForm').on('submit', totalcalculateMthlyCost); // again create another function
// turn on delete button  - then make function of that name. 

// STEP: GO to index to NEED delete button table....for EAch employee

$(document).on(click, 'DeleteBtn', onDeleteEmployee); // function create onDeleteEmployee
}// end function onReady  THIS IS INCOMPLETE !!!!!!! USE 

//2.) QUESTION B.) : my HTML form id or use div container in "Hey JQuery Above" class so my parameter .container? or each input id with commas?

// loop thru
function totalcalculateMthlyCost (){
console.log ('totalcalculationMthlyCost');
let sum = 0;
for (let i= 0; i< calculateMthlyCost.length; i++){
  sum += calculateMthlyCost[i].annualSalary
}

// Hey JQuery grab this

function onAddEmployee (   ) {
// myEmployees
  console.log ('add employee');
// target your employees data here via their ids set get val information - RENDER FORM VALUE TO DOM...ASK..DO I REALLY UNDERSTAND -is it getting late - am I confused
let firstName = $(`#firstNameInput`).val();
let lastName = $(`#lastNameInput`).val();
let id = $(`#idInput`).val();
let annualSalary = Number($(`#annualSalaryInput`).val());
  // conditional if/else for "If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost."
}


// function totalcalculateMthlyCost(){ // loop thru to find - JUST create it NOW! You know your total 
//   let sum = 0;
//   for (let i = 0;i < calculateMthlyCost; i++)
// }
console.log('add employee');

function onDeleteEmployee ( ) {

  // Read instruction....remove on click
  // I want to remove within the table the EEs (table form id "employeesForm BUT just need my onDeleteEmployee and grab calculateMthlyCost")
}
// render/get index.html to DOM


//create my employees objects  // DISCUSS AT NEXT STUDY GROUP WHEN/WHERE FLOWS...FOR 
let myEmployees = {
  firstName: firstName,
  lastName: lastName,
  id: id,
  title: title,
  annualSalary: annualSalary
}// end employee object

// the object has to be pushed  BUT I need ... JUST PUSH 
calculateMthlyCost.push(myEmployees );
console.log ( );

// empty tbody, then render to the DOM loop
for ( let calculate  of totalcalculateMthlyCost   ){
$('#employeeForm').append ( 
  `#`
)
}
// RETURN and TEST !!!!!!!



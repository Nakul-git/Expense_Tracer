var currBudget = 0;
var currSpend = 0;
function getdata() {
  var budg = Number(document.getElementById("1").value);
  currBudget += budg;
  setBudget();
}
function setBudget() {
  var budget = document.getElementById("expenses");
  budget.textContent = "Your Budget is : " + currBudget + "₹";
}
var FieldCounter = 0;
function addInputField() {
  var addList = document.getElementById("addList");
  var InputField = document.createElement("input");
  InputField.type = "text";
  InputField.placeholder = "Title for " + (FieldCounter + 1) + " Item";
  InputField.id = "InputField" + (FieldCounter + 1);
  var NumberField = document.createElement("input");
  NumberField.type = "number";
  NumberField.placeholder = "Amount for " + (FieldCounter + 1) + " Item";
  NumberField.id = "NumberField" + (FieldCounter + 1);
  FieldCounter++;
  addList.append(InputField);
  addList.append(NumberField);
  var submitBtn = document.getElementById("submitbtn");
  submitBtn.style.display = "block";
}

function calcBudget() {
  var TotalAmount = 0;
  for (var i = 1; i <= FieldCounter; i++) {
    var Title = document.getElementById("InputField" + i);
    var Budget = document.getElementById("NumberField" + i);
    var BudgetValue = Number(Budget.value);
    TotalAmount += BudgetValue;
    currSpend += BudgetValue;
    FinalAdd(Title.value,BudgetValue);
    Title.remove();
    Budget.remove();
  }
  var submitBtn = document.getElementById("submitbtn");
  submitBtn.style.display = "none";
  currBudget = currBudget - TotalAmount;
  setBudget();
  UpdateSpend();
  FieldCounter = 0;
}

function FinalAdd(title,price){
  var table = document.getElementById("FinalTable");
  var newRow = document.createElement('tr');
  var newTitle = document.createElement('td');
  var newPrice = document.createElement('td');
  newTitle.textContent = title;
  newPrice.textContent = price;
  newRow.append(newTitle);
  newRow.append(newPrice);
  table.append(newRow);

}

function UpdateSpend(){
  var spend = document.getElementById("TotalSpend");
  spend.textContent = "Your Total Spended Amount is "+": "+currSpend+"₹";
}


let reset = document.querySelector('.reset');
let calculate = document.querySelector('.calculate');



function calculateAll () {
// Get input values
let amount = parseFloat(document.querySelector('.amount').value);
let plusPeople = parseFloat(document.querySelector('.multiplyPeople').value);


const tipPercentage = getTipPercentage();

// Calculate tip amount
const tipAmount = amount * (tipPercentage / 100);

// Calculate amount per person

const perPerson = amount + tipAmount

// Calculate total amount
const totalAmount = plusPeople * (amount + tipAmount) ;

document.querySelector('#amountPerson').textContent = perPerson
document.querySelector('#totalPerson').textContent = totalAmount
} 

// Function to get tip percentage
function getTipPercentage() {
    // Get selected tip percentage
    let tipButton = document.querySelector('.tipBtn.selected');
    if (tipButton) {
        return parseFloat(tipButton.textContent);
      }
      // Get custom tip percentage
      const customTipPercentage = parseFloat(document.querySelector('.Custom').value);
      if (!isNaN(customTipPercentage)) {
        return customTipPercentage;
      }
      // Default to 0% if no percentage is selected
      return 0;
}

  // Attach event listeners to tip buttons
  const tipButtons = document.querySelectorAll('.tipBtn');
  for (let i = 0; i < tipButtons.length; i++) {
    tipButtons[i].addEventListener("click", function() {
      // Deselect all buttons
      for (let j = 0; j < tipButtons.length; j++) {
        tipButtons[j].classList.remove("selected");
      }
      // Select clicked button
      this.classList.add("selected");

    //   Clear custom tip percentage input
      document.getElementById("custom").value = "";
    });
  }
calculate.addEventListener('click', calculateAll)



// Reset selected input
function resetBtn(){
    document.querySelector('#amountPerson').textContent = '$0.00';
    document.querySelector('#totalPerson').textContent = '$0.00';
    document.querySelector('.amount').value = '';
    document.querySelector('.multiplyPeople').value = '';
    document.querySelector('.custom').value = '';
    tipButtons.classList.remove("selected")
}
reset.addEventListener('click', resetBtn)



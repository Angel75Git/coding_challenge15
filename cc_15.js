//Task 1
//Selecting container 
const riskContainer = document.getElementById("riskDashboard");
 console.log("Risk Dashboard Loaded");

 //Task 2
 function addRiskItem(riskName, riskLevel, department) {
    const itemCard = document.createElement("div");
    itemCard.classList.add("risk-card");

//Getting the name of the risk on the card
    const itemName = document.createElement("h3");
    itemName.textContent = riskName;

//Getting the level of the risk on the card
const itemLevel = document.createElement("span");
itemLevel.textContent = `Risk Level: ${riskLevel}`;

//Getting the department of the risk on the card
    const itemDepart = document.createElement("p");
    itemDepart.textContent = department;


   //Adopting the childs to item card
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemLevel);
    itemCard.appendChild(itemDepart);


    riskContainer.appendChild(itemCard);
}

//Test Cases: 
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
//addRiskItem("Server Down", "High", "IT");
//addRiskItem("Someone spilled Coffee", "High", "Main Lounge");
 
document.getElementById("submit-btn").addEventListener("click", function(event){
//Getting all the input ids from the HTML Form
    const inputName = document.getElementById("inputName");
    const inputLvl = document.getElementById("inputLvl");
    const inputDep = document.getElementById("inputDep");

   //Calling the function to add new inputs
    addRiskItem(inputName.value, inputLvl.value, inputDep.value);
//clearing the form for additional inputs
    inputName.value = "";
    inputLvl.value = "";
    inputDep.value = ";"
    
    

})


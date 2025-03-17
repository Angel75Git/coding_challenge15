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

    //Modification - Task 3
    const removebtn = document.createElement("button")
    removebtn.textContent = "Resolve"
    removebtn.addEventListener("click", function(){
        riskContainer.removeChild(itemCard)
    })

    //Modification -Task 4
    //Creating a distintion of levels
    if (riskLevel.toLowerCase() === "high")
        itemCard.classList.add("high-level")
    if (riskLevel.toLowerCase() === "medium")
        itemCard.classList.add("medium-level")
    if (riskLevel.toLowerCase() === "low")
        itemCard.classList.add("low-level")


   //Adopting the childs to item card
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemLevel);
    itemCard.appendChild(itemDepart);
    itemCard.appendChild(removebtn)

    

    riskContainer.appendChild(itemCard);
}

//Test Cases: 
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance");
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
    inputDep.value = "";   
})
//Test cases for task 4
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

//Getting all cards using node arrays
document.getElementById("increase-btn").addEventListener("click", function (event) {

    const riskCards = riskContainer.getElementsByClassName("risk-card");
    allCards = Array.from(riskCards);
    allCards.forEach(card => {
        const currentRiskLevel = card.querySelector("span").textContent.split(": ")[1].toLowerCase(); 
        // Get the span that displays the risk level
        const itemLevelElement = card.querySelector("span"); 

        if (currentRiskLevel === "low") {
            // Change Low to Medium
            itemLevelElement.textContent = "Risk Level: Medium";
            card.classList.remove("low-level");
            card.classList.add("medium-level");
        } else if (currentRiskLevel === "medium") {
            // Change Medium to High
            itemLevelElement.textContent = "Risk Level: High";
            card.classList.remove("medium-level");
            card.classList.add("high-level");
            //Leaving high becuase there is not more higher level
        }
    })
});
addRiskItem("Employee Retention", "Low", "HR");
// Clicking "Increase Risk Levels" should change it to "Medium".
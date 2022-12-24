let dropdown = document.getElementById("dropdown");
let result = document.getElementById("result");
let filterbtn = document.getElementById("filterBtn");
let arr = [
    { id: 1, name: "Srihari", age: "23", profession: "admin" },

    { id: 2, name: "Mohan", age: "23", profession: "admin" },

    { id: 3, name: "Anil", age: "24", profession: "developer" }
    
]
function filterbyprofession() {
    result.innerHTML = "";
    let dropdownValue = dropdown.value;



    if (dropdownValue == "profession") {
        alert("Select a profession before clicking the button.");
        return;
    }
        arr.forEach((item) => {
        if (item.profession === dropdownValue) {
            let divElement = document.createElement("div");

                  divElement.style.width="40%";
                  divElement.style.padding="9px";
                  divElement.style.borderStyle = "solid";
                  divElement.style.margin ="18px 12px";
                  divElement.style.borderRadius ="5px";
                  divElement.style.display ="flex";
                 

            
            
            divElement.innerText = item.id + ". Name: " + item.name + " Profession: " + item.profession + " Age: " + item.age;
            result.append(divElement);
        }
    })

  console.log(arr);
}

filterbtn.addEventListener("click", filterbyprofession);

let addName = document.getElementById("name");
let addProfession = document.getElementById("profession");
let addAge = document.getElementById("age");

let aadBtn = document.getElementById("adduser");


function addUser() {
    let kname = addName.value;
    let age = addAge.value;
    let prof = addProfession.value;

    let x = arr.length;
    ++x;

    let crr = { id: x, name: `${kname}`, age: `${age}`, profession: `${prof}` }
    if(kname !== "" && age !== "" && prof !== ""){
        arr.push(crr);
    }
    else{
        alert("fill complete detail.")
    }

    console.log(arr);

    addName.value = "";
    addAge.value = "";
    addProfession.value = "";

}

aadBtn.addEventListener("click", addUser);

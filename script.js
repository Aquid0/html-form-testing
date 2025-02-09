const form = document.querySelector("#data-form");
const tableCells = document.querySelectorAll(".data-table tr:nth-child(2) td");

form.addEventListener("submit", (event) => { 
    event.preventDefault();

    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let country = document.getElementById("country").value;

    tableCells[0].textContent = firstName;
    tableCells[1].textContent = lastName;
    tableCells[2].textContent = country;

    form.reset();
});
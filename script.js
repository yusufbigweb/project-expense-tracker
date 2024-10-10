const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

expenseForm.addEventListener('submit', function(event){

    event.preventDefault();
    
    const description = document.getElementById("description").value;
    const catgory = document.getElementById("catgory").value;
    const amount = document.getElementById("amount").value;

    if(document && catgory && !isNaN(amount)){
        const newRow = document.createElement("tr");

        newRow.innerHTML = `<td>${description}</td> <td>${catgory}</td> <td>${amount}</td>`;

        expenseList.appendChild(newRow);

        document.getElementById("description").value="";
        document.getElementById("catgory").value="";
        document.getElementById("amount").value="";
    }

})
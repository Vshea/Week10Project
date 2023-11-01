const form = document.querySelector('form');

const tbody = document.querySelector('tbody');

const tableElement = document.querySelector('table');

function onAddPlayer(e){
    e.preventDefault();
    const name = document.getElementById('formName').value;
    const username = document.getElementById('formUsername').value;
    const color = document.getElementById('favoriteColor').value;
    tbody.innerHTML += `
    <tr>
        <td>${name}</td>
        <td>${username}</td>
        <td>${color}</td>
        <td><button class="deleteBtn">Delete</button></td>
    </tr>
    `;
}

 function onDeleteRow(e) {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }
    const btn = e.target;
    btn.closest('tr').remove();
 }

form.addEventListener('submit', onAddPlayer);
tableElement.addEventListener('click', onDeleteRow)

// class Player {
//     constructor (name, username, color) {
//         this.name = name;
//         this.username = username;
//         this.color = color;
//     }
    
//     addPlayer(player) {
//         this.players.push(player);
//     }
//     deletePlayer(player) {
//         let index = this.players.indexOfMember;
//         this.players.splice(index, 1)
//     }
// }


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

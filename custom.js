
// =====  Table Form  ====


//  ==> Get Data using XMLHttpRequest

const userList = document.getElementById('userList');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(userdata1 => {
        userdata1.forEach(user => {
            addUserToTable(user);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

function addUserToTable(user) {
    const userRow = document.createElement('tr');
    userRow.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
    `;
    userList.appendChild(userRow);
}
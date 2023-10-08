const form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const dish = document.getElementById('dish').value;
    const table = document.getElementById('table').value;

    // Post
    axios.post('https://crudcrud.com/api/3d6992f76704440b9c26ada1fe4dbf55/orders', {
        amount, dish, table
    })
        .then(res => {
            console.log(res)
            window.location.reload();
        })
        .catch(err => console.log(err));


});

// Delete order
const deleteOrder = (id) => {
    axios.delete(`https://crudcrud.com/api/3d6992f76704440b9c26ada1fe4dbf55/orders/${id}`)
        .then(res => {
            console.log("delete", res)
            window.location.reload();
        })
        .catch(err => console.log('delete', err));
    window.reload()
}



// Show order
const showData = (res) => {
    const data = res.data;
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';

    data.forEach((order, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `Amount -> ${order.amount} - Orderd Dish -> ${order.dish} - Table.No ->${order.table}
                           <button onclick="deleteOrder('${order._id}')">Delete</button>`;

        orderList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    axios.get('https://crudcrud.com/api/3d6992f76704440b9c26ada1fe4dbf55/orders')
        .then((res) => showData(res))
        .catch(err => console.log(err));
});




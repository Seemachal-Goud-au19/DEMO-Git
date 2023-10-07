const form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    
    //Post
    axios.post('https://crudcrud.com/api/0088f909759e4857a0b41f8b73839265/appointment', {
        name, email, mobile
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))


});

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

//delete user

const deleteUser = (id)=>{
axios.delete(`https://crudcrud.com/api/0088f909759e4857a0b41f8b73839265/appointment/${id}`)
.then(res=>log("delete",res))
.catch(err=>console.log('delete',err))
}

const updateUser = (id)=>{
    const updateData={
        name:'lama',
        email:'lama@gmail.com',
        mobile:"987987w4987"
    }
    axios.delete(`https://crudcrud.com/api/0088f909759e4857a0b41f8b73839265/appointment/${id}`,updateData)
    .then(res=>log("update",res))
    .catch(err=>console.log('update',err))
    }

//show user
const showData =(res)=>{
const data = res.data
const userList = document.getElementById('userList');
userList.innerHTML = '';
console.log("data",data);
data.forEach((user, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${user.name} - ${user.email} - ${user.mobile}
                          <button onclick="updateUser(${user._id})">Update</button>
                         <button onclick="deleteUser(${user._id})">Delete</button>`
                        
    userList.appendChild(listItem);
})
}

document.addEventListener('DOMContentLoaded', function() {
   axios.get('https://crudcrud.com/api/0088f909759e4857a0b41f8b73839265/appointment')
   .then((res)=>showData(res))
   .catch(err=>console.log(err))
  });


  

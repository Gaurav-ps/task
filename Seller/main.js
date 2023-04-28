window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/9949a257e75c44c2ad40fe3baecc1bd2/products')
    .then((response) => {
        for(var i=0; i<response.data.length; i++)
        {
            showOnScreen(response.data[i]);
        }
    })
    .catch((err) => {
        console.log(err);
    })
})

function onSubmission(event){
    event.preventDefault();
    let obj = {
        Amount: event.target.expenses.value,

        Description: event.target.details.value
    } 
    const cost = document.getElementById('write');
    
    axios.post('https://crudcrud.com/api/9949a257e75c44c2ad40fe3baecc1bd2/products',obj)
    .then((response) => {
        showOnScreen(response.data);
        var value = parseInt(response.data.Amount);
        cost.innerHTML += value;
    })
    .catch((err) => {
        console.log(err);
    })
    ; 

    
}
function showOnScreen(obj)
{
    const parent = document.getElementById('items');
    const child = document.createElement('li');
    child.textContent = obj.Amount+'-'+obj.Description;

    const delButton = document.createElement('input');
    delButton.type = 'button';
    delButton.value = 'Delete';
    delButton.onclick = () =>{
        axios.delete(`https://crudcrud.com/api/9949a257e75c44c2ad40fe3baecc1bd2/products/${obj._id}`)
        .then((resposne) => {
            parent.removeChild(child);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    parent.appendChild(child);
    child.appendChild(delButton);
}
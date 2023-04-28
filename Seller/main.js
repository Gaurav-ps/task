window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/1ae3ccb2d6e549ea954b3cba4e1554ee/products')
    .then((response) => {
        for(var i=0; i<response.data.length; i++)
        {
            showOnScreen(response.data[i]);
            const cost = document.getElementById('write');
            var num = document.getElementById('write').innerHTML;
            cost.innerHTML = parseInt(num) + parseInt(response.data[i].Amount);
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
    //localStorage.setItem(obj.Description,JSON.stringify(obj));
    const cost = document.getElementById('write');
    var num = document.getElementById('write').innerHTML;
    cost.innerHTML = parseInt(num) + parseInt(obj.Amount);
    //console.log(document.getElementById('write').innerHTML) ;
    
    axios.post('https://crudcrud.com/api/1ae3ccb2d6e549ea954b3cba4e1554ee/products',obj)
    .then((response) => {
        showOnScreen(response.data);
    })
    .catch((err) => {
        console.log(err);
    })
    //showOnScreen(obj)

    
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
        axios.delete(`https://crudcrud.com/api/1ae3ccb2d6e549ea954b3cba4e1554ee/products/${obj._id}`)
        .then((resposne) => {
            parent.removeChild(child);
        })
        .catch((err) => {
            console.log(err);
        })
        const cost = document.getElementById('write');
        var num = document.getElementById('write').innerHTML;
        cost.innerHTML = parseInt(num) - parseInt(obj.Amount);
        //parent.removeChild(child);
        //localStorage.removeItem(obj.Description); 
    }
    parent.appendChild(child);
    child.appendChild(delButton);
}


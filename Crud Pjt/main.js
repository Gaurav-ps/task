function onsignup(event)
    {
        event.preventDefault();
        let obj = {
        Name : event.target.Username.value,

        Email : event.target.email.value
        }
        axios.post('https://crudcrud.com/api/d79b55e6874444e289dae8ec2f9773c2/appointmentdata',obj)
        .then((response) => {
            showOnScreen(response.data)
            //console.log(response);
        })
        .catch((error) => {
            document.body.innerHTML = document.body.innerHTML + "<h2>Error in Exwcution</h2>"
            console.log(error);
        })
        //localStorage.setItem(obj.Email, JSON.stringify(obj));
        //showOnScreen(obj);
    }
    function showOnScreen(obj)
    {
        const parent = document.getElementById('items');
        const child = document.createElement('li');
        child.textContent = obj.Name+'-'+obj.Email;

        const editButton = document.createElement('input');
        const delButton = document.createElement('input');
        delButton.type = 'button';
        delButton.value = 'Delete';
        delButton.onclick = () => {
            localStorage.removeItem(obj.Email);
            parent.removeChild(child);
        }
        child.appendChild(delButton);
        parent.appendChild(child);

        editButton.type = 'button';
        editButton.value = 'Edit';
        editButton.onclick = () =>{
            localStorage.removeItem(obj.Email);
            parent.removeChild(child);
            document.getElementById('name').value = obj.Name;
            document.getElementById('mail').value = obj.Email;
        }
        child.appendChild(editButton);
        parent.appendChild(child);

    }
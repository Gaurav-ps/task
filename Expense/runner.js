function onsignup(event)
    {
        event.preventDefault();
        let obj = {
        Expenses : event.target.Amount.value,

        Description : event.target.Reason.value
        }
        localStorage.setItem(obj.Description, JSON.stringify(obj));
        showOnScreen(obj);
    }
    function showOnScreen(obj)
    {
        const parent = document.getElementById('items');
        const child = document.createElement('li');
        child.textContent = obj.Expenses+'-'+obj.Description;

        const editButton = document.createElement('input');
        const delButton = document.createElement('input');
        delButton.type = 'button';
        delButton.value = 'Delete';
        delButton.onclick = () => {
            localStorage.removeItem(obj.Description);
            parent.removeChild(child);
        }
        child.appendChild(delButton);
        parent.appendChild(child);

        editButton.type = 'button';
        editButton.value = 'Edit';
        editButton.onclick = () =>{
            localStorage.removeItem(obj.Description);
            parent.removeChild(child);
            document.getElementById('amount').value = obj.Expenses;
            document.getElementById('desc').value = obj.Description;
        }
        child.appendChild(editButton);
        parent.appendChild(child);

    }
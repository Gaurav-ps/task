var li = document.getElementsByTagName('li')
console.log(li);
console.log(li[2]);
//items[2].textContent = 'Hello'
li[2].style.backgroundColor = "green"
for(var i=0; i<li.length; i++)
{
    li[i].style.fontWeight = 'bold';
}
/*for(var i=0; i<items.length; i++)
{
    items[i].style.backgroundColor = 'green';
}
*/
//QUERYSELECTOR//
var item = document.querySelector('.list-group-item');
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
secondItem.style.backgroundColor = 'green';
thirdItem.style.backgroundColor = 'white';
thirdItem.style.color = 'white';
//li[1].style.backgroundColor = 'green';

//QUERYSELECTORALL//

var secondItem = document.querySelectorAll('.list-group-item');
//secondItem[1].style.color = 'green';
//console.log(secondItem);
secondItem[1].style.color = 'green';
var item = document.querySelectorAll('li:nth-child(odd)')
for(var i=0; i<item.length; i++)
{
    item[i].style.backgroundColor = 'green';
}
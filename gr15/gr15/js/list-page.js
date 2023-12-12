let thispage = 1;
let limit = 10; 
let list = document.querySelectorAll('.wrapper1 .item'); 

function loadItem(){
    let beginGet = limit * (thispage - 1);
    let endGet = limit * thispage - 1 ;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
    listpage();
}
loadItem();
function listpage()
{
    let count = Math.ceil(list.length / limit);
    document.querySelector('.list-page').innerHTML = '';
    for(i = 1 ; i <= count ; i++)
    {
        let newpage = document.createElement('li');
        newpage.innerText = i;
        if(i == thispage)
        {
            newpage.classList.add('active');
        }
        newpage.setAttribute('onclick', "changePage(" + i + ")")
        document.querySelector('.list-page').appendChild(newpage)
    }
}
function changePage(i)
{
    thispage = i;
    loadItem();
}
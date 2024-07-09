let shoppingItems =
JSON.parse(localstorage.getItem('shoppingItems')) || []

function renderItems() {
    const itemList =
document.getElementById('itemList');
  itemList.innerHTML = '';

  shoppingItems.forEach((item,index) =>{
    const li=
document.createElement('li');
        li.textContent =
item.name;

  if(item.purchased){li.classList.add('purchased');}


  li.addEventListener('click, ()=> {
          
          toggleitemPurchased(index);
                  });
                  
   li.addEventListener('dblclick',()=> {
             editItem(index);});
            

              itemList.appenChild(li);
  });

  updateLocalStorage();}

  function updateLocalStorage() {

  localStorage.setItem(' shoppingItems',
  JSON.stringify(shoppingItems));
  }

  function
  toggleItemPurchased(index) {
    shoppingItems[index].purchased= !
    shoppingItems[index].purchased;
      renderItems();

   function editItem(index) {
       const newName = prompt('Edit item:',
       shoppingItems[index].name);
          if (newName  !==null &&
          newName.trim() !=='') {
            shoppingItems[index] .name
         =newName.trim();
            renderItems();
          }
   }
  }

document.getElementById('addItemBtn').addEventListener('click, ()=>{
const itemInput =
document.getElementById('itemInput');
   const itemName =
   itemInput.value.trim();
   
   if(itemName !==''){
   shoppingItems.push({name:
   itemName, purchased:false});
   renderItems();
   itemInput.value ='';}}');

document.getElementById('clearListBtn').addEventListener('click',
()  => {
    shoppingItems = [];
    renderItems();
});

window.addEventListener('load',()=> {
     renderItems();
});
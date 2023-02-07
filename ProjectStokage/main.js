let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('submit');


//get total
function getTotal()
{
  if(price.value != '' ) {

    let result= (+price.value + +ads.value + +taxes.value)- +discount.value;
    total.innerHTML= result ;
    total.style.backgroundColor='#040';
  }
  else{
    total.innerHTML= '';
    total.style.backgroundColor= '#a00d02';
  }
}

//create product

let datapro;
if(localStorage.product != null){
  datapro=JSON.parse(localStorage.product);
}
else{
 datapro =[];
 } 
 submit.onclick=function(){
       
     let newpro ={
      title:title.value,
      price:price.value,
      taxes:taxes.value,
      ads:ads.value,
      discount:discount.value,
      total:total.innerHTML,
      count:count.value,
      category:category.value,
    
     }

     datapro.push(newpro);

     localStorage.setItem('product' , JSON.stringify(datapro));
     clearData();
    // showData();
     
 }

//showData();
//clear
  function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    total.innerHTML='';
    discount.value='';
    count.value='';
    category.value='';
  
  }


//read inputs
function showData(){
  let table ='';

  for(let i=0; i<datapro.length;i){
 table=
   `  <tr>
    <td>${i}</td>
    <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].total}</td>
    <td>${datapro[i].category}</td>
    <td><button id="update">update</button></td>
    <td><button id="delete">delete</button></td>

   </tr>
`

  }
  
  document.getElementById('tbody').innerHTML=table;
}

//clean data  
//search
//delete
//update 
//count 


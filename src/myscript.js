 var Prodobj = [];
function fetc(){
    var prodId = document.getElementById('proi').value;
    var prodName = document.getElementById('pron').value;
    var prodPrice = document.getElementById('prop').value;
    add(prodId,prodName,prodPrice);
}
function add(prodId,prodName,prodPrice){
   Prodobj.push({id:prodId,
                name:prodName,
                price:prodPrice}); 
   display();
}
function display(){    
     var size = Prodobj.length;
     var k ='<tbody>';
     for(let i=0;i<size;i++){
         k+='<tr>';
         k+='<td>'+Prodobj[i].id+'</td>';
         k+='<td>'+Prodobj[i].name+'</td>';
         k+='<td>'+Prodobj[i].price+'</td>';
         k+='</tr>';
     }
     k+='</tbody>';
     document.getElementById('tabelData').innerHTML=k;
}
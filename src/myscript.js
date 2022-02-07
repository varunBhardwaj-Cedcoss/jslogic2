
function add(){
    let prodId = document.getElementById('proi').value;
    let prodName = document.getElementById('pron').value;
    let prodPrice = document.getElementById('prop').value;
    addRow();  
   
}
function addRow(){
     let tabel=document.getElementById('newData');
    let row =tabel.insertRow(-1);
    let cell1 =row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    addData(cell1,cell2,cell3);
}
function addData(cell1,cell2,cell3){
     cell1.innerHTML=prodId;
    cell2.innerHTML=prodName;
    cell3.innerHTML=prodPrice;
}
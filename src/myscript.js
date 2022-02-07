
function add(){
     let tabel=document.getElementById('newData');
    let row =tabel.insertRow(-1);
    let cell1 =row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    addData(cell1,cell2,cell3);
}
function addData(cell1,cell2,cell3){ 
    var prodId = document.getElementById('proi').value;
    var prodName = document.getElementById('pron').value;
    var prodPrice = document.getElementById('prop').value;
    cell1.innerHTML=prodId;
    cell2.innerHTML=prodName;
    cell3.innerHTML=prodPrice;
}
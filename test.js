/*
let editBtn = document.getElementById('editBtn'),
inputContainer = document.querySelector('.input-container'),
editTable = document.getElementById('editTable');
*/
var table = document.getElementById("table"),rIndex;

//let editInputs = ['editDate','editClient','editPnum','editPlate','editExp','editPrice','editCredit','editNote']

let editArr = []

rows = document.querySelectorAll('.trow');
//trow = document.querySelector('.trow-saved')
/*
for(j =0; j< rows.length; j++){
  //editArr.push(Object.values(rows[j].children))
 //console.log(Object.values(rows[j].children))
 
  arr = Object.values(rows[j].children)
  
  //console.log(editBtns)
}

for(k = 0;k < arr.length; k++){
  editBtns= document.createElement('button');
  editBtns.innerText = 'Edit'
  for(h = 0;h<arr.length;h++){
    arr[h].append(editBtns)
  }
}

*/



/*

editBtn.onclick = (e)=>{
  
  inputContainer.classList.toggle('block');
  editTable.classList.toggle('bg')
  e.preventDefault()

  switch (e.currentTarget.innerText){
        case 'Edit':
            e.currentTarget.innerText = 'Update'
            findInputId();
            break;
        default:
            e.currentTarget.innerText = 'Edit'
            editRows();
            break;
  }

}

function editRows(){
    for(i=0; i > table.rows.length;i++){

    }
}

function findInputId(){
 let obj = {}
    for(i = 0;i< editInputs.length;i++){
        y = document.getElementById(editInputs[i])
      y.onfocus = (e)=>{
        var currentInput = e.currentTarget
        obj.cname = document.querySelector('.client').className;
        console.log(obj.cname)
        console.log(currentInput.id.match('Client').pop())
        
      }
    }
}

//table.addEventListener('click',getRows)

/*
function getRows (rowCells){
    for(i = 1;i<table.rows.length;i++){
        table.rows[i].onclick = (e)=>{
          let currentRow = e.currentTarget;
          console.log(currentRow)
          //get each cell value
          for(i = 0; i < currentRow.childElementCount;i++){
            rowCells = currentRow.children;
    
         
          }}}
         

}




//get each row when clicked on
window.onload = tableData();

function tableData(){
  for(i = 1;i<table.rows.length;i++){
    table.rows[i].onclick = (e)=>{
      let currentRow = e.currentTarget;
      console.log(currentRow)
      //get each cell value
      for(i = 0; i < currentRow.childElementCount;i++){
        rowCells = currentRow.children;
        
     
      }
      //set the edit inputs values from the cells
        for(i = 0; i < rowCells.length; i++){
          for(i = 1; i < editInputs.length; i++){
            var y = document.getElementById(editInputs[i])
            y.value = rowCells[i].innerText
           
  }
  
        }
    }
  }
}






//createCells 

function createCells(vals){
    let tr2 = document.createElement('TR');
   // let tr3 = document.getElementById('tr3')
    for(i =0;i< 8;i++){
    var newCell = document.createElement('TD');
    newCell.innerText = vals;
    
   
    }

    tr2.append(newCell);
    tbody.append(tr2);
  }


function getInputs(){


    var inputs = ['date','clientName','pNum','plate','duration','price','credit','note']
    
    inputs.forEach((input)=>{
     var vals =   document.getElementById(input).value
     console.log(vals)
     if(vals != ''){
        createCells(vals);
     }
    })
    }


var table = "<table><thead><tr>Date<th>Client</th><th>Police</th></tr></thead><tbody><td>15 sep</td>john<td>775jf</td></tbody> </table"    


    
document.body.innerHTML+= table;

let input = document.getElementById('editInput');
function editCell (dateCell,cName,priceCell,policeCell,noteCell){
   
  //edit cells function
  let btn  = document.createElement('button')
  btn.innerText = 'Edit';
  let editInupt = document.createElement('input');
  editInupt.setAttribute('class','form-control form-control-sm editInput');
  btn.setAttribute('class','btn-sm btn btn-primary editBtn');
  editInupt.setAttribute('type', 'text');
  
  ['#dateCell','#cName','#priceCell','#policeCell','#noteCell','#plateCell'].forEach((cell)=>{
  
    cells = document.querySelectorAll(cell)
    cells.forEach((cell)=>{
      cell.onmouseover = (e)=>{
        e.currentTarget.appendChild(btn);
      
       
      }
  
    cell.onmouseleave = (e)=>{
      e.currentTarget.removeChild(btn)
      if(editInupt.parentElement == e.currentTarget){
        e.currentTarget.removeChild(editInupt)
      }
     }
     })
     })
    
    
    currentParent = btn.parentNode.childNodes[0];
    console.log(currentParent)
btn.onclick = (e)=>{
 // console.log(e.currentTarget.parentElement.tagName)
  //console.log(e.currentTarget.parentNode)
  e.currentTarget.parentNode.appendChild(editInupt)
  btn.innerText = 'Update';
  parentNode = e.currentTarget.parentNode.childNodes[0]
  editInupt.value = parentNode.textContent ;
  client = parentNode.parentElement.parentElement.childNodes[1].childNodes[0].textContent;
  
  ////console.log(localStorage.getItem(client))
  
}

 editInupt.onkeyup = (e)=>{
   //console.log(e.currentTarget.parentNode.childNodes[0].textContent)
   //client = parentNode.parentElement.parentElement.childNodes[1].childNodes[0].textContent;
  
   if(e.keyCode ==13){
    parentNode.textContent = e.currentTarget.value;
    btn.innerText ='Edit';
    console.log(parentNode.textContent)
    console.log(currentParent.textContent)
    //console.log(e.currentTarget.parentElement.childNodes[0].textContent)
    //localStorage.setItem(client,localStorage.getItem(client).replace(currentParent.textContent,e.currentTarget.value))
    //localStorage.setItem(client.replace(client,e.currentTarget.value),localStorage.getItem(client).replace(parentNode.textContent,e.currentTarget.value))
    //localStorage.removeItem(client);
    
  }
   
 }
}


var tableBody = document.getElementById('tbody')

var row = "<tr>"
"<td>hello</td>"
//row+= "<td>"+clientName.value+"</td>";
//row+= "<td>"+pNum.value+"</td>";
//row+= "<td>"+plate.value+"</td>";
//row+= "<td>"+duration.value+"</td>";
//row+= "<td>"+price.value+"</td>";
//row+= "<td>"+credit.value+"</td>";
//row+= "<td>"+note.value+"</td>";
"</tr>"



add.addEventListener('click',addRow)

function addRow(){
   dataArr = [date.value,clientName.value,pNum.value,plate.value,price.value,credit.value,note.value]
   dataArr.forEach((val)=>{
    if(val != ''){
      

  for(j =0;j<dataArr.length;j++){
    row += "<td>"+dataArr[j]+"</td>"
   
  }
  
  let cells = ['#cName','#policeCell','#plateCell','#priceCell','#noteCell']
  /*
  for(i=0;i<cells.length;i++){
    cell = document.querySelector([cells[i]])
    
    cell.innerHTML = dataArr[i]
  }
  
    }
  })


}

*/

let selectAll = document.getElementById('selectAll')
let select = document.querySelectorAll('.select')
let btnRemove = document.getElementById('remove')
var ids = document.querySelectorAll('.id')

for(i=0;i<ids.length;i++){
  ids[i].textContent = i+1
}

selectAll.addEventListener('click',selectIds)

let selectedArr = []

btnRemove.addEventListener('click',removeItems)


select.forEach((el)=>{
  el.onclick = (e) =>{
    switch(e.currentTarget.checked){
      case true:
        e.currentTarget.checked = true;
        selectedArr.push(e.currentTarget)
        
        btnRemove.removeAttribute('disabled')
      break;
      
      default:
        e.currentTarget.checked = false;
        //delete selectedArr[selectedArr.indexOf(e.currentTarget)]
        selectedArr.splice(selectedArr.indexOf(e.currentTarget),1)
        if(!selectAll.checked && selectedArr.length ==1){
          btnRemove.setAttribute('disabled','disabled') 
        }
        if(selectAll.checked && selectedArr.length ==0){
          btnRemove.setAttribute('disabled','disabled') 
        }
        break;
    }
  } 

})


function selectIds(){
  switch(selectAll.checked){
      case true:
        select.forEach((el)=>{
          el.checked = true
          if(!selectedArr.includes(el)){
            selectedArr.push(el);
          }

        
       })
       
       
       btnRemove.removeAttribute("disabled")
        break;
      default:
        console.log(selectedArr.length)
        select.forEach((el)=>{
          el.checked = false
          selectedArr.pop(el)
        })
        btnRemove.setAttribute("disabled","disabled")
        
        break;

        
  }

}



function removeItems(){
  trow = document.querySelector('.trow-saved')
  //var ids2 = document.querySelectorAll('.id') 
  if(selectedArr.length !=0){
    for(i=0;i<selectedArr.length;i++){
      selectedArr[i].parentElement.parentElement.remove();
    }
  }
  
  ids = document.querySelectorAll('.id')
  

  for(i=0;i<ids.length;i++){
    ids[i].textContent = i+1
  }
 
}

//tableBody.innerHTML += row
let no_records = document.querySelector('.no-records-found')
const searchInput = document.getElementById("search-input");
     // const rows = document.querySelectorAll("tbody tr");
      //console.log(rows);
searchInput.addEventListener("keyup",SearchTable );

function SearchTable (e) {
  const rows = document.querySelectorAll(".trow");
  const q = e.target.value.toLowerCase();

  
  rows.forEach((row)=>{
    //console.log(row.childNodes[1])
    if(row.childNodes[5].textContent.startsWith(q)){
       row.style.display = "table-row"
       
    }else{
      row.style.display = "none";
      //no_records.style.display = 'table-row'
    }
  })
  
  /*
  rows.forEach((row) => {
    //console.log(row.textContent.toLowerCase())
    console.log(row.querySelector('td').textContent)
    /*
    row.querySelector("td").textContent.toLowerCase().startsWith(q)
      ? (row.style.display = "table-row")
      : (row.style.display = "none");
  })*/;
}


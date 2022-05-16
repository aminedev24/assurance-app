let editBtn = document.getElementById('editBtn'),
inputContainer = document.querySelector('.input-container'),
editTable = document.getElementById('editTable');

var table = document.getElementById("table"),rIndex;

let editInputs = ['editDate','editClient','editPnum','editPlate','editExp','editPrice','editCredit','editNote']


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

*/


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
    


    
    
    
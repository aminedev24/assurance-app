let editBtn = document.getElementById('editBtn'),
inputContainer = document.querySelector('.input-container'),
editTable = document.getElementById('editTable');

editBtn.onclick = (e)=>{
  
  inputContainer.classList.toggle('block');
  editTable.classList.toggle('bg')
  e.preventDefault()

  switch (e.currentTarget.innerText){
        case 'Edit':
            e.currentTarget.innerText = 'Update'
            break;
        default:
            e.currentTarget.innerText = 'Edit'
            editRows();
            break;
  }

}

function editRows(){
    console.log('edit rows initiated')
}

var table = document.getElementById("table"),rIndex;



//createCells 

function createCells(vals){
    let tr2 = document.createElement('TR');
    for(i =0;i< 8;i++){
    var newCell = document.createElement('TD');
    newCell.innerText = vals;
    tr2.append(newCell);
    tbody.append(tr2);
   
    }
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
    


    
    
    
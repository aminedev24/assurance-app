



var table = document.getElementById("table"),rIndex;
            
for(var i = 1; i < table.rows.length; i++){
    table.rows[i].onclick = function(){
        rIndex = this.rowIndex;
        console.log(rIndex);

        //document.getElementById("date").value = this.cells[1].innerHTML;
        document.getElementById("client").value = this.cells[1].innerHTML;
        document.getElementById("pNum").value = this.cells[2].innerHTML;
        document.getElementById("plate").value = this.cells[3].innerHTML;
        document.getElementById("price").value = this.cells[5].innerHTML;
        document.getElementById("credit").value = this.cells[6].innerHTML;
        document.getElementById("note").value = this.cells[7].innerHTML;
    };
}
            
            
// edit the row
function editRow(){
   // table.rows[rIndex].cells[1].innerHTML = document.querySelector(".date").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("client").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("police").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("plate").value;
    table.rows[rIndex].cells[6].innerHTML = document.getElementById("credit").value;
    table.rows[rIndex].cells[7].innerHTML = document.getElementById("note").value;
}

// Data Update Table Here
function editTableDisplay(){
    document.querySelector('.editTable').setAttribute('style', 'display: block;')
}



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
    
    
    
    
    
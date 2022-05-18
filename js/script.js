let clientName = document.getElementById('clientName'),
duration = document.getElementById('duration'),
date = document.getElementById('date'),
pNum = document.getElementById('pNum'),
plate = document.getElementById('plate'),
credit = document.getElementById('credit'),
price = document.getElementById('price'),
note = document.getElementById('note'),
tbody = document.getElementById('tbody'),

container = document.querySelector('.table-responsive'),
btn = document.getElementById('add');

/*
let editBtn = document.getElementById('editBtn'),
inputContainer = document.querySelector('.input-container'),
editTable = document.getElementById('editTable');

editBtn.onclick = (e)=>{
    
  inputContainer.classList.toggle('block');
  editTable.classList.toggle('bg')
  e.preventDefault()

}
*/
btn.addEventListener('click',addClient,false);

[clientName,duration,date,pNum,plate,credit].forEach((input)=>{
    input.onkeyup = (e)=>{
        if(e.keyCode == 13){
            addClient();
        }
    }
})


function getRemainingDays(trow,dateCell,endDateCell){
  //var trow = document.querySelector('.trow')
  date1 = new Date(endDateCell.textContent);
  date2 = new Date(dateCell.textContent);
  
  let diff = date1 - date2//j.getTime() - e.getTime(); //date2.getTime() - date1.getTime();
  let msInDay = 1000 * 3600 * 24;
  if(diff/msInDay <= 10){
    alert('remaining days are: '+ diff/msInDay +' days');
  }
  console.log(diff/msInDay)
}
//let tr2 = document.createElement('TR');

/*
function createCells(vals){
 
  for(i =0;i< 7;i++){
  var newCell = document.createElement('TD');
  newCell.innerText = vals;
  
  
 
  }
  tr2.append(newCell);
  tbody.append(tr2);
/*
  if(tr2.childElementCount >6){
    let tr3 = document.createElement('tr')
    tr3.append(newCell)
    tbody.append(tr3)

    alert('woah')
  }else {}
  }
  */

/*
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
*/

function editCell (dateCell,cName,policeCell,plateCell,priceCell,noteCell){
        //edit cells function
        let btn  = document.createElement('button')
        btn.innerText = 'Edit';
        let editInupt = document.createElement('input');
        editInupt.setAttribute('class','form-control form-control-sm editInput');
        btn.setAttribute('class','btn-sm btn btn-primary editBtn');
        editInupt.setAttribute('type', 'text');
       [dateCell,cName,policeCell,plateCell,priceCell,noteCell].forEach((cell)=>{
         cell.onmouseover = (e)=>{
           e.currentTarget.appendChild(btn)
           
         }
  
         cell.onmouseleave = (e)=>{
          e.currentTarget.children[0].remove();
         }
  
         
       })
      
       btn.onclick = (e)=>{
       // console.log(e.currentTarget.parentElement.tagName)
        //console.log(e.currentTarget.parentNode)
        e.currentTarget.parentNode.appendChild(editInupt)
        btn.innerText = 'Update';
        editInupt.value = e.currentTarget.parentNode.childNodes[0].textContent;
       }
  
       editInupt.onkeyup = (e)=>{
         //console.log(e.currentTarget.parentNode.childNodes[0].textContent)
         
         if(e.keyCode ==13){
          e.currentTarget.parentNode.childNodes[0].textContent = e.currentTarget.value;
          btn.innerText ='Edit';
         }
       }
}


function saveTable(){
  localStorage.setItem('data',table.firstElementChild.nextElementSibling.outerHTML);
  localStorage.setItem('data',table.outerHTML);

 //console.log(table.firstElementChild.nextElementSibling.outerHTML)
}


function addClient(){
     
    
    let cName = document.createElement('TD');
    let dur = document.createElement('TD');
    let dateCell = document.createElement('TD');
    let endDateCell = document.createElement('TD');
    let plateCell = document.createElement('TD');
    let policeCell = document.createElement('TD');
    let creditCell = document.createElement('TD');
    let priceCell = document.createElement('TD');
    let noteCell = document.createElement('TD');

    let tr2 = document.createElement('TR'),
    tr3 = document.createElement('tr');
    tr2.setAttribute('class','trow')
    tr3.setAttribute('class', 'btnsRow')

    saveBtn = document.createElement('button')
    saveBtn.innerText = 'save'
    saveBtn.setAttribute('class', 'btn btn-primary btn-sm saveBtn')
    
    saveBtn.addEventListener('click', saveTable)

   tr3.append(saveBtn)
    
    dateCell.setAttribute('id','dateCell');
    cName.setAttribute('id','cName');
    dur.setAttribute('id','durCell');
    plateCell.setAttribute('id','plateCell');
    policeCell.setAttribute('id','policeCell');
    creditCell.setAttribute('id','creditCell');
    noteCell.setAttribute('id','noteCell');
    priceCell.setAttribute('id', 'priceCell')
    
    endDateCell.setAttribute('id','endDate');
    
    
//getInputs()


  if(clientName.value && duration.value && price.value && date.value && pNum.value && note.value && plate.value){
     
    cName.innerText = clientName.value.charAt(0).toUpperCase() + clientName.value.slice(1);

      //dur.innerText = duration.value + ' days';
      
      var e = new Date(date.value);
      var j = new Date(date.value)

     
      //var x = new Date(j.setDate(j.getDate() + Number(duration.value)));
      var x = new Date(j.setMonth(j.getMonth() + Number(duration.value))); 
      
     //endDateCell.innerText = x.toDateString();
     endDateCell.innerText = x.toDateString();
     dateCell.innerText = (e.getMonth()+1)  +'/'+ e.getDate()+ '/'+ e.getFullYear()///.toDateString();
    
     
    
      policeCell.innerText = pNum.value;
      noteCell.innerText = note.value;
      plateCell.innerText = plate.value;
      policeCell.innerText = pNum.value;
      priceCell.innerText = price.value;
      
      if(credit.value){
        creditCell.innerText = price.value - credit.value;
      }else{
        creditCell.innerText  = 0;
      }



  tr2.append(dateCell,cName,policeCell,plateCell,endDateCell,priceCell,creditCell,noteCell);
  tbody.append(tr2,tr3);
  var trow = document.querySelector('.trow')
  btnsRow = document.querySelectorAll('.btnsRow')

  if(btnsRow.length >1){
    btnsRow[0].remove();
  }

  editCell(dateCell,cName,policeCell,plateCell,priceCell,noteCell)
  getRemainingDays(trow,dateCell,endDateCell)
 
  /*  
  [clientName,date,pNum,note,plate,credit,duration,price].forEach((input)=>{
    input.value = '';
  });
  */
    }
    /*

    var table = "<table id='table table-striped table-bordered table-hover table-sm'";
    table += "<thead id='thead-dark'<tr><th id='col'>Date</th><th id='col'>Client</th><th id='col'>policeCell</th><th id='col'>Plate</th><th id='col'>Duration</th><th id='col'>creditCell</th><th id='col'>Note</th></tr></thead>";
    table+= '</table>'
    container.innerHTML+= table;

    let a = document.createElement('TD');
    let b = document.createElement('TD');
    let c = document.createElement('TD');
    let d = document.createElement('TD');
    let f = document.createElement('TD');
    let g = document.createElement('TD');
    let tr2 = document.createElement('TR');
    
    a.setAttribute('id','date');
    b.setAttribute('id','client');
    c.setAttribute('id','policeCell');
    d.setAttribute('id','expiration');
    f.setAttribute('id','creditCell');
    f.setAttribute('id','note');


 if(clientName.value && duration.value && date.value){
      //var price = duration.value / 30 *1600;
  	  a.innerText = clientName.value.charAt(0).toUpperCase() + clientName.value.slice(1);

      b.innerText = duration.value + ' days';
      var e = new Date(date.value);
      var j = new Date(date.value)

      var x = new Date(j.setDate(j.getDate() + Number(duration.value)));
      f.innerText = x.toDateString();
      d.innerText = e.toDateString();
      c.innerText = parseInt(price);
  
  tr2.append(a,b,c,d,f);
  tbody.append(tr2);

  clientName.value = '';
  date.value = '';
  duration.value = '';
  
}

*/
 
} 



let clientName = document.getElementById('clientName'),
duration = document.getElementById('duration'),
date = document.getElementById('date'),
pNum = document.getElementById('pNum'),
plate = document.getElementById('plate'),
credit = document.getElementById('credit'),
price = document.getElementById('price'),
note = document.getElementById('note'),
myTable = document.getElementById('table'),
tbody = document.getElementById('tbody'),
//saved_row = document.querySelector('.saved-row'),
saved_tbody = document.getElementById('saved-tbody'),

container = document.querySelector('.table-responsive'),
btn = document.getElementById('add');

let saved_container = document.querySelector('.saved'),
saved_table = document.querySelector('.table-saved')

btn.addEventListener('click',addClient,false);

/*
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
*/
[clientName,duration,date,pNum,plate,credit].forEach((input)=>{
    input.onkeyup = (e)=>{
        if(e.keyCode == 13){
            addClient();
        }
    }
})

//let startDate = document.querySelectorAll('.startDate')

let days;
let startDates,endDates;
let tr2;

function notifyMe(user,days) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification('remaining days for '  +user+ ' are: '+ Math.floor(days)+' days');
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification('remaining days for ' +user+ ' are: '+ Math.floor(days)+' days');
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}
function getRemainingDays(d1,user){
  //var trow = document.querySelector('.trow')
  date1 = new Date(d1);
  date2 = new Date();
  
  let diff = date1 - date2//j.getTime() - e.getTime(); //date2.getTime() - date1.getTime();
  let msInDay = 1000 * 3600 * 24;
  days = diff/msInDay;

  //console.log(Math.floor(days))
  if(Math.floor(days) <= 10){
    //alert('remaining days for ' +user+ ' are: '+ Math.floor(days)+' days');
    notifyMe(user,days)
  }
  //console.log(diff/msInDay)
}

const searchInput = document.getElementById("search-input");
     // const rows = document.querySelectorAll("tbody tr");
      //console.log(rows);
searchInput.addEventListener("keyup",SearchTable );

function SearchTable (e) {
  const rows = document.querySelectorAll("#tbody tr");
  const q = e.target.value.toLowerCase();
  //console.log(q)
  
  rows.forEach((row)=>{
    //console.log(row.childNodes[1].textContent.startsWith(q))
    if(row.childNodes[3].textContent.startsWith(q)){
       row.style.display = "table-row"
       
    }else{
      row.style.display = "none";
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


var tableToExcel = (function(fileName = '') {
  var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  return function(table, name) {
    
    if (!table.nodeType) table = document.getElementById('table')
    
    let button = document.getElementById('total');
    let saveBtn = document.getElementById('saveTable');
    var th = document.querySelectorAll('th');
   
    if(button != null){
        button.remove();
        saveBtn.remove();
    }

    th.forEach((trow)=>{
        trow.style.backgroundColor =  '#a7acac';
        
        
      })

    var tdth = document.querySelectorAll('TD ,TH')

    tdth.forEach((elems)=>{
        elems.style.borderColor = '#000000'
    })

  
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    var link = document.createElement('a');
    var fileName = link.download = 'fname.xls';
    link.href  = uri + base64(format(template, ctx));
    link.click()
    //window.location.href = uri + base64(format(template, ctx))
  }
})()


function editDate(currentRow,editInupt){
  //let date1 = new Date(currentRow.childNodes[0].childNodes[0].textContent)
  
  var x = new Date(date1.setDate(date1.getDate() +diff));
  console.log(x.toDateString())
 
  //currentRow.childNodes[4].textContent = x.toDateString(); 
}


function editLocalStorage(){
  
}

let num = 0;


var hasNumber = /\d/;  

console.log(localStorage.key(0))
if(localStorage.getItem('saved')!= null){
  num = localStorage.length;

  Object.keys(localStorage).forEach(function(key){
      tbody.innerHTML+=  ( localStorage.getItem(key));
  });
  /*
  saved_tbody.childNodes.forEach((rows)=>{
    rows.className = 'trow trow-saved'
  });
 */
  var ids = document.querySelectorAll('.id')

for(i=0;i<ids.length;i++){
  ids[i].textContent = i+1
}
  endDates = document.querySelectorAll('.endDate');

  endDates.forEach((num1, index) => {
    //const num2 = endDates[index];
    let user = num1.parentElement.parentElement.childNodes[3].innerText
    //console.log(user)
    getRemainingDays(num1.innerText,user);
  });
}





function editCell (dateCell,cName,priceCell,policeCell,noteCell){
       
  
  //console.log(tmpName)
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
        
       }
   
     })
    })
    
    
btn.onclick = (e)=>{


  currentRow = e.currentTarget.parentElement.parentElement;
  parentNode = e.currentTarget.parentNode
  tmp = e.currentTarget.parentElement.childNodes[0].textContent;
  
 
  editInupt.value = parentNode.childNodes[0].textContent ;
  currentKey = currentRow.childNodes[3].childNodes[0].textContent
  
  switch(btn.innerText){
    case 'Edit':
      e.currentTarget.parentElement.appendChild(editInupt);
      e.currentTarget.innerText = 'Update';
      break;
    default:
      e.currentTarget.innerText = 'Edit'
      e.currentTarget.parentElement.removeChild(editInupt);
      break;
  }
  
  if(e.currentTarget.parentElement.id== 'dateCell'){
    editInupt.type = 'date'
    
    endDate = new Date(currentRow.childNodes[6].childNodes[1].textContent)
   
    editInupt.onchange = (e)=>{
      e.currentTarget.parentElement.childNodes[0].textContent = e.currentTarget.value;
      startDate = new Date(e.currentTarget.value)
      diff = endDate - startDate
      let msInDay = 1000 * 3600 * 24; 

      console.log(startDate)

      d2 = new Date( endDate.setDate(endDate.getDate() +Number(diff/msInDay)))
      console.log(d2)
      
    }
    
  
  }else{
    editInupt.type = 'text'
  }
  
}


 editInupt.onkeyup = (e)=>{
   
   if(e.keyCode ==13){
   
    parentNode.textContent = e.currentTarget.value;
    btn.innerText ='Edit';

    if(tmp == currentKey && e.currentTarget.value!=tmp){
       
      localStorage.setItem(e.currentTarget.value,localStorage.getItem(currentKey).replace(tmp,e.currentTarget.value))
      localStorage.removeItem(tmp)
    }else{
      localStorage.setItem(currentKey,localStorage.getItem(currentKey).replace(tmp,e.currentTarget.value))
    }
    
   }
   
 }

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
    let checkboxCell = document.createElement('td')
    let boxinput = document.createElement('input')
    let idCell = document.createElement('td')

    //let tbody = document.createElement('tbody')
    boxinput.className ='select'
    boxinput.type = 'checkbox'
    idCell.className = 'id'
    checkboxCell.append(boxinput)
    let endDate = document.createElement('span');

    tr2 = document.createElement('tr'),

    tr2.setAttribute('class','trow')
   
    
    endDate.setAttribute('class','endDate')
    //tbody.setAttribute('class','tbody')
    
    //saveBtn.addEventListener('click', saveTable)

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
     
    cName.innerText = clientName.value//.charAt(0).toUpperCase() + clientName.value.slice(1);

      //dur.innerText = duration.value + ' days';
      
      var e = new Date(date.value);
      var j = new Date(date.value)

     
      var x = new Date(j.setDate(j.getDate() + Number(duration.value)));
      //var x = new Date(j.setMonth(j.getMonth() + Number(duration.value))); 
      
      
     //endDateCell.innerText = x.toDateString();
     endDateCell.innerText = x.toDateString();
     dateCell.innerText =   (e.getMonth()+1)  +'/'+ e.getDate() +'/'+ e.getFullYear()///.toDateString();
     
  
   
      endDate.innerText = x;
      
      endDate.style.display = 'none'
      endDateCell.append(endDate);
     
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
       

  tr2.append(checkboxCell,idCell,dateCell,cName,policeCell,plateCell,endDateCell,priceCell,creditCell,noteCell);
  tbody.append(tr2);
  //myTable.append(tbody)
  
  btnsRow = document.querySelectorAll('.btnsRow')

  if(btnsRow.length >1){
    btnsRow[0].remove();
  }

 num+=1
 localStorage.setItem(cName.innerText,tr2.innerHTML)
 localStorage.setItem('saved', '')
/*
 if(localStorage.length ==0){
  localStorage.setItem(cName.innerText,tr2.innerHTML)
 }else{
  localStorage.setItem(num + cName.innerText,tr2.innerHTML)
 }
 */
 editCell(dateCell,cName,priceCell,policeCell,noteCell)
 

//console.log(tables)
  
     
 
  /*  
  [clientName,date,pNum,note,plate,credit,duration,price].forEach((input)=>{
    input.value = '';
  });
  */
    }
 
 
} 


editCell()

let selectAll = document.getElementById('selectAll')
let select = document.querySelectorAll('.select')
let btnRemove = document.getElementById('remove')


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
       
       if(selectedArr.length !=0){
        btnRemove.removeAttribute("disabled")
       }
       
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
      console.log(selectedArr[i].parentElement.parentElement.childNodes[3].textContent)
      localStorage.removeItem(selectedArr[i].parentElement.parentElement.childNodes[3].textContent)
    }
  }
  
  if(selectedArr.checked){
    localStorage.clear()
  }
  ids = document.querySelectorAll('.id')
  

  for(i=0;i<ids.length;i++){
    ids[i].textContent = i+1
  }
 
}
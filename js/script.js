let clientName = document.getElementById('clientName'),
duration = document.getElementById('duration'),
date = document.getElementById('date'),
pNum = document.getElementById('pNum'),
plate = document.getElementById('plate'),
credit = document.getElementById('credit'),
price = document.getElementById('price'),
note = document.getElementById('note'),
tbody = document.getElementById('empty-tbody'),

container = document.querySelector('.table-responsive'),
btn = document.getElementById('add');


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

const searchInput = document.getElementById("search-input");
     // const rows = document.querySelectorAll("tbody tr");
      //console.log(rows);
searchInput.addEventListener("keyup",SearchTable );

function SearchTable (e) {
  const rows = document.querySelectorAll(".trow");
  const q = e.target.value.toLowerCase();
  console.log(q)
  
  rows.forEach((row)=>{
    console.log(row.childNodes[1].textContent.startsWith(q))
    if(row.childNodes[1].textContent.startsWith(q)){
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

window.onload = ()=>{
  editCell()
  if(localStorage.getItem('data') != null){
     var div = document.querySelector('.table-responsive')
     div.innerHTML += localStorage.getItem('data');
  }
}

function editCell (){
   
        //edit cells function
        let btn  = document.createElement('button')
        btn.innerText = 'Edit';
        let editInupt = document.createElement('input');
        editInupt.setAttribute('class','form-control form-control-sm editInput');
        btn.setAttribute('class','btn-sm btn btn-primary editBtn');
        editInupt.setAttribute('type', 'text');

        ['dateCell','cName','plateCell','priceCell','policeCell','noteCell'].forEach((cell)=>{
          cells = document.getElementById(cell)
          console.log(cells)
          if(cells !=null){
            cells.onmouseover = (e)=>{
              e.currentTarget.appendChild(btn);
            }
        
            
           cells.onmouseleave = (e)=>{
            e.currentTarget.children[0].remove();
           }
          }
         
      
        })

       
        /*
       [dateCell,cName,policeCell,plateCell,priceCell,noteCell].forEach((cell)=>{
         cell.onmouseover = (e)=>{
           e.currentTarget.appendChild(btn)
           
         }
  
         cell.onmouseleave = (e)=>{
          e.currentTarget.children[0].remove();
         }
  
         
       })
       */
      
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
  //localStorage.setItem('data',table.firstElementChild.nextElementSibling.outerHTML);
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
    
    exportBtn = document.createElement('button');
    exportBtn.setAttribute('class','btn btn-primary btn-sm export');
    exportBtn.innerText = 'export';

    saveBtn.addEventListener('click', saveTable)
    exportBtn.addEventListener('click', tableToExcel)

   tr3.append(saveBtn,exportBtn)
    
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

  
  
  editCell()
  getRemainingDays(trow,dateCell,endDateCell)


  /*  
  [clientName,date,pNum,note,plate,credit,duration,price].forEach((input)=>{
    input.value = '';
  });
  */
    }
   
 
} 



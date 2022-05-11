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

btn.addEventListener('click',addClient,false);

[clientName,duration,date,pNum,plate,credit].forEach((input)=>{
    input.onkeyup = (e)=>{
        if(e.keyCode == 13){
            addClient();
        }
    }
})

function addClient(){


    let cName = document.createElement('TD');
    let dur = document.createElement('TD');
    let datCell = document.createElement('TD');
    let endDateCell = document.createElement('TD');
    let plateCell = document.createElement('TD');
    let policeCell = document.createElement('TD');
    let creditCell = document.createElement('TD');
    let priceCell = document.createElement('TD');
    let noteCell = document.createElement('TD');


    let tr2 = document.createElement('TR');


    datCell.setAttribute('id','datCell');
    cName.setAttribute('id','cName');
    dur.setAttribute('id','durCell');
    plateCell.setAttribute('id','plateCell');
    policeCell.setAttribute('id','policeCell');
    creditCell.setAttribute('id','creditCell');
    noteCell.setAttribute('id','noteCell');
    priceCell.setAttribute('id', 'priceCell')
    
    endDateCell.setAttribute('id','endDate');

  if(clientName.value && duration.value && price.value && date.value && pNum.value && note.value && plate.value && credit.value){
     
    cName.innerText = clientName.value.charAt(0).toUpperCase() + clientName.value.slice(1);

      dur.innerText = duration.value + ' days';
      
      var e = new Date(date.value);
      var j = new Date(date.value)

     
      //var x = new Date(j.setDate(j.getDate() + Number(duration.value)));
      var x = new Date(j.setMonth(j.getMonth() + Number(duration.value))); 
      
      endDateCell.innerText = x.toDateString();
      datCell.innerText = e.toDateString();
      
      policeCell.innerText = pNum.value;
      noteCell.innerText = note.value;
      plateCell.innerText = plate.value;
      policeCell.innerText = pNum.value;
      creditCell.innerText = price.value - credit.value;
      priceCell.innerText = price.value;
      
     
  
  tr2.append(datCell,cName,policeCell,plateCell,endDateCell,priceCell,creditCell,noteCell);
  tbody.append(tr2);

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


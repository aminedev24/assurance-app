var btn3 = document.querySelector('.export');
//let button = document.getElementById('total');
//let saveBtn = document.getElementById('saveTable');

var th = document.querySelectorAll('th');


btn3.onclick = function(){
    tableToExcel('testTable')
}

var fname;

/*
while(true){
    if(date.value != ''){
        var x = new Date(date.value).toDateString();

        fname = x;
        break; 
    }else{
        fname = 'Reports Of Products.xls';
        break;
    }
}

*/
var tableToExcel = (function(fileName = '') {
  var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  return function(table, name) {
    
    if (!table.nodeType) table = document.getElementById('myTable')
    
    let button = document.getElementById('total');
    let saveBtn = document.getElementById('saveTable');

    if(edit.length >= 1){
        edit.forEach((btn)=>{
            btn.remove();
       })
    }
    if(button != null){
        button.remove();
        saveBtn.remove();
    }

    th.forEach((trow)=>{
        trow.style.backgroundColor =  '#a7acac';
        
        
      })
    //let ptotal = document.querySelectorAll('.ptotal');
    var tdth = document.querySelectorAll('TD ,TH')

    tdth.forEach((elems)=>{
        elems.style.borderColor = '#000000'
    })

    /*
    ptotal.forEach((elem)=>{
        elem.style.backgroundColor = '#e4e0e0';
    })
   */
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    var link = document.createElement('a');
    var fileName = link.download = fname;
    link.href  = uri + base64(format(template, ctx));
    link.click()
    //window.location.href = uri + base64(format(template, ctx))
  }
})()
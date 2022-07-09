checkbox.forEach((box)=>{
    box.onclick = (e)=>{
      switch(e.currentTarget.checked){
        case true:
      console.log(e.currentTarget.id)
        switch(e.currentTarget.id){
            case 'toggle-id':
                document.querySelectorAll('.trow').forEach((row)=>{
                    row.childNodes.forEach((elem)=>{
                        if(elem.id !='id'){
                            elem.style.backgroundColor = 'red'
                        }
                    })
                })
        }
        break;
      	
      }
    }
  })
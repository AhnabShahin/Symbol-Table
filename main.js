let start= document.getElementById('start').onclick=()=>{
    hashTable();
}
function hashTable(){
    const inputs = [
        "Enter 0 for Insert",
        "Enter 1 for Show",
        "Enter 2 for Search",
        "Enter 3 for Update",
        "Enter 4 for Delete",
        "Enter 5 for Exit"
    ];
    let message='';
    inputs.forEach(msg => {
        message= message + `${msg}\n`
    })
    let storage=[[],[],[],[],[],[],[],[]]
    while(true){
        let enterValue = prompt(message);
        if(parseInt(enterValue) === 0){
            let data = prompt('Please enter comma separated data you want to add: ')
            insert(data,storage);
        }
        else if(parseInt(enterValue) === 1){
            show(storage);
        }
        else if(parseInt(enterValue) === 2){
            search(storage)
        }
        else if(parseInt(enterValue) === 3){
            update(storage)
        }
        else if(parseInt(enterValue) === 4){
            deleteData(storage)
        }
        else if(parseInt(enterValue) === 5){
            break
        }
        else{
            console.log('You enter an invalid input')
        }
    }
}
function show(storage){
    console.log(storage)
}
function search(storage){
    const searchBy= prompt('Please enter name for search :').trim();
    let count=0;
    storage.forEach(ele=>{
        ele.forEach(element=>{
            if(element.name == searchBy){
                console.log(element)
                count++;
            }
        })
    })
    if(count==0){
        console.log('No Result Found');
    }else{
        console.log(`Total result found ${count}`);
    }
}
function update(storage){
    const name= prompt('Please enter name which you want to update :').trim();
    const id= prompt(`Enter the value for ${name} :`);
    storage.forEach(ele=>{
        ele.forEach(element=>{
            if(element.name == name){
                element.ID=id;
            }
        })
    })
}
function deleteData(storage){
    const name= prompt('Please enter name which you want to delete :').trim();
    storage.forEach(ele=>{
        ele.forEach((element,index)=>{
            if(element.name == name){
                ele.splice(index, 1)
            }
        })
    })
}
function insert(data,storage){
    if(data.indexOf(',')==-1){
        console.log('You enter an Invalid format')
    }else{
        data_list = data.split(',');
        if(data_list[0].startsWith("0") || data_list[0].startsWith("1")||data_list[0].startsWith("2")||data_list[0].startsWith("3")||data_list[0].startsWith("4")||data_list[0].startsWith("5")||data_list[0].startsWith("6")||data_list[0].startsWith("7")||data_list[0].startsWith("8")||data_list[0].startsWith("9")){
            console.log("You cannot start a variable name with number");
        }else{
            data_list = data_list.map(element => element.trim());
            let asciiValue=0;
            [...data_list[0]].forEach(element=> {
                asciiValue = asciiValue + element.charCodeAt();
            })
            const appendingIndex =asciiValue%8;
            const data_obj={
                name:data_list[0],
                ASCII_VALUE:asciiValue,
                ID:data_list[1]
            }
            storage[appendingIndex].push(data_obj);
        }
    }
}
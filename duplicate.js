const names = ['abul', 'babul', 'gabul', 'cabul', 'bulbul', 'abul', 'tabul', 'babul', 'bulbul', 'cabul'];

function removeDuplicate(names){
    const uniqe = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if(uniqe.includes(name) === false){
            uniqe.push(name);
        }
    }
    return uniqe;
}

const uniqueName = removeDuplicate(names);
console.log(uniqueName);
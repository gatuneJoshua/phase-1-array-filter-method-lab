// Code your solution here


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];



function findMatching(array, string){

//const results = normalizedArray.filter(element => element === console String);

const results = array.filter(element =>{
    if( element[0].toLowerCase() + element.slice(1,element.length)===string ||element=== string ){
        return console.log(string);
    }
})

return results;
}

function fuzzyMatch(array,string){
    const results = array.filter(element => element.slice(0,3).includes(string))
    return results;
}

function matchName(driver,string){
    const results = driver.filter(element => element.name === string )
    return results;

}

function matchName(driver,string){
    const results = driver.filter(element => element.name === string )
    return results;
}



const removeSingleEntryFromArray= (arr,toRemove) => {
    const diffArray = arr.filter(val => val !== toRemove)
    return diffArray
}


const removeFromArray = (arr,...toRemove) => {
    let diffArray=arr
    toRemove.forEach(val => {
        diffArray = removeSingleEntryFromArray(diffArray,val)
    });
    return diffArray
};

// Do not edit below this line
module.exports = removeFromArray;

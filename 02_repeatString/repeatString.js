const repeatString = function(str,count) {
    let rString=''
    if(count < 0) return 'ERROR'
    for(let i=0;i<count;i++)
    {
        rString+=str
    }

    return rString
};

// Do not edit below this line
module.exports = repeatString;

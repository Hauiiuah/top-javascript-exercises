const sumAll = (first,second) => {
    let lower, upper,numbers=[]
    if(first < 0 || second < 0) return 'ERROR'
    
    if(typeof(first)!=='number' || typeof(second)!=='number') return 'ERROR'
    
    
    if(first < second) 
    {
        lower = first
        upper = second
    }
    else
    {
        lower = second
        upper = first
    }

    for(let i = lower; i<=upper; i++)
    {
        numbers.push(i)
    }

    const sum = numbers.reduce((prev,cur)=> prev+cur ,0)
    return sum
};

// Do not edit below this line
module.exports = sumAll;

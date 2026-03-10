//write a function that receives 3 number args and return the big number 
function greatestNumber(c,d,e)
{
    if(c>d && c>e )
    return c;
    else if(d>c && d>e )
    return d;
    else if(e>d && e>c )
    return e;

 
}

let great=greatestNumber(10,20,30)
 console.log(`${great} is greatest number`)
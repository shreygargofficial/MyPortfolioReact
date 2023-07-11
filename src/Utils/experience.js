export const experienceCalculation= (oldDate,newDate)=>{
    
    let oldYear = oldDate.getFullYear();
    let newYear = newDate.getFullYear();
    let oldMonth = oldDate.getMonth();
    let newMonth = newDate.getMonth();
    let outputMonth
    let outputYear
    if(oldMonth>newMonth){
        outputMonth = 11-oldMonth+newMonth+1;
        outputYear= newYear-oldYear-1
    }
    else{
        outputMonth = newMonth - oldMonth;
        outputYear =newYear-oldYear
    }
    return (outputYear > 1 ? outputYear + " Years " : outputYear + " Year & ")+ (outputMonth ? outputMonth +" Months" : "")
}


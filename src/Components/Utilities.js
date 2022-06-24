export const AmountFormatChecker = (amount) =>{
    const pattern = new RegExp("^(0|[1-9][0-9]*)$");
    let value = amount;
    let result;
    if(value !== '' || value !== null)
    {
        result = pattern.test(value);
        return result;
    }
    return false;

    
}

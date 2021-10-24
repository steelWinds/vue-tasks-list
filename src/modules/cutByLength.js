let cutByLength = (
    string = '', 
    length = 100, 
    endSymbol = '...'
) => {

    if (string.length > length) {
        let resultString = string
            .split('')
            .slice(0, length);

        resultString.push(endSymbol);

        return resultString.join('');
    } 

    return string;
}; 

export { cutByLength };

module.exports = function reverse (n) {
    let result = '';
    let nString = n.toString();

    for (let i = nString.length - 1; i >= 0; i -= 1) {
        result += nString[i];
    }
    
    return (n >= 0) ? result : result.slice(0, -1);
}

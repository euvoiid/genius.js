module.exports = function makeCharTable(size, ...args) {
    args = ['0', ...args];
    const width = size.split('x').map(x => Number(x))[0],
          height = size.split('x').map(x => Number(x))[1];
    
    let arr = Array.from({ length: height }, () => Array.from({ length: width }, () => 'a'));
    
    let argIndex = 0;
    arr = arr.map((array, i) => {
        argIndex = argIndex < args.length - 1 ? argIndex + 1 : 1;
        return array.map(() => args[argIndex]).join('');
    });
    
    return arr.join('\n');
}
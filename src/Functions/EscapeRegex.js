async function EscapeRegex(String) {

    if(!String) return new Error('[ 🔧 ] - Defina qual será a String.');

    return String.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
    
}

export { EscapeRegex };
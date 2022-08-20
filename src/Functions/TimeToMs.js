async function TimeToMs(time) {

  if(!time) return new Error('[ 🔧 ] - Defina qual será o ( tempo ).');

    const TimeFormats = time
      .replace(/[\d\s]/g, () => '')
      .toLowerCase()
      .split('');
    const Formats = ['d', 'h', 'm', 's'];
  
    const isValid = TimeFormats.length === new Set(TimeFormats).size && TimeFormats.every((u, i, a) => Formats.includes(u) && Formats.indexOf(a[i - 1]) < Formats.indexOf(u));
    if (!isValid) return null;
  
    const Formatted = time
      .replace(/([a-zA-Z])/g, '$1 ')
      .toLowerCase()
      .trim()
      .split(' ')
      .filter(f => !!f);
    if (Formatted.some(e => !/[0-9]/.test(e))) return null;
  
    const Invalid = {
      h: 24,
      m: 60,
      s: 60
    };
    for (const f of Formatted) {
      const value = f.replace(/\D/g, '');
      const unit = f.replace(/\d/gi, '');
  
      if (value >= Invalid[unit]) return null;
    }
  
    const convertions = {
      d: 86_400_000,
      h: 3_600_000,
      m: 60_000,
      s: 1000
    };
  
    return Formatted.reduce((acc, curr) => acc + parseInt(curr.substring(0, curr.length - 1), 10) * convertions[curr[curr.length - 1]], 0);
  };

export { TimeToMs };
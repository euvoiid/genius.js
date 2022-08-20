async function RandomText(args) { 
  if(!args) return new Error('[ 🔧 ] - Defina qual serão as palavras.'); 
  if(!Array.isArray(args)) return new Error('[ 🔧 ] - As palavras necessitam estar em array.'); 
   
  return args[Math.floor(Math.random() * args.length)] 
}

export { RandomText }
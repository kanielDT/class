
function loopwhile() {

  let i = 0
  const end = 5
  while ( i< end ) {
    i++
    const result = i + "" + "hello";
    console.log(result)
  }
}

function madlib(name,car,color) {
    const sentence = `Hello your name is ${name}. you drive ${car} which is ${color}.`
    console.log(sentence)
}

madlib("kaniel","lexus","charcoal")
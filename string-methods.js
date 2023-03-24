//  // length of functiion
//  const stirlength = () => {
//     const string = "Great idea Megan";
//     console.log(string.length)
//  }
// // Invoke
//  stirlength()

///////////////////////////////////////////////////
//converts string to uppercase
 const toUpperCase = () => {
    const string = "Omg what is wrong with me today";
    console.log("str uppercase",string.toUpperCase())

 }
 toUpperCase()


 const toLowerCase = () => {
    const string = "Omg what is wrong with me today";
    console.log("str uppercase",string.toLowerCase())

 }
 toLowerCase()
 ///////////////////////////////////////////////
//Trim
const stirTrim = () => {
    const string = "  Hello this is Major Tom  "
    console.log("str trim: ", string.trim())
}
stirTrim()
//////////////////////////////////////////////
// Replace
const strReplace = () => {
    const str = "I didn't slee much last night."
    const subject = "sleep much"
    const replace = "eat anything"
    console.log(strReplace)
}
strReplace()
////////////////////////////////////////////
//String
const strSub = () => {
    const str = "I like big fonts and i cannot lie"
    console.log("substring:")
    console.log("substring:", str.substring(7,15))
}
strSub()
///////////////////////////////////////////
const strSplit = () => {
    const str= "I like starwars. ho purr"
    console.log("str split",str.split(" "))
}
strSplit()
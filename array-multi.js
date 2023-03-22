const container = [
    "parent first",   //0
    "parent second",  //1
    [                 //2
        "child first",  //0
        "child second", //1
        "child third",  //2
        "child fourth"  //3
    ]
]

//Construct

//Log
console.log("container:", container[0])
console.log("container 2nd:", container[1])
console.log("container - child 2nd", container[2,1])
console.log("container - child 3rd", container)
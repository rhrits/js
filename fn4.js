
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others Hriitk, your age is 21)

function greetwithgender(user){
    let greeting ="";
    if (user.gender === "male"){
        greeeting = "Mr";
    }
    else if(user.gender === "female"){
        greeting ="Mrs";
    }
    console.log("Hii" + greeting + user.name + "your age is "+ user.age);
}

let user = {
    name: "Hritik",
    age: 21
}
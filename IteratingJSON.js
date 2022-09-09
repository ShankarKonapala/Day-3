let Team=[
    {
        Name:"Jhon",
        Age:30,
        Designation:"Manager"
    },
    {
        Name:"Albert",
        Age:28,
        Designation:"Sr Developer"
    },
    {
        Name:"Anderson",
        Age:31,
        Designation:"Sr Developer"
    },
    {
        Name:"Mark",
        Age:29,
        Designation:"Consultant"
    },
    {
        Name:"Tylor",
        Age:25,
        Designation:"Jr Developer"
    }
]

Using for loop
for(let i=0;i<Team.length;i++){
    console.log(`
    Name:${Team[i].Name}
    Age:${Team[i].Age}
    Designation:${Team[i].Designation}
    `)
}

Using for in loop
for(let teamMember in Team){
    console.log(`
    Name:${Team[teamMember].Name}
    Age:${Team[teamMember].Age}
    Designation:${Team[teamMember].Designation}
    `)
}

Using for each loop
Team.forEach(print);
function print(value){
    console.log(`
    Name:${value.Name}
    Age:${value.Age}
    Designation:${value.Designation}
    `)
}

Using For of loop
for(let member of Team){
    console.log(`
    Name:${member.Name}
    Age:${member.Age}
    Designation:${member.Designation}
    `)
}


// Team[i]
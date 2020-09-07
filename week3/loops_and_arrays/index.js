var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: 'Mike',
        age: 12,
        gender: 'male'
    },{
        name: 'Madeline',
        age: 80,
        gender: 'female'
    },{
        name: 'Cheryl',
        age: 22,
        gender: 'female'
    },{
        name: 'Sam',
        age: 30,
        gender: 'male'
    },{
        name: 'Suzy',
        age: 4,
        gender: 'female'
    }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    var name = peopleWhoWantToSeeMadMaxFuryRoad[i].name;
    var age = peopleWhoWantToSeeMadMaxFuryRoad[i].age;
    var gender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender;

    if(age >= 18) {
        console.log('old enough');
        console.log(name + ' is old enough to see Mad Max.');
        switch (gender) {
            case 'male':
                console.log(name + " is old enough. HE'S good to see Mad Max Fury Road.");
                break;
            case 'female':
                console.log(name + " is old enough. SHE'S good to see Mad Max Fury Road.");
                break;
        }
    } else {
        console.log('not old enough');
        console.log(name + ' is not old enough to see Mad Max.');
        switch (gender) {
            case 'male':
                console.log(name + " is not old enough to see Mad Max Fury Road, don't let HIM in.");
                break;
            case 'female':
                console.log(name + " is not old enough to see Mad Max Fury Road, don't let HER in.");
                break;
        }
    }
}

for (i = 0; i < 100; i++) {
    if (i % 2 !== 0 ) {
        console.log('Odd');
    } else {
        console.log('Even');
    }
}
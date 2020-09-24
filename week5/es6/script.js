const name = 'John', age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === 'cat') {
            name = 'fluffy'
        } else {
            name = 'spot'
        }
        console.log('pet name: ', name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log('man name: ', name)
    return petObjects
}

runForLoop(['cat', 'dog'])

const carrots = ['bright orange', 'ripe', 'rotten']

mapVegetables = arr => arr.map(carrot => ({ type: 'carrot', name: carrot }))

console.log(mapVegetables(carrots));
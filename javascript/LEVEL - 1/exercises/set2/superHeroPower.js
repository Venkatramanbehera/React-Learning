const superPower = function(obj , str){
    let result = ''
    for(let i=0; i<obj.length; i++){
        if(obj[i].name === str){
            result = obj[i].powers.join(', ')
        }
    }
    return result
}
const superHeroes = [
    {
        name : 'Molecule Man',
        age : 29,
        secretIdentity : 'Dan jukes',
        powers : [
            'Radiation resistance',
            'Turning tiny',
            'Radiation blast'
        ]
    },
    {
        name : 'Madame Uppercut',
        age : 39,
        secretIdentity : 'Jane Wilson',
        powers : [
            'Million tonne punch',
            'Damage resistance',
            'Superhuman reflexes'
        ]
    }
]
console.log(superPower(superHeroes,'Molecule Man'))
console.log(superPower(superHeroes,'Molecule'))

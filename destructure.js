const person = {name: 'Jack William', age: 18, job: 'facebooker', address: 'mirjapur purbo para', phone: '0177687549', gfName: 'Ema Watson', friends: ['Tom hacks', 'Tom crusie', 'Tom yarn']}

// const gfName = person.gfName
// const phone = person.phone //eta aro sohoj vabe kora jabe es6 er maddome

// const {phone, gfName, name, address} = person  //object er modde rekhe output ber kora jabe,,, arekta system a kora jabe niche deya holo

// const friend = ['sakib khan', 'amir khan', 'sahrukh khan', 'salman khan', 'jakir khan', 'asif khan']
// const [firstFriend, nextFriend, ...restFriend] = friend

// console.log(firstFriend, nextFriend, restFriend)

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger leader'
    }
}

const {leader} = complexObject.info ///eivabe o kora jabe
console.log(leader)
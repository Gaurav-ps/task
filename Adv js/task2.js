console.log('person1 : shows ticket')
console.log('person2 : shows ticket')

const preMovie = async() => {

    const wifeBringingTickets = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('ticket')
        },2000)
    })
    const getPopcorn = new Promise((resolve,reject) => { resolve('popcorn')})

    const getButter = new Promise((resolve, reject) => resolve('butter'));

    const getColdDrink = new Promise((resolve, reject) => resolve('Cold Drink'));

    let ticket = await wifeBringingTickets;

    let [popcorn,butter,drink] = await Promise.all([getPopcorn,getButter,getColdDrink]);

    console.log(`${popcorn} - ${butter} - ${drink}`)
return ticket;
}
preMovie().then((m) => console.log(`person3 : shows ${m}`))
console.log('person 4: shows ticket');
console.log('person 5: shows ticket');
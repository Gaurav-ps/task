console.log('person1 : shows ticket')
console.log('person2 : shows ticket')

const preMovie = async() => {

    const wifeBringingTickets = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('ticket')
        },2000)
    })
    const popcorn = new Promise((resolve,reject) => { resolve('popcorn')})

    const getButter = new Promise((resolve, reject) => resolve('butter'));

    const getColdDrink = new Promise((resolve, reject) => resolve('Cold Drink'));

    let ticket = await wifeBringingTickets;

    console.log('wife: I have the tickets');
    console.log('husband: Lets go in');
    console.log('wife: No I am hungry and I need a popcorn');
    
    
    let pop = await popcorn;

    console.log('husband: Lets go in now');
    console.log('wife: No i need butter on my popcorn');

    
    let butter = await getButter;

    console.log('Husband: Do you need anything else')
    console.log('Wife: I need a cold Drink')

    
    let coldDrink = await getColdDrink;

    console.log('Wife: Lets go for the movie')
    console.log('Husband: I cannot wait much longer')
    
return ticket;
}
preMovie().then((m) => console.log(`person3 : shows ${m}`))
console.log('person 4: shows ticket');
console.log('person 5: shows ticket');
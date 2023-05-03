const posts = [{title: 'POST1', lastActivityTime:'30th April'}];
//Do not touch this function
function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
          const val = posts.push({title:'POST2', lastActivityTime: new Date().getTime()})
            resolve(val);
        }, 1000)
    }) 
}
//Do not touch this function
// function create3rPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST3'});
//             resolve();
//         }, 2000)
//     }) 
// }

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 2000)
    })
}
function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.lastActivityTime = new Date().getTime();
            resolve(posts.lastActivityTime);
        },1000)
    })
}

function userDetailsUpdate(){
    //Promise.all([createPost({title: "Post 3"}),updateLastUserActivityTime()])
    return Promise.all([createPost(), updateLastUserActivityTime()])
    .then(([cpResolved, updateResolved]) => {
        console.log(`Post name: ${cpResolved} - Last Updated: ${updateResolved}`)
    })
    .catch((err) => {
        console.log(err);
    })

}


userDetailsUpdate()
.then(()=> {
    deletePost()
    .then((msg) => {
        console.log(msg)
        userDetailsUpdate()
    })
})

//Modify the lines below and use .then and .catch smartly to get the correct output.
// create2ndPost().then(() => {
//     deletePost().then((msg) => {
//         console.log(msg.title);
//         create3rPost().then(() => {
//             deletePost().then((msg) => {
//                 console.log(msg.title);
//                 deletePost().then((msg) => {
//                     console.log(msg.title);
                    
//                     deletePost().then(()=>{}).catch((err)=>{console.log(err)})
                    
//                 })
//             })
//         })
//     })
// })

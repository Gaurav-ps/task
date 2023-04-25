const posts = [{title: 'POST1', createdAt: new Date().getTime}];

function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let outpu = '';
            for(let i=0; i<posts.length; i++)
            {
                output += `<li>${posts[i].title} - lastupdated${createdAt[i]} </li>`
            }

        },1000)
    })
}

function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post);
            resolve()
        }, 3000)
    }) 
}

Promises.all(Promise.all([createPost({title: 'Post Five'}), updateLastUserActivityTime()]))
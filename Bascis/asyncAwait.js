const posts = [{title: 'POST1', lastActivityTime:'30th April'}];
//Do not touch this function

const input = async() => {
    function createPost() {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
            const val = posts.push({title:'POST2', lastActivityTime: new Date().getTime()})
                resolve(val);
            }, 1000)
        }) 
    }
  
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
        return Promise.all([createPost(), updateLastUserActivityTime()])
        .then(([cpResolved, updateResolved]) => {
            console.log(`Post name: ${cpResolved} - Last Updated: ${updateResolved}`)
        })
        .catch((err) => {
            console.log(err);
        })

    }
    let updateDetails = await userDetailsUpdate();
    return updateDetails;
}
input()




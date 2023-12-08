async function logpost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const post = await response.jason()
    console.log(post)
    // console.log(response)
}

const addPost = async (data) => {
    // console.log(data)
    // console.log(JSON.stringify(data))
    // console.log(JSON.parse(JSON.stringify(data)))

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })

    const post = await response.json();
    console.log(post);
    // console.log(response)
}

async function logPostyId(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json();
    console.log(post)
    // console.log(response)
}

// logpost 
addPost({
    title: 'My blog',
    body: 'About my blog',
    userId: 10000000,
})
logPostyId()
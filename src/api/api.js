const BASE_URL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";

export async function fetchAPI(path, token) {
    try{
    const response = await fetch(`${BASE_URL}/${path}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    const data =  await response.json();
    return data;
} catch(error){
    console.error(error)
}
}
export async function registerUser(username, password, call) {
    try {const response = await fetch(`${BASE_URL}/users/${call}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    })
    const result = await response.json();
    return result;
} catch(error) {
        console.error(error)
    }
}
export async function createPost(title, description, price, location, willDeliver, token) {
    try {const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            post: {
                title,
                description,
                price,
                location,
                willDeliver
            }
        })
    })
    const result = await response.json();
    return result;
    } catch(error){
        console.error(error);
    }
}
export const deletePost = async (postIdToDelete, token, posts, setPosts) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postIdToDelete}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
    const newPosts = posts.filter((post) => post._id !== postIdToDelete)
    setPosts(newPosts)
} catch(error){
    console.error(error);
}
}

export const callMe = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const result = await response.json()
        return result;
    } catch(error) {
        console.error(error)
    }
}
export const messageAuthor = async (token, postID, messages) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postID}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content: `${messages}`
                }
            })
        })
    } catch(error){
        console.error(error)
    }
}

export async function editPost(title, description, price, location, willDeliver, postID, token) {
    try {const response = await fetch(`${BASE_URL}/posts/${postID}`, {
        method: "PATCH",
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            post: {
                title,
                description,
                price,
                location,
                willDeliver
            }
        })
    })
    const result = await response.json();
    return result;
    } catch(error){
        console.error(error);
    }
}
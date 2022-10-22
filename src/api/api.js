const BASE_URL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";

export async function fetchAPI(path) {
    const response = await fetch(`${BASE_URL}/${path}`)
    const data =  await response.json();
    return data;
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
    console.log(result);
    return result;
    } catch(error){
        console.error(error);
    }
}

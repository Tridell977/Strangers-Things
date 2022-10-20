const BASE_URL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";

export async function fetchAPI(path) {
    const response = await fetch(`${BASE_URL}/${path}`)
    const data =  await response.json();
    return data;
}

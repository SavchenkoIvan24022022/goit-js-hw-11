const API_KEY = "46388480-c15d12bd9d9852ccc018edcf5";
const BASE_URL = "https://pixabay.com/api/"

export function fetchImages (q) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`;
    return fetch(url) 
    .then((response)=>response.json())
    .catch((error)=>{
        throw error;
    })
}

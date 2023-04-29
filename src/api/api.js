import axios from "axios";

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// axios.defaults.baseUrl = "https://pixabay.com/api/";
const baseUrl = "https://pixabay.com/api/";
const API_KEY = "34526250-d4c92221e4f75204ff5bed4fd";
const SEARCH_OPTIONS = "image_type=photo&orientation=horizontal";
// export const LIMIT = 40;
    
// export async function fetchSearchQuery(searchQuery, pageNumber) {
//     try {
//         return await axios.get(`${baseUrl}?key=${API_KEY}&q=${searchQuery}&${SEARCH_OPTIONS}&page=${pageNumber}&per_page=${LIMIT}`);
      
//         // console.log(result)
//     } catch (error) {
//         console.error(error);
//     }
// }
export const fetchImagesWithQuery = async (searchQuery, pageNumber) => {
  console.log(pageNumber)
    return axios.get(`${baseUrl}?q=${searchQuery}&page=${pageNumber}&key=${API_KEY}&${SEARCH_OPTIONS}&per_page=12`);
    // https://pixabay.com/api/?q=cat&page=1&key=34526250-d4c92221e4f75204ff5bed4fd&image_type=photo&orientation=horizontal&per_page=12
    // console.log(response)
    // return response;
};

export default {
  fetchImagesWithQuery,
};
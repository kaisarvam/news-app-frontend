const apiKey = process.env.REACT_APP_NEWS_API_KEY;
const baseUrl = process.env.REACT_APP_NEWS_BASE_URL;


// export const getAllNews = ()=>{
//      const URL = `${baseUrl}/everything?q=apple&from=2022-11-30&to=2022-11-30&sortBy=popularity&apiKey=${apiKey}`  
//     return URL;
// }



export const getAllNews = (country,category,page,pageSize,searchText)=>{
    const URL = `${baseUrl}/top-headlines?country=${country}&category=${category}&q=${searchText}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`  
   return URL;
}
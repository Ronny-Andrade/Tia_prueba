export const getReviews = async()=>{

    const url = 'http://127.0.0.1:8000/API/reviews/';
    const resp = await fetch(url);
    const {reviews} = await resp.json();
    
   
    return reviews;
}
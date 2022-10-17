import {useEffect, useState} from 'react';
import {getReviews} from '../helpers/getReviews'

export const useReview = () => {

const [isLoading, setisLoading] = useState(true);
const [review, setreview] = useState([]);

useEffect(() => {
  //Carga de review
  getReviews()
  .then(rev =>{
    setisLoading(false);
    setreview(rev)
  })
},[])


  return{
    isLoading,
    review
  }
}

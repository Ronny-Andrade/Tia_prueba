import {useState} from 'react'
import { useReview } from '../hooks/useReview';
import { Grafic } from './Grafic';
import {Loading} from './Loading'




export const Page = () => {

  const {isLoading,review} = useReview();
  const [Page, setPage] = useState(0);
  const [Search, setSearch] = useState('');

  //Buscador de producto
  const reviewFilter = () =>{
    if(Search === 0)
      return review.slice(Page,Page+10);
    const fp = review.filter(rev=>rev.product.includes(Search.toUpperCase()));
    return fp.slice(Page,Page+10);
  }

  const reviewSearch = ({target}) =>{
    setPage(0);
    setSearch(target.value);
  }

  //Cambiar pagina
  const previousPage = () =>{
    if(Page>0)
    setPage(Page-10);
  }

  const nextPage = () =>{
    if(review.filter(rev=>rev.product.includes(Search)).length > Page+10){
      setPage(Page+10);
    }
  }
  //Max and Min
  let max = Math.max.apply(Math,reviewFilter().map( function({score}){return score}));
  let min = Math.min.apply(Math,reviewFilter().map( function({score}){return score}));

  //Promedio
  let ProJson = 0;
  let Score = reviewFilter().map(function({score}){return parseInt(score)});
  for(let i of Score){
    ProJson+=i;
  }
  let promedio = (ProJson/Score.length).toFixed(2);
  

  return (
    
    <div className='mt-5 '>
      {/* Imput para buscar un producto */}
    	<input 
      className='border-2 w-full p-2 mt-2 rounded-md'
      type="text" 
      placeholder='Search product...'
      value={Search}
      onChange={reviewSearch}
      />

      <div >
      {/* Tabla origanl */}
      <table className='table-auto p-3 w-full border-2 text-center border-black mt-5'>
        <thead className='border border-black'>
          <tr>
            <th className='border border-black'>ID</th>
            <th className='border border-black'>Product</th>
            <th className='border border-black'>User</th>
            <th className='border border-black'>Profile Name</th>
            <th className='border border-black'>Helpfulness</th>
            <th className='border border-black'>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            reviewFilter().map(({id,product,userR,profileName,helpfulness,score}) => (
            <tr key={id}>
              <td className='border border-black'>{id}</td>
              <td className='border border-black'>{product}</td>
              <td className='border border-black'>{userR}</td>
              <td className='border border-black'>{profileName}</td>
              <td className='border border-black'>{helpfulness}</td>
              <td className='border border-black'>{score}</td>
            </tr>
            ))
          }
        </tbody>
      </table>


      <p className='text-lg mt-1 text-center  font-semibold'>cantidad de usuarios:{reviewFilter().length} </p>      
      <p className='text-lg  text-center font-semibold'>Maximo: {max} y minimo: {min} </p>
      <p className='text-lg  text-center font-semibold'>Promedio score:{promedio} </p>
      {
        isLoading && <Loading/>
      }
      </div>

      <div className='inline-flex '>
        <button className='bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-1' onClick={previousPage}>
          Prev
        </button>
        <button className='bg-white  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-1' onClick={nextPage}>
          Next
        </button>  
      </div>

      <div>
        <hr className='bg-black'/>
        <Grafic review={reviewFilter()}/>
      </div>

      

    

    </div>  
   

   
   
  )
}

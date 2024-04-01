import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import './projects.scss'
import {firestore} from '../../firebase/firebase'
import {collection, getDocs } from 'firebase/firestore/lite';
import Anime from '../animatedLetters/anime';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [projects, setProjects] = useState([]);

    useEffect(() => {
     const timer = setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)

       return ()=> {
        clearTimeout(timer)
       }
     })

   

     const getProjects =  async () => {
      const querySnapshot =  await getDocs(collection(firestore, 'projects'));
      setProjects( querySnapshot.docs.map((doc)=> doc.data()))
     }
     useEffect(()=> {
      getProjects();
 },[])
   
     const renderPortfolio = (portfolio)=> {
      return(
        <>
           <div className='images-container'>
                {
                  portfolio.map((portf, index)=> {
                    return(
                      <div key={index} className='image_box'> 
                         <img 
                             src={portf.image} 
                             alt='projects_image'
                             className='projects_image'   
                          />

                          <div className='content'>
                              <p className='title'>{portf.name}</p>
                              <h4 className='description'>{portf.description}</h4>
                              <button 
                               className='btn'
                               onClick={()=> window.open(portf.url)}
                              >
                                Visit
                              </button>
                          </div>
                      </div>
                    )
                  })
                }
           </div>
        </>
      )
     }


  return (
    <>
     <div className='container projects-page'>
          <h1 className='page-title'>
            <Anime
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's','!',]}
              idx={12}
            />
          </h1>

        <div className='projects_container'>
             {renderPortfolio(projects)}
        </div>
     </div>

      <Loader type='ball-spin-fade-loader' />
    </>
  )
}

export default Projects

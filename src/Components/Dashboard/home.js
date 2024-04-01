import { useRef } from 'react'
import { auth, firestore, storgae} from '../../firebase/firebase'
import './dashboard.scss'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore/lite';
const Home = () => {
    const form = useRef();

    const submitProject = (e) => {
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];

        const storageRef = ref(storgae, `projects/${image.name}`);
        uploadBytes(storageRef, image).then(
          (snapshot)=> {
             getDownloadURL(snapshot.ref).then((downloadUrl) => {
                saveProject({
                    name,
                    description,
                    url,
                    image: downloadUrl
                })
             }, (error)=> {
                console.log(error)
                saveProject({
                    name,
                    description,
                    url,
                    image: null
                })
              })
          }, (error)=> {
            console.log(error)
            saveProject({
                name,
                description,
                url,
                image: null
            })
          }
        )
    }

    const saveProject = async (project) => {
        try{
             await addDoc(collection(firestore, 'projects'), project);
             window.location.reload(false);
        }catch(error){
            alert(error)
        }
    }

  return (
    <div className='uploadingContainer'>
        <div className='uploadTitle'>
            <h1>Upload Project</h1>
        </div>
      <form ref={form} onSubmit={submitProject}>
          <p><input type='text' placeholder='Project name' className='projectinputs'/></p>
          <p><textarea type='text' placeholder='Descrtiption'/></p>
          <p><input type='text' placeholder='https://URL' className='projectinputs'/></p>
          <p><input type='file' placeholder='choose' className='uploadFile'/></p> 
          <button onClick={()=> auth.signOut()} className='signout'>Sign out</button>
          <button type='submit' className='upload'>Upload</button>
      </form>
    </div>
  )
}

export default Home

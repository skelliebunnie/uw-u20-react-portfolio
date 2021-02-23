import { useState, useEffect } from 'react'
import Image from '../components/Image';

export default function Gallery() {
  const [imageList, setImageList] = useState([]);

  // https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
  const getImages = () => {
    fetch('./imageList.json',
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
    .then(res => {
      // console.log(res);
      return res.json();
    })
    .then(json => {
      // console.log(json);
      setImageList(json);
    });
  }
  
  // gets image list on page load
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div name="gallery" id="gallery" className="grid grid-cols-1 md:grid-cols-2 px-4 py-4">
      {imageList.map(imageData => 
        <Image key={imageData.key} fileName={imageData.fileName} alt={imageData.alt} title={imageData.title} description={imageData.description}>
          <p className="flex-0 flex flex-row flex-wrap justify-around">
            <a href={imageData.live} target="_blank" rel="noreferrer" className="w-4/5 text-center my-2 md:w-auto text-white bg-infrared-400 hover:bg-grape-400 px-8 py-2 rounded-lg"><i className="fas fa-external-link-square"></i> Deployed App</a>
            <a href={imageData.github} target="_blank" rel="noreferrer" className="w-4/5 text-center my-2 md:w-auto text-white bg-infrared-400 hover:bg-grape-400 px-8 py-2 rounded-lg"><i className="fab fa-github"></i> GitHub Repo</a>
          </p>
        </Image>
      )}
    </div>
  )
}

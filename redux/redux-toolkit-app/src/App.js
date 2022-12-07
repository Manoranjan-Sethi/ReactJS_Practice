import "./App.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhotos } from "./galleryState";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  console.log(photos);

  return (
    <>
      <div className="App">
        <h1>Photo Gallery</h1>
        <p>Made With Redux-toolkit ❤️</p>
        <hr />
        <div className="grid">
          {photos.map((photo) => (
            <div>
              <img key={photo.id} src={photo.download_url} />
              <p>{photo.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import { IonContent, IonHeader, IonImg, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import image1 from './assets/astronomy-1867616_1280.jpg';
import image2 from './assets/bird-6062768_1280.jpg';
import image3 from './assets/kingfisher-881594_1280.jpg';
import image4 from './assets/milky-way-984050_1280.jpg';

const Home: React.FC = () => {
  const images = [image1, image2, image3, image4]
  const slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Image Slider</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSlides pager={true} options={slideOpts}>
          {images.map((item, index) => {
            return (
              <IonSlide key={index}>
                <IonImg style={{height: 300, objectFit: 'cover'}} src={item} />
              </IonSlide>
            );
          })}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Home;

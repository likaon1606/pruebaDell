import 'aframe';
import { Entity, Scene } from 'aframe-react';
import React from 'react';

const Video360 = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Scene embedded style={{ width: '100%', height: '100%' }}>
        <a-assets>
          <video
            id='video360'
            autoPlay
            loop
            crossOrigin='anonymous'
            controls
            src='https://dellvirtualtourbrazil.blob.core.windows.net/videos/07_SECOND_TOUCH_IMAGE_TEST.mp4'
          />
        </a-assets>
        <Entity
          primitive='a-video'
          src='#video360'
          width='16' // Ajusta el ancho del video aquí
          height='9' // Ajusta la altura del video aquí
          position='0 1.6 -4' // Ajusta la posición del video aquí
        />
        <Entity primitive='a-camera' position='0 1.6 0'>
          <Entity primitive='a-cursor' />
        </Entity>
      </Scene>
    </div>
  );
};

export default Video360;

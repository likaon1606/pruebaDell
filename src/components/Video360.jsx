import 'aframe';
import { Entity, Scene } from 'aframe-react';
import React from 'react';

const Video360 = () => {
  return (
    <div style={{ width: '500px', height: '500px', position: 'relative' }}>
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
          primitive='a-videosphere'
          src='#video360'
          radius='5'
          scale='0.5 0.5 0.5'
        />
        <Entity primitive='a-camera' position='0 0 0.1'>
          <Entity primitive='a-cursor' />
        </Entity>
      </Scene>
    </div>
  );
};

export default Video360;

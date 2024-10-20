import React, { useEffect, useRef } from 'react';
import './PanoramaViewer.css';
import * as PANOLENS from 'panolens';

const PanoramaViewer = ({ imageSrc = 'Images/pano.jpg', height = '250px', title = 'Panorama Title', }) => {
  const panoramaRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    const image = new Image();
    
    // Preload the image
    image.src = imageSrc;
    
    image.onload = () => {
      // Only create the panorama once the image has loaded
      if (!viewerRef.current) {
        const panorama = new PANOLENS.ImagePanorama(imageSrc);
        
        // Create a Viewer and attach it to the div
        viewerRef.current = new PANOLENS.Viewer({
          container: panoramaRef.current, // Attach to the div
          autoRotate: true,
          autoRotateSpeed: 0.5,
          controlBar: true,
        controlButtons: [ 'fullscreen', ],
        });
        
        // Add the panorama image to the viewer
        viewerRef.current.add(panorama);
      }
    };
    
    // Clean up the viewer when the component unmounts
    return () => {
      if (viewerRef.current) {
        viewerRef.current.dispose();
        viewerRef.current = null;  // Clear the reference to avoid memory leaks
      }
    };
  }, [imageSrc]); // Run the effect only when imageSrc changes

  return (
    <div className="panorama-container" style={{ position: 'relative' }}>
      <div
        className='rounded-5 pano'
        ref={panoramaRef}
        style={{
          width: '100%',
          height,  // Dynamic height, passed as a prop or default
          position: 'relative',
        }}
      />
      {/* Title Overlay */}
      <div className="panorama-title">
        {title}
      </div>
    </div>
  );
};

export default PanoramaViewer;

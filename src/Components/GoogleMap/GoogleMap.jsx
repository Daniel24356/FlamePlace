import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios"

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};



const GoogleMapComponent = () => {

  const address = "FAME'S PLACE  Castle of Comfort 19 Eze Ihunwo Eze Ogbonda street, off Circular road, woji, PH, Rivers State, Nigeria";
  
  const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 });

  const apiKey = "AIzaSyArGGPXUzgv_bQWV8wmDx8k9RhR3CowGmE"; 

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=${apiKey}`
        );

        if (response.data.results.length > 0) {
          const { lat, lng } = response.data.results[0].geometry.location;
          setLocation({ lat, lng });
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchCoordinates();
  }, [address]);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={location} zoom={14}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749, // Default latitude (San Francisco)
  lng: -122.4194, // Default longitude
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey=" AIzaSyArGGPXUzgv_bQWV8wmDx8k9RhR3CowGmE">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;

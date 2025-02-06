import React, { useEffect } from 'react'
import {
    MapContainer,
    Marker,  
    Polyline,  
    Popup,
    TileLayer,
  } from "react-leaflet";
  
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from 'react-redux';
import { getIcon} from '../utils/constant';
import {clearRoute, open} from "../redux/slices/detailSlice";
import { getFlights } from '../redux/actions';






const Map = () => {

 const dispatch =  useDispatch();
 const { flights }  = useSelector((store)=>store.flight);
 const { route }  = useSelector((store)=>store.detail);

 useEffect(() => {
  // her 5 saniyede bir api'dan güncel verileri al
  const id = setInterval(() => dispatch(getFlights()), 10000);

  // componentWillUnmount anında interval'ı durdur
  return () => clearInterval(id);
}, []);

 
 

  return (
    <MapContainer center={[38.908216, 35.424321]} zoom={6} scrollWheelZoom={false}>
    <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

    />

    
    {flights.map((fligth, key)=>
       <Marker key={key} position={[fligth.lat, fligth.lng] }
       icon={getIcon(fligth.deg)}

       
       >
        
       <Popup>
         <div className='popup'>
          <span>kod:{fligth.code} </span>
          <button onClick={()=>dispatch(open(fligth.id))} >detay</button>
       
       {route &&( <button onClick={()=>dispatch(clearRoute())}> Rotayı Temizle </button> )}  

         </div>
       </Popup>
      
     </Marker>
    )}
   
      {route && <Polyline positions={route} /> }
  </MapContainer>
  )
}

export default Map
import React, { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import * as ELG from "esri-leaflet-geocoder"
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
let DefaultIcon = L.icon({
    iconUrl:icon, shadowUrl:iconShadow
})
L.Marker.prototype.options.icon=DefaultIcon

function GeoCoderMarker({address}) {
    const map=useMap()
    console.log(address)
    const [position,setPosition]=useState([60,19])
    useEffect(()=>{
      ELG.geocode({apikey:"AAPK85b1ed2c43294675a4463b5fb9c9c350YJKLr0Y3tFNySca1WlVeoLJx397TURUTcrUHB55FagTGn8UorfyV_kHXcpEx20Da"}).text(address).run((err,results,response)=>{
        if(results?.results?.length>0){
            const {lat, lng} =results?.results[0].latlng
            setPosition([lat,lng])
            map.flyTo([lat,lng],16)
        }
        else{
            console.log("Endereço não encontrado")
        
        }
      })
    },[address])
  return (
    <Marker position={position} icon={DefaultIcon} >
        <Popup/>
    </Marker>
  )
}

export default GeoCoderMarker
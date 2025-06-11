"use client";

import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './map.css';



interface MapProps {
    destination_lng: number;
    destination_lat: number;
    current_lat: number;
    current_lng: number;
}



export default function Map({destination_lat, destination_lng, current_lat, current_lng}: MapProps) {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<maptilersdk.Map | null>(null);
    const location = { lng: current_lng, lat: current_lat };
    const zoom = 14;

    maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY || "";

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.HYBRID,
            center: [location.lng, location.lat],
            zoom: zoom,
        });

        // Marker 1: Courier
        new maptilersdk.Marker({ color: '#FF0000' }) // Red
            .setLngLat([location.lng, location.lat])
            .setPopup(new maptilersdk.Popup().setText("Courier Location"))
            .addTo(map.current);

        // Marker 2: Recipient
        const recipientLocation = { lng: destination_lng, lat: destination_lat };
        new maptilersdk.Marker({ color: '#0000FF' }) // Blue
            .setLngLat([recipientLocation.lng, recipientLocation.lat])
            .setPopup(new maptilersdk.Popup().setText("Recipient Location"))
            .addTo(map.current);






    }, [destination_lat, destination_lng, location.lat, location.lng]);



    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}

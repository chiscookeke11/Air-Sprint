"use client";

import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './map.css';

export default function Map() {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<maptilersdk.Map | null>(null);
    const location = { lng: 7.3958, lat: 6.8570 };
    const zoom = 14;

    maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY || "";

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [location.lng, location.lat],
            zoom: zoom,
        });

        // Marker 1: Courier
        new maptilersdk.Marker({ color: '#FF0000' }) // Red
            .setLngLat([location.lng, location.lat])
            .setPopup(new maptilersdk.Popup().setText("Courier Location"))
            .addTo(map.current);

        // Marker 2: Recipient
        const recipientLocation = { lng: 7.4100, lat: 6.8700 };
        new maptilersdk.Marker({ color: '#0000FF' }) // Blue
            .setLngLat([recipientLocation.lng, recipientLocation.lat])
            .setPopup(new maptilersdk.Popup().setText("Recipient Location"))
            .addTo(map.current);






    }, []);



    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}

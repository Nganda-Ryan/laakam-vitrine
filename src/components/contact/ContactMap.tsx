"use client";

import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";

export function ContactMap() {
  useEffect(() => {
    async function initMap() {
      const L = await import("leaflet");

      const container = document.getElementById("contact-map") as HTMLElement & { _leaflet_id?: number };
      if (container && container._leaflet_id) {
        container._leaflet_id = undefined;
      }

      const map = L.map("contact-map").setView([45.4642, 9.19], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      const customIcon = L.divIcon({
        className: "custom-marker",
        html: `<div class="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      L.marker([45.4642, 9.19], { icon: customIcon })
        .addTo(map)
        .bindPopup("Milano, Lombardia, Italia")
        .openPopup();

      return map;
    }

    let mapInstance: L.Map | undefined;
    initMap().then((map) => {
      mapInstance = map;
    });

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <style jsx>{`
        .leaflet-container {
          z-index: 1;
        }
        .custom-marker {
          background: transparent;
          border: none;
        }
      `}</style>
      <div id="contact-map" className="h-full w-full" />
    </section>
  );
}

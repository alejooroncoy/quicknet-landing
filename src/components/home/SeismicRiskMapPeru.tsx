import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface RiskPoint {
  id: number
  lat: number
  lng: number
  risk: 'Alto' | 'Moderado' | 'Bajo'
  city: string
  population: number
}

const samplePointsPeru: RiskPoint[] = [
  { id: 1, lat: -12.0464, lng: -77.0428, risk: 'Alto', city: 'Lima', population: 9674755 },
  { id: 2, lat: -16.3988, lng: -71.5350, risk: 'Alto', city: 'Arequipa', population: 1008290 },
  { id: 3, lat: -6.7711, lng: -79.8441, risk: 'Moderado', city: 'Chiclayo', population: 552508 },
  { id: 4, lat: -9.1900, lng: -75.9988, risk: 'Bajo', city: 'Huánuco', population: 120000 },
  { id: 5, lat: -3.7437, lng: -73.2516, risk: 'Bajo', city: 'Iquitos', population: 437376 },
]

const createIcon = (color: string) => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
}

const SeismicRiskMapPeru = () => {
  const [points, setPoints] = useState<RiskPoint[]>([])

  useEffect(() => {
    setPoints(samplePointsPeru)
  }, [])

  return (
    <MapContainer center={[-9.1900, -75.0152]} zoom={5} className="h-full z-10">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {points.map((point) => (
          <Marker
            key={point.id}
            position={[point.lat, point.lng]}
            icon={createIcon(point.risk === 'Alto' ? 'red' : point.risk === 'Moderado' ? 'orange' : 'green')}
            eventHandlers={{
              mouseover: (e) => {
                e.target.openPopup()
              },
              mouseout: (e) => {
                e.target.closePopup()
              }
            }}
          >
            <Popup>
              <strong>{point.city}</strong><br />
              Riesgo Sísmico: {point.risk}<br />
              Población: {point.population.toLocaleString()}
            </Popup>
            <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
              {point.city}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
  )
}

export default SeismicRiskMapPeru;
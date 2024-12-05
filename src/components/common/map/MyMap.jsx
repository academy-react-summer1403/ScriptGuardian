// MyMap component
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
const ChangeMarkerPosition = ({ setMarkerPosition }) => {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      setMarkerPosition({
        initialLatitude: parseFloat(lat),
        initialLongitude: parseFloat(lng),
      });
    },
  });

  return null;
};

const MyMap = ({ markerPosition, setMarkerPosition }) => {
  console.log(markerPosition, "markerPosition in MyMap");

  return (
    <MapContainer
      center={[markerPosition.initialLatitude, markerPosition.initialLongitude]}
      zoom={6}
      style={{
        height: "200px",
        width: "940px",
        borderRadius: "8px",
        direction: "rtl",
        marginRight:"8px"
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker
        position={[
          markerPosition.initialLatitude,
          markerPosition.initialLongitude,
        ]}
      >
        <Popup>آدرس خانه</Popup>
      </Marker>

      <ChangeMarkerPosition setMarkerPosition={setMarkerPosition} />
    </MapContainer>
  );
};

export { MyMap };

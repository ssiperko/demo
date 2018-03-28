import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCKfOS9Pzg70CKA-ZaYL0nFKiAJ8Ae2KME&v=3.exp&libraries=geometry,drawing,places",

    loadingElement: <div style={{ height: `100%` , maxWidth: '100%' ,  marginLeft: '17vw'}} />,
    containerElement: <div style={{ height: `400px`,  maxWidth: '80%', marginBottom: '-1vh' , marginLeft: '17vw'}} />,
    mapElement: <div style={{ height: `100%` , maxWidth: '80%' ,  margin: '0'}} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 43.085248, lng: -79.059297 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 43.085248, lng: -79.059297 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
);


export class Map extends React.PureComponent {
  state = {
    isMarkerShown: true,
  }

  componentDidMount() {
    //this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

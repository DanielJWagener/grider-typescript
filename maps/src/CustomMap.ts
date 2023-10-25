/// <reference types="@types/google.maps" />

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(map: google.maps.Map) {
    this.googleMap = map;
  }

  static async initializeMap(divId: string): Promise<CustomMap> {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const customMap = new Map(document.getElementById(divId) as HTMLElement, {
      center: { lat: 0, lng: 0 },
      zoom: 1
    });
    return new CustomMap(customMap);
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}

/// <reference types="@types/google.maps" />

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
}

import { Injectable } from "@nestjs/common";

import { Location } from "@prisma/client";

import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
const mapboxGeocodingService = mbxGeocoding({
  accessToken: process.env.MAPBOX_TOKEN,
});

@Injectable()
export class MapboxService {
  async getLocationsByName(
    query: string | null | undefined,
    limit?: number | undefined | null
  ): Promise<Location[]> {
    if (!query) {
      return [];
    } else {
      const match = (
        await mapboxGeocodingService
          .forwardGeocode({
            query: query,
            limit: limit || 10,
            types: [
              "country",
              "region",
              "postcode",
              "district",
              "place",
              "locality",
              "neighborhood",
              "address",
              "poi",
              "poi.landmark",
            ],
          })
          .send()
      ).body;

      return match.features.map((feature) => ({
        id: feature.id,
        name: feature.place_name,
        longitude: feature.center[0],
        latitude: feature.center[1],
      })) as Location[];
    }
  }
}

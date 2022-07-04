import { Args, Query, Resolver } from "@nestjs/graphql";

import { MapboxLocation } from "./models/mapbox-location.model";
import { MapboxService } from "./mapbox.service";
import { MapboxLocationFilterInput } from "./dto/mapbox-location-filter.input";

@Resolver(() => MapboxLocation)
export class MapboxResolver {
  //   constructor(private readonly recipesService: RecipesService) {}

  constructor(private readonly mapboxService: MapboxService) {}
  @Query(() => [MapboxLocation])
  mapboxLocations(
    @Args("filter") filter: MapboxLocationFilterInput
  ): Promise<MapboxLocation[]> {
    return this.mapboxService.getLocationsByName(
      filter.locationName,
      filter.limit
    );
  }
}

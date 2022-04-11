import { Module } from "@nestjs/common";
import { MapboxModule } from "src/mapbox/mapbox.module";
import { LocationsService } from "./locations.service";

@Module({
  providers: [LocationsService],
  imports: [MapboxModule],
  exports: [LocationsService],
})
export class LocationsModule {}

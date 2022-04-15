import { Module } from "@nestjs/common";
import { MapboxResolver } from "./mapbox.resolver";
import { MapboxService } from "./mapbox.service";

@Module({
  providers: [MapboxService, MapboxResolver],
  exports: [MapboxService],
})
export class MapboxModule {}

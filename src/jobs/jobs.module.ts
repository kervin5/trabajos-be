import { Module } from "@nestjs/common";
import { LocationsModule } from "src/locations/locations.module";
import { JobsResolver } from "./jobs.resolver";
import { JobsService } from "./jobs.service";

@Module({
  providers: [JobsResolver, JobsService],
  imports: [LocationsModule],
})
export class JobsModule {}

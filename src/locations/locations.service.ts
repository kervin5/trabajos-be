import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MapboxService } from "src/mapbox/mapbox.service";
import { Location } from "src/@generated/prisma-nestjs-graphql/location/location.model";

@Injectable()
export class LocationsService {
  constructor(
    private readonly mapboxService: MapboxService,
    private readonly prismaService: PrismaService
  ) {}

  async findOrCreateLocationByName(name: string): Promise<Location> {
    let existingLocation = await this.prismaService.location.findFirst({
      where: { name: name },
    });

    const location =
      existingLocation ??
      (await (async () => {
        const locationData = (
          await this.mapboxService.getLocationsByName(name)
        )?.[0];

        existingLocation = await this.prismaService.location.findFirst({
          where: { name: locationData.name },
        });

        return (
          existingLocation ??
          (await this.prismaService.location.create({
            data: { ...locationData },
          }))
        );
      })());

    return location;
  }
}

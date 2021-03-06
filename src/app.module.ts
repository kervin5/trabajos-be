import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { DirectiveLocation, GraphQLDirective } from "graphql";
// import { upperDirectiveTransformer } from "./common/directives/upper-case.directive";
import { PrismaModule } from "nestjs-prisma";
import { RecipesModule } from "./modules/recipes/recipes.module";
import { UsersModule } from "./modules/users/users.module";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { AuthModule } from "./modules/auth/auth.module";
import { JobsModule } from "./modules/jobs/jobs.module";
import { LocationsModule } from "./modules/locations/locations.module";
import { MapboxModule } from "./modules/mapbox/mapbox.module";
import { upperDirectiveTransformer } from "./common/directives/upper-case.directive";

export const isProduction = process.env.NODE_ENV === "production";
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      transformSchema: (schema) => upperDirectiveTransformer(schema, "upper"),
      installSubscriptionHandlers: true,
      playground: false,
      debug: true,
      introspection: !isProduction,
      cache: isProduction ? "bounded" : undefined,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: "upper",
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
      plugins: [
        isProduction
          ? ApolloServerPluginLandingPageProductionDefault({
              graphRef: "my-graph-id@my-graph-variant",

              footer: false,
            })
          : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
      ],
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    JobsModule,
    LocationsModule,
    MapboxModule,
  ],
})
export class AppModule {}

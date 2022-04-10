import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { DirectiveLocation, GraphQLDirective } from "graphql";
import { upperDirectiveTransformer } from "./common/directives/upper-case.directive";
import { PrismaModule } from "nestjs-prisma";
import { RecipesModule } from "./recipes/recipes.module";
import { UsersModule } from "./users/users.module";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { AuthModule } from "./auth/auth.module";
import { JobsModule } from "./jobs/jobs.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      transformSchema: (schema) => upperDirectiveTransformer(schema, "upper"),
      installSubscriptionHandlers: true,
      playground: false,
      debug: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: "upper",
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
      plugins: [
        process.env.NODE_ENV === "production"
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
  ],
})
export class AppModule {}

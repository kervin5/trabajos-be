import { NotFoundException, UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";

import { PubSub } from "graphql-subscriptions";
import { PrismaService } from "nestjs-prisma";
import { CreateOneUserArgs } from "src/@generated/prisma-nestjs-graphql/user/create-one-user.args";
import { FindManyUserArgs } from "src/@generated/prisma-nestjs-graphql/user/find-many-user.args";
import { UserWhereInput } from "src/@generated/prisma-nestjs-graphql/user/user-where.input";
import { User } from "src/@generated/prisma-nestjs-graphql/user/user.model";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { UsersService } from "./users.service";
// import { NewRecipeInput } from "./dto/new-recipe.input";
// import { RecipesArgs } from "./dto/recipes.args";
// import { Recipe } from "./models/recipe.model";
// import { RecipesService } from "./recipes.service";

const pubSub = new PubSub();

@Resolver(() => User)
export class UsersResolver {
  //   constructor(private readonly recipesService: RecipesService) {}

  constructor(
    private readonly prismaService: PrismaService,
    private readonly usersService: UsersService
  ) {}

  @Query(() => User)
  async user(@Args("id") id: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Query(() => [User])
  @UseGuards(JwtAuthGuard)
  users(@Args() args: FindManyUserArgs): Promise<User[]> {
    return this.usersService.findMany(args.where);
  }

  //   @Mutation((returns) => User)
  //   async addRecipe(
  //     @Args("newRecipeData") newRecipeData: CreateOneUserArgs
  //   ): Promise<User> {
  //     const recipe = await this.recipesService.create(newRecipeData);
  //     pubSub.publish("recipeAdded", { recipeAdded: recipe });
  //     return recipe;
  //   }

  //   @Mutation((returns) => Boolean)
  //   async removeRecipe(@Args("id") id: string) {
  //     return this.recipesService.remove(id);
  //   }

  //   @Subscription((returns) => User)
  //   recipeAdded() {
  //     return pubSub.asyncIterator("recipeAdded");
  //   }
}

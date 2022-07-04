import { InputType } from "@nestjs/graphql";

import { JobOrderByWithAggregationInput as PrismaJobOrderByWithAggregationInput } from "../../../@generated/prisma-nestjs-graphql/job/job-order-by-with-aggregation.input";

@InputType()
export class JobOrderByInput extends PrismaJobOrderByWithAggregationInput {}

import { Module } from '@nestjs/common';
import { JobsResolver } from './jobs.resolver';
import { JobsService } from './jobs.service';

@Module({
  providers: [JobsResolver, JobsService]
})
export class JobsModule {}

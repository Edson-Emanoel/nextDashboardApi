import { PrismaClient } from '@prisma/client';
import { Global, Injectable, OnModuleInit } from '@nestjs/common';

@Global()
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
      async onModuleInit() {
            await this.$connect();
      }
}
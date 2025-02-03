import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [DbModule, ClientesModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
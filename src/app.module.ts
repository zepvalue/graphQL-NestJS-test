import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:
        'postgres://hfuieeos:f9smKDnqp5NDTrF9h-QPe2CKKRnaupYR@suleiman.db.elephantsql.com:5432/hfuieeos',
      port: 3306,
      name: 'default',
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
  ],
  providers: [AppGateway],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
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
        'postgres://qbiehldw:AsDKYAGR0L9gw-XikMPGEBoloVzKnZfb@suleiman.db.elephantsql.com:5432/qbiehldw',
      port: 3306,
      name: 'default',
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
  ],
})
export class AppModule {}

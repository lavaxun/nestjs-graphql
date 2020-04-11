import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductImageResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({ req, res }) => ({ req, res }),
      playground: true,
      debug: true,
      introspection: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ProductImageResolver],
})
export class AppModule {}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { Middleware } from './middleware/middleware';

@Module({
  providers: [],
  controllers: [],
  imports: [AuthModule,]
})
export class AppUserModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Middleware)
  }
}

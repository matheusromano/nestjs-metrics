import { LoggingInterceptor } from '@algoan/nestjs-logging-interceptor';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [PrometheusModule.register()],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  }],
})
export class AppModule {}

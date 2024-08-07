import { Module } from '@nestjs/common';
import { WookieApiClient } from './services/wookie-api.client';

@Module({
    providers:[WookieApiClient]
})
export class WookieApiModule {}

import { Controller, Get, Query } from '@nestjs/common';

@Controller('info')
export class InfoController {
  @Get('weather')
  weather(@Query('city') city: string) {
    return { city, weather: 'sunny' };
  }

  @Get('currency')
  currency(@Query('base') base: string, @Query('target') target: string) {
    return { base, target, rate: 1 };
  }

  @Get('timezone')
  timezone(@Query('city') city: string) {
    return { city, timezone: 'UTC' };
  }
}

import { Controller, Get } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';

@Controller('proovedores')
export class TrackController {
    
constructor(private readonly trackService: TrackService) {}

  @Get("nuevos")
  getTracks(): Promise <Track[]> {
    return this.trackService.getTracks();
  }
  
}

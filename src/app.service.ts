import { Injectable } from '@nestjs/common';
import { Track } from './track/track.interface';
import { TrackService } from './track/track.service';


@Injectable()
export class AppService {
  getTracks(): string {
    return "hola";
  }
}

// export interface iTrack{
// id:number
// title:string
// duracion:number
// artist:string
// }
// export const tracks: iTrack[] =[
// {id:1,
// title:"cancion 1",
// duracion:120,
// artist:"interptrete1"
// },
// {id:2,
// title:"cancion 2",
// duracion:120,
// artist:"interptrete2"
// },
// {id:3,
// title:"cancion 3",
// duracion:120,
// artist:"interptrete3"
// }
// ]


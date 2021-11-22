import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('servicio listo');
   }

   getQuery( query: string ){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCyG421_KP9LcCy56Dde8R7MabYPRELuRVE-JPzn5RoLjxcba2woXRdZBE4X_aPuQOkg4dGjk0GKYKWPhM'
    });

    return this.http.get(url, { headers });
   }

   getNewReleases(){

    //esta api para ser usada debia cambiar los headers del token de autotización 
/*     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCwmvtSO6BTMd5yqiP32b8AKcFrFAeZWrsdrsZbgbsj9Lq_L2Fwpxx1pi2UP6dhWDJkVrw4SQqT8K9Rt9U'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
                    .pipe( map( data => data['albums'].items));  */ 

    // Forma optimizada de traer la data 
    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items)); 
   }

   getArtistas( termino: string ) {
    
/*     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCwmvtSO6BTMd5yqiP32b8AKcFrFAeZWrsdrsZbgbsj9Lq_L2Fwpxx1pi2UP6dhWDJkVrw4SQqT8K9Rt9U'
    });
    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`, {headers})
                    .pipe( map( data => data['artists'].items));  */
    // Forma optimizada de traer la data 
    return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=20`)
               .pipe( map( data => data['artists'].items)); 
   }

   getArtista( id: string ) {
    
    /*     const headers = new HttpHeaders({
          'Authorization': 'Bearer BQCwmvtSO6BTMd5yqiP32b8AKcFrFAeZWrsdrsZbgbsj9Lq_L2Fwpxx1pi2UP6dhWDJkVrw4SQqT8K9Rt9U'
        });
        return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`, {headers})
                        .pipe( map( data => data['artists'].items));  */
        // Forma optimizada de traer la data 
        return this.getQuery(`artists/${id}`);
                   //.pipe( map( data => data['artists'].items)); 
       }

   getTopTracks( id: string ) {
    
    /*     const headers = new HttpHeaders({
          'Authorization': 'Bearer BQCwmvtSO6BTMd5yqiP32b8AKcFrFAeZWrsdrsZbgbsj9Lq_L2Fwpxx1pi2UP6dhWDJkVrw4SQqT8K9Rt9U'
        });
        return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`, {headers})
                        .pipe( map( data => data['artists'].items));  */
        // Forma optimizada de traer la data 
        return this.getQuery(`artists/${id}/top-tracks?market=us`)
                   .pipe( map( data => data['tracks'])); 
       }
}

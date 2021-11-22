import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[] ): string {

    if( !images ){
      return 'assets/img/noimage.png'
    } 
    //si existe una imagen y es mayor a 0, muestre las imagenes
    if( images.length > 0 ){
      return images[0].url;
    }else{
      return 'assets/img/noimage.png'
    }
  }

}

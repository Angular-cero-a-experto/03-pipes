import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = false ): string {

    // let letras = value.split("");
    // if( activar ) {
    //   letras = letras.map( letra => {
    //     return letra.replace(letra, '*');
    //   });
    // }
    // return letras.join('');

    return ( activar ) ?  "*".repeat(value.length) :  value;
  }

}

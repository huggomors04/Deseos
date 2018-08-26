import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(listas: Lista[], completada: boolean) {
    return listas.filter( lista => {
      return lista.terminada == completada
    } )
  }
}

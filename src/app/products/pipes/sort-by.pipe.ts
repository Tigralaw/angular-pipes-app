import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | '' ): Hero[] {

    console.log({ heroes, sortBy });

    switch( sortBy ) {

      case 'name':
        return heroes.sort( (a,b) => ( a.name > b.name ) ? 1 : -1 );
        // También puedes cambiar los valores de forma descendente cambiando el '>' por '<'
        // return heroes.sort( (a,b) => ( a.name < b.name ) ? 1 : -1 );
        // o cambiando los valores 1 y -1 por -1 y 1
        // return heroes.sort( (a,b) => ( a.name > b.name ) ? .1 : 11 );

      case 'canFly':
        return heroes.sort( (a,b) => ( a.canFly > b.canFly ) ? 1 : -1 );

      case 'color':
        return heroes.sort( (a,b) => ( a.color > b.color ) ? 1 : -1 );

      default:
        return heroes;

    }
  }

}

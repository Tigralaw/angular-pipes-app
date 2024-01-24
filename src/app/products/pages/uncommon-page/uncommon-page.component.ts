import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Laura';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
  'female': 'invitarla'  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Dafnis', 'Luis Ángel', 'Suri', 'Héctor', 'Viri', 'Víctor', 'Toño'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'Tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift(); // Borra los elementos del arreglo clients empezando por el primero.
    // this.clients.pop(); // Borra los elementos del arreglo clients empezando por el último.
  }

  // KeyValuePipe
  public person = {
    name: 'Yesenia',
    age: 26,
    address: 'CDMX, México'
  }

  // Async Pipe
  // Se crea un observable que emite valores cada cierto tiempo asignado
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ) )
  );

  public promiseValue: Promise<string> =  new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.');
      console.log( 'Tenemos data en la promesa');
    }, 3500);
  })

}

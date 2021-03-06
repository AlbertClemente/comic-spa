import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  private heroes: Heroe[] = [
    {
      nombre: 'Aquaman',
      bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/aquaman.jpg',
      aparicion: '1941-11-01',
      casa:'DC'
    },
    {
      nombre: 'Batman',
      bio: 'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
      img: 'assets/img/batman.jpg',
      aparicion: '1939-05-01',
      casa:'DC'
    },
    {
      nombre: 'Daredevil',
      bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \'ver\' a través de un \'sexto sentido\' que le sirve como un radar similar al de los murciélagos.',
      img: 'assets/img/daredevil.jpg',
      aparicion: '1964-01-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Hulk',
      bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      img: 'assets/img/hulk.jpg',
      aparicion: '1962-05-01',
      casa:'Marvel'
    },
    {
      nombre: 'Linterna Verde',
      bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      img: 'assets/img/greenlantern.jpg',
      aparicion: '1940-06-01',
      casa: 'DC'
    },
    {
      nombre: 'Spider-Man',
      bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \'sentido arácnido\', que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      img: 'assets/img/spiderman.jpg',
      aparicion: '1962-08-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Wolverine',
      bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
      img: 'assets/img/wolverine.jpg',
      aparicion: '1974-11-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Ironman',
      bio: 'Durante su infancia fué conocido por tener una de las mentes mas brillantes del mundo y heredero de Indutrias Stark, se convirtió en un gran empresario e ingeniero que le llevó al éxito incrementando su fortuna, eso le llevó a tener una vida lujosa, caótica y extravagante vida llena de excesos. La vida de Stark da un repentino giro de 180 grados el día en el que es secuestrado por un grupo de terroristas y sufre una grave lesión debido a una gran explosión de la cual un fragmento de metralla se incrusta en su pecho y cada día va aproximándose mas a su corazón. Tras el impacto, es operado y recluido durante meses en un zulo, donde sus secuestradores le obligan a que les construya un arma de destrucción masiva. En lugar del arma, Tony Stark crea para si una armadura de acero para protegerse de los terroristas y poder escapar, con múltiples armas incorporadas a su medida. Después de volver a casa, decide dejar de fabricar armas que puedan hacer daño al mundo y en lugar de ello reconstruye y mejora su armadura, convirtiéndose así en Ironman.',
      img: 'assets/img/ironman.jpg',
      aparicion: '1963-03-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Superman',
      bio: 'El superhéroe más reconocido en la cultura pop, Superman ha sido elevado al estado mítico folkhero. El bebé Kal-El llegó a la Tierra desde el planeta moribundo Krypton y fue encontrado por una pareja de granjeros que lo nombró Clark Kent y lo crió como propio. Descubriendo sus enormes poderes, le inculcaron fuertes valores morales y lo inspiraron a convertirse en un héroe.',
      img: 'assets/img/superman.jpg',
      aparicion: '1938-04-18',
      casa: 'DC'
    }

  ];

  constructor() {
    console.log('Heroe Service listo');
  }

  getHeroes(): Heroe[] {
    return this.heroes;
  }

  getHeroe( idx: string) {
    return this.heroes[idx];
  }
}

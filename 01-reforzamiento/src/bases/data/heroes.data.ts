
export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

// type Owner = 'DC' | 'Marvel';
export enum Owner {
    DC = 'DC',
    Marvel = 'Marvel',
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    // owner: 'Marvel',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    // owner: 'DC',
    owner: Owner.DC
  },
  {
    id: 4,
    name: 'Flash',
    // owner: 'DC',
    owner: Owner.DC
  },
  {
    id: 5,
    name: 'Wolverine',
    // owner: 'Marvel',
    owner: Owner.Marvel
  },
  {
    id: 6,
    name: 'Green Lantern',
    // owner: 'DC'
    owner: Owner.DC
  }
];

// export default heroes;   //! Esto es CommonJS, en ESNext se recomienda usar export nombrados, no default export 
                            //! Solo se puede tener una exportación por default por archivo, no es recomendable usarlo, es mejor usar export nombrados

// export { heroes } //! Esto es una exportación nombrada, se puede tener varias exportaciones nombradas por archivo, es la forma recomendada de exportar en ESNext. En TS se recomienda usar export nombrados, no default export, para aprovechar mejor el sistema de tipos y la autocompletación.
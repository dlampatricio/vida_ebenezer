/*
  DATOS DEL NEGOCIO — Vida Ebenezer
  Edita únicamente este archivo para actualizar la información real.
  Los valores entre [corchetes] son marcadores de posición.
*/

export const BUSINESS = {
  name: 'Vida Ebenezer',
  tagline: 'Decoración de eventos',

  city: 'Cienfuegos, Cuba',
  foundedYear: 2018,

  address: '[Ave 68, entre 49 y 51 #4923, Cienfuegos]',
  // email: '[correo@vidaebenezer.com]',
  phone: '[+53 55763903]',
  phoneHref: '+53 55763903',
  hours: 'Lun–Sáb, 9 am – 6 pm',

  socials: {
    instagram: 'https://www.instagram.com/eben.ezer_decoraciones/',
    pinterest: '#',
    facebook: '#',
  },
} as const;

export const STATS = [
  { value: '100+', label: 'Eventos decorados' },
  { value: '98%', label: 'Clientes satisfechos' },
  {
    value: `${new Date().getFullYear() - BUSINESS.foundedYear}`,
    label: 'Años de experiencia',
  },
];

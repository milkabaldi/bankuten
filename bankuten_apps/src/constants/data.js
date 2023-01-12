import images from './images'

const reviews = [
  {
    face: images.Review1,
    name: 'Miroslava Ženíšková',
    date: '09 červen 2022',
    stars: '12345',
    text: 'Skvělá zkušenost. Rychle mi pojistili auto. Není nutné nikam volat, všechno se ... číst celou recenzi',
  },
  {
    face: images.Review2,
    name: 'Jiří Musil',
    date: '01 červen 2022',
    stars: '12345',
    text: 'Všechno mi bylo jasné, je to vysvětlené krok za krokem. Vybrali jsme pojištění p... číst celou recenzi',
  },
  {
    face: images.Review3,
    name: 'Petr Adamec',
    date: '05 červen 2022',
    stars: '12345',
    text: 'Je to moje první zkušenost, škoda, že jsme na stránku nenarazili dřív. Teď kone... číst celou recenzi',
  },
]



const propose = [
  {
    ima: images.Heart,
    description: 'Cestovní pojištění',
  },
  {
    ima: images.Plane,
     description: 'Životní pojištění',
  },
  {
    ima: images.Hospital,
     description: 'Pojištění nemovitosti',
  },
  {
    ima: images.House,
     description: 'Úrazové pojištěníс',
  },
]

const partners = [
{
  logo: images.Company1,
},
{
  logo: images.Company2,
},
{
  logo: images.Company3,
},
{
  logo: images.Company4,
},
{
  logo: images.Company5,
},
{
  logo: images.Company6,
},
{
  logo: images.Company7,
},
{
  logo: images.Company8,
},
{
  logo: images.Company9,
},
{
  logo: images.Company10,
},
{
  logo: images.Company11,
},


]

export default {
  reviews,
  partners,
  propose,
}

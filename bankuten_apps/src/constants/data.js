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


const mission = [
  {
    img: images.Icon2,
    title: 'Největší srovnávač',
    text: 'Srovnejte více než 2 tisíce nabídek',
  },
  {
    img: images.Icon1,
    title: 'Speciálně pro vás',
    text: 'Individuálně vyhodnotíme a najdeme nejlepší řešení',
  },
  {
    img: images.Icon3,
    title: 'Důvěřují nám',
    text: 'Tisíce zákazníků a desítky partnerů',
  },
  {
    img: images.Icon4,
    title: 'Registrace České národní banky',
    text: 'Všechny vaše údaje jsou v bezpečí',
  },
]

const numbers = [
  {
    img: images.Icon5,
    title: '50 000 000',
    text: 'korun ušetřených loni',
  },
  {
    img: images.Icon6,
    title: '10 let',
    text: 'na českém trhu',
  },
  {
    img: images.Icon7,
    title: '9 z 10',
    text: 'spokojených zákazníků',
  },
  {
    img: images.Icon8,
    title: '40+',
    text: 'spolupracuje s námi více než 40 poskytovatelů',
  },
]

export default {
  reviews,
  partners,
  propose,
  mission,
  numbers,
}


const ALBUMS=[
{id:"midnights",title:"Midnights",artist:"Taylor Swift",year:2022,cover:"https://placehold.co/500x500/263b29/a5e65a?text=Midnights",rating:5},
{id:"am",title:"AM",artist:"Arctic Monkeys",year:2013,cover:"https://placehold.co/500x500/20252b/f2f5ef?text=AM",rating:5},
{id:"melodrama",title:"Melodrama",artist:"Lorde",year:2017,cover:"https://placehold.co/500x500/443044/e6b8df?text=Melodrama",rating:5},
{id:"darkside",title:"The Dark Side of the Moon",artist:"Pink Floyd",year:1973,cover:"https://placehold.co/500x500/242424/a5e65a?text=Pink+Floyd",rating:5},
{id:"sour",title:"SOUR",artist:"Olivia Rodrigo",year:2021,cover:"https://placehold.co/500x500/443044/f5c6d6?text=SOUR",rating:4},
{id:"future",title:"Future Nostalgia",artist:"Dua Lipa",year:2020,cover:"https://placehold.co/500x500/273b4a/a5e65a?text=Future+Nostalgia",rating:4}
];
function safeText(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function albumCard(a){return `<div class="col-12 col-md-6 col-lg-3"><article class="music-card"><img class="cover" src="${safeText(a.cover)}" alt="${safeText(a.title)} cover" onerror="this.src='https://placehold.co/500x500/263b29/a5e65a?text=Album'"><div class="card-body"><h3 class="card-title">${safeText(a.title)}</h3><p class="artist">${safeText(a.artist)} · ${a.year}</p><span class="stars">${"★".repeat(a.rating||0)}${"☆".repeat(5-(a.rating||0))}</span></div></article></div>`;}

document.addEventListener("DOMContentLoaded",()=>{const el=document.getElementById("featuredAlbums");if(el)el.innerHTML=ALBUMS.slice(0,4).map(albumCard).join("");});

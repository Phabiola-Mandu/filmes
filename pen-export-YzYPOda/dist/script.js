var listaFilmes = [
  "https://br.web.img3.acsta.net/medias/nmedia/18/87/90/53/19962752.asp.jpg",
  "https://4.bp.blogspot.com/-ueXkpC4gUuM/WYXSS31xcXI/AAAAAAAAQ2Y/c6YatibTGowb1qFW_IBShmcqCqXVoIhFACLcBGAs/s1600/os-outros.jpg",
  "https://s2.glbimg.com/fCNS_fXPhGRwlpnAaQLzvGYC1y0=/362x536/https://s2.glbimg.com/UPI9xlM9R9O41YRqSO7R3hTNk_s=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/q/V/Avo9ISQQO3grnARi3JCA/2020-914-a-chegada-poster.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
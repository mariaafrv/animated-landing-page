/*Animação cookie*/

const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}})

tl.fromTo('.conteudo-principal', {scale: 0}, {scale:1})
tl.fromTo('.conteudo-principal-escrito', {opacity:0, x:-50}, {opacity: 1, x:0})
tl.fromTo('.imagem-principal', {x: 30, opacity: 0}, {x: 0, opacity: 1,}, '<')

tl.fromTo('.imagem-principal', {y:0, rotation: '0deg'}, {y: -20, rotation: '-20deg', yoyo: true, repeat: -1})

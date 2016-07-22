/*var numeros = [400,200,-23];

/*var numerosMas1=numeros.map(function(numero){
    return numero+1;
})*/
//var numerosMas1=numeros.map(n => n+1)
//console.log(numerosMas1);

var page= require('page');

var main =document.getElementById('main-container');
page('/', function(ctx, next){
  main.innerHTML='Home <a href="/signup">Signup</a>';
})

page('/signup', function(ctx, next){
    main.innerHTML='Signup  <a href="/">Home nelson</a>';
})

page() //iniciar page

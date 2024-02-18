const ataqueGolpe = function(){
    return "Atacando con golpe";
}

const ataqueRayo = function(){
    return "Atacando con rayo fulminante";
}

const ataqueMagiaOscura = function(){
    return "Atacando con magia oscura";
}

const ataqueFuego = function(){
    return "Atacando con bola de fuego";
}

const ataqueTierra = function(){
    return "Atacando con terremoto";
}

const ataqueAgua = function(){
    return "Atacando con maremoto";
}

const ataqueViento = function(){
    return "Atacando con torbellino atroz";
}

const atacar = function(funcionDeAtaque, objetivoDeAtaque){
    console.log(funcionDeAtaque(), "a", objetivoDeAtaque);
}

atacar(ataqueRayo, "Thor");
atacar(ataqueAgua, "Leviathan");
atacar(ataqueViento, "Zephyr");
atacar(ataqueMagiaOscura, "Belphegor");
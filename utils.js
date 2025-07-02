function generateRandomNum(){
    return Math.floor(Math.random() * 100) + 1;
}

function celToFahren(celcius){
    return(celcius*9)/5 + 32;
}

module.exports = {
    generateRandomNum,
    celToFahren,
}

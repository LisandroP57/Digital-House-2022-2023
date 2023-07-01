const dividir = function(a,b){
    if(a === 0 || b === 0){
        return "Disculpe, no se puede dividir por cero. Intente nuevamente."
    }else{
        return a / b
    }
}

module.exports = dividir
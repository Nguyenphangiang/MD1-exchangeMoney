function exchange(){
    let a= Number(document.getElementById('amount').value);
    let f= document.getElementById('from').value;
    let t= document.getElementById('to').value;
    let b
    if (f=='vietnam'&& t=='USD'){
        b = 1/22742.5;
    }
    if (f=='america'&& t=='VND'){
        b = 22742;
    }
    let reSult= b*a
    document.getElementById('result1').innerText='result:'+reSult

}
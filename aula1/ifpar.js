function esconder(){

    let btnEsconder = document.getElementById('btn');
    let card = document.getElementById('card');
    console.log(btnEsconder.checked);

    if(btnEsconder.checked){
        card.style.display = 'block';
    }
    else {
        card.style.display = 'none';
    }
}
const date = new Date();
function teste(){
  let hora = date.getHours();
  let cumprimento = document.querySelector('div#horaDia');
  if (hora >= 0 && hora <= 12){
    cumprimento.innerHTML ="Bom Dia!!";
    document.body.style.backgroundColor = 'rgba(233, 214, 118, 0.99)';
  }else if(hora >= 12 && hora <= 18 ){
    cumprimento.innerHTML ="Boa Tarde!!"
     document.body.style.backgroundColor = 'rgba(226, 155, 74, 0.81)' ;
  }else{
    cumprimento.innerHTML ="Boa Noite!!"
     document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.79)';
  }
  
}


function verificar(){
  
  let ano = date.getFullYear();
  let fano = document.getElementById('txtano');
  let res = document.querySelector('div#res');
 
  
  
  
  
  if(fano.value == 0 || fano.value > ano){
    alert('[ERRO] Ano De Nascimento não foi preenchida corretamente!');
  }else{
    let fsex = document.getElementsByName('radsexo');
    let idade = ano - Number(fano.value);
    let genero = '';
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');
    
    if(fsex[0].checked){
      genero = "Homem";
      if(idade >= 0 && idade <= 11){
        //criança
        img.setAttribute('src', 'Images/CriancaM.png');
        
      }else if (idade < 21){
        //jovem
        img.setAttribute('src', 'Images/JovemM.png');
        
      }else if(idade < 50){
        //adulto
        img.setAttribute('src', 'Images/AdultoM.png');
        
      }else {
        //idoso
        img.setAttribute('src', 'Images/IdosoM.png');
      }
      
    }else if (fsex[1].checked){
      genero = "Mulher";
      
      if(idade >= 0 && idade <= 11){
        //criança
        img.setAttribute('src', 'Images/CriancaF.png');
        
      }else if (idade < 21){
        //jovem
        img.setAttribute('src', 'Images/JovemF.png');
        
      }else if(idade < 50){
        //adulto
        img.setAttribute('src', 'Images/AdultoF.png');
        
      }else {
        //idoso
        img.setAttribute('src', 'Images/IdosoF.png');
        
      }
      
      
    }
    res.style.textAlign = "center";
    res.innerHTML = `Você é,  ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
  
}

teste();
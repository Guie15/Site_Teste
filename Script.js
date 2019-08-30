function verificar(){
  let data = new Date();
  let ano = data.getFullYear();
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
    res.innerHTML = `Voçê é,  ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
  
}
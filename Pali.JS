     var fraseUser = prompt("Escribe una frase y sabrás si es un Palindromo","Solo Peakyblinders");
      function frasePalindromo(fraseUser)
      {
      
    
       
          fraserReverse=fraseUser.split("").reverse().toString();
        
          fraserReverse=fraserReverse.replace(/,/g,"");
        
       
        if(fraseUser==fraserReverse){
          
          resultado="es un Palindromo";
        }
        else{
          
          resultado="no es un Palindromo";
        }
        
        document.write("Tu frase "+resultado);
      }
      
      frasePalindromo(fraseUser);
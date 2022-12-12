function checkedd(){
    

    if(document.getElementById('menuBox').checked){
        const ico = document.querySelector('#imgMenu');
        ico.setAttribute('src', "imagem/icon-menu-close.png");

        const lis = document.querySelector('#menuHidden');
        lis.setAttribute("class", "unhidden");

        
        
    }else{
        const ico = document.querySelector('#imgMenu');
        ico.setAttribute('src','imagem/icon-menu-png-21.ico');

        const lis = document.querySelector('#menuHidden');
        lis.setAttribute("class", "menu-nav");        
    }
    
}
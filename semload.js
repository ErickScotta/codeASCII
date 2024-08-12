function refresh(conteudo){
    const larguraJanela = window.innerWidth;
    if(larguraJanela<=480){
        var url = './../contents/p.html'
    }else if(larguraJanela > 480 && larguraJanela <= 767){
        var url = './../contents/m.html'
    }else if(larguraJanela >= 768 && larguraJanela <= 1024){
        var url = './../contents/g.html'
    }else if(larguraJanela >= 1025 && larguraJanela <=1280){
        var url = './../contents/gg.html'
    }else{//talvez (largurajanela >= 1280)
        var url = 'contents/extrag.html'
    }
    alert(url)
    
    var target = conteudo
    var xml = new XMLHttpRequest()

    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200 ) {
            document.getElementById(target).innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)

    xml.send()
}



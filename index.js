const utilizator = {
    nume: "Vali",
    parola: "vali"
}

let logo = document.querySelector('h1');
let inputNumeUtilizator = document.getElementById('inputNumeUtilizator');
let inputParolaUtilizator = document.getElementById('inputParolaUtilizator');
let btnCreeazaArticol = document.querySelector('.btnCreeazaArticol');
let btnDeconectare = document.querySelector('.btnDeconectare');
let btnConectare = document.querySelector('.btnConectare');
let btnContact = document.querySelector('.btnContact');
let btnAdaugaArticol = document.querySelector('.btnAdaugaArticol');
let btnXsection = document.querySelector('.btnXsection');
let inputTitluArticol = document.getElementById('inputTitluArticol');
let textareaContinutArticol = document.getElementById('textareaContinutArticol');
let sectionAdaugaArticol = document.querySelector('.sectionAdaugaArticol');
let container = document.querySelector('.container');
let stergeArticol = document.querySelector('main');
let x = stergeArticol.querySelectorAll('i');
let cautaArticol = document.getElementById('cautaArticol');
let articol = document.querySelectorAll('main article');
let titluArticol = document.querySelectorAll('main article h2')
let continutArticol = document.querySelectorAll('main article p')
let sectionCaseta = document.querySelector('section.caseta')
let breton = document.getElementById('breton')


console.log(articol, cautaArticol, titluArticol)





btnConectare.addEventListener('click', (e) => {
    if(inputNumeUtilizator.value === utilizator.nume && inputParolaUtilizator.value === utilizator.parola){
    
        inputNumeUtilizator.value = '';
        inputParolaUtilizator.value = '';
        btnCreeazaArticol.style.display = 'block';
        btnConectare.textContent = 'DECONECTARE';
        sectionCaseta.style.display = 'block';

        for(let i = 0; i < x.length; i++){            
            x[i].style.display = 'block';
        }
    } else {
        btnCreeazaArticol.style.display = 'none';
        btnConectare.textContent = 'CONECTARE';
        sectionCaseta.style.display = 'none';

        for(let i = 0; i < x.length; i++){            
                x[i].style.display = 'none';
        }
    }
})


btnCreeazaArticol.addEventListener('click', (e) => {
    sectionAdaugaArticol.style.display = 'flex';
})

btnXsection.addEventListener('click', (e) => {
   //sectionAdaugaArticol.style.display = 'none';
    document.querySelector('section').style.display = 'none';
})

btnAdaugaArticol.addEventListener('click', (e) => {
    if(inputTitluArticol.value != '' && textareaContinutArticol.value != ''){
        let article = document.createElement('article');
        article.setAttribute('style', `${articol[0].style.cssText}`)
        article.innerHTML = `<div><h2 style='${titluArticol[0].style.cssText}'>${inputTitluArticol.value}</h2><i style='display: block'>X</i></div>
                            <p style='${continutArticol[0].style.cssText}'>${textareaContinutArticol.value}</p>`;
        container.prepend(article);
    }

    inputTitluArticol.value = '';
    textareaContinutArticol.value = '';

    articol = document.querySelectorAll('main article');
    titluArticol = document.querySelectorAll('main article h2')
    continutArticol = document.querySelectorAll('main article p')
    elementeCaseta = [logo, inputNumeUtilizator, inputParolaUtilizator, btnCreeazaArticol, btnConectare, btnContact, breton, cautaArticol, articol, titluArticol, continutArticol];
    element = elementeCaseta[selectCaseta.value];
})

// article.innerHTML = `<div><h2>${inputTitluArticol.value}</h2><i style='display: block'>X</i></div>
//                             <p>${textareaContinutArticol.value}</p>`;
// style=${articol[0].style}


stergeArticol.addEventListener('click', (e) => {
    let x = e.target;
    let article = x.closest('article');
    if(x.nodeName == 'I' && x.style.display=='block'){
        article.remove();
    } 

    articol = document.querySelectorAll('main article');
    elementeCaseta = [logo, inputNumeUtilizator, inputParolaUtilizator, btnCreeazaArticol, btnConectare, btnContact, breton, cautaArticol, articol, titluArticol, continutArticol];
    element = elementeCaseta[selectCaseta.value];
})

cautaArticol.addEventListener('keyup', (e) => {
    let filtru = e.target.value.toLowerCase();
    let elemente = stergeArticol.querySelectorAll('article');

    for(let i of elemente){
        let continut = i.querySelector('h2').textContent.toLocaleLowerCase();      
        if(continut.indexOf(filtru) > -1){
            i.style.display='block';
        }else{
            i.style.display='none';
        }
    }
})

let elementeCaseta = [logo, inputNumeUtilizator, inputParolaUtilizator, btnCreeazaArticol, btnConectare, btnContact, breton, cautaArticol, articol, titluArticol, continutArticol];
let element = elementeCaseta[0];

//CASETA
let selectCaseta = document.getElementById('selectCaseta');

let continutTextElement = document.getElementById('continutTextElement');
let dimensiuneTextElement = document.getElementById('dimensiuneTextElement');
let familieFonturi = document.getElementById('familieFonturi');

let culoareTextElement = document.getElementById('culoareTextElement');

let latimeElement = document.getElementById('latimeElement');
let inaltimeElement = document.getElementById('inaltimeElement');

let margineElement = document.getElementById('margineElement');
let selecteazaMargineElement = document.getElementById('selecteazaMargineElement');

let umpluturaElement = document.getElementById('umpluturaElement');
let selecteazaUmpluturaElement = document.getElementById('selecteazaUmpluturaElement');

let fundalTextElementCuloare = document.getElementById('fundalTextElementCuloare');

let borduraTextElementCuloare = document.getElementById('borduraTextElementCuloare');
let modelBordura = document.getElementById('modelBordura');
let grosimeBordura = document.getElementById('grosimeBordura');

let rotunjireColturi = document.getElementById('rotunjireColturi');

let afisare = document.getElementById('afisare');
let fundal = document.getElementById('fundal');

let pozitionareElement = document.getElementById('pozitionareElement');
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function conversie(atribut) {
    let x = '', val;

    if (typeof(atribut) == 'string') {
        
    }
    
    for(let i=0; i<atribut.length; i++){
        if(!isNaN(atribut[i])){
            x += atribut[i];
        } else {
            break;
        }
    }       
    

    if (x != '') {
        val = parseFloat(x);
        return val;
    } else {
        return '';
    }
}

function grupElementeModificare(grup, schimbat, valoare, unitate) {
    for(i=0; i<grup.length; i++){
        grup[i].style[schimbat] = valoare + unitate;
    }
}

function rgbToHex(culoare) {
    let subSir = culoare.substring(4, culoare.length-1)
    let myArray = subSir.split(', ');
    let culoareNoua = '#';
    for(i of myArray) {
        i = parseInt(i);
        culoareNoua += i.toString(16);
    }
    return culoareNoua;
}



continutTextElement.value = element.textContent;
dimensiuneTextElement.value = conversie(element.style.fontSize);
familieFonturi.value = element.style.fontFamily;
culoareTextElement.value = rgbToHex(element.style.color);

//0 Elemente caseta

selectCaseta.addEventListener('change', (e) => {
    console.log(articol)
    element = elementeCaseta[e.target.value];
    //continut
    if(element.nodeName != 'INPUT' && element != articol && element != titluArticol && element != continutArticol && element != cautaArticol && element != breton){
        continutTextElement.style.display = 'block';
        document.querySelector('label[for=continutTextElement]').style.display = 'block';
        continutTextElement.value = element.textContent;    
    }  else {
        continutTextElement.style.display = 'none';
        document.querySelector('label[for=continutTextElement]').style.display = 'none';
    }
    //latime
    if(element.nodeName == 'INPUT' || element == cautaArticol || element == breton){
        latimeElement.style.display = 'block';
        document.querySelector('label[for=latimeElement]').style.display = 'block';
        latimeElement.value = conversie(element.style.width);    
    } else if(element == articol){
        latimeElement.style.display = 'block';
        document.querySelector('label[for=latimeElement]').style.display = 'block';
    } else {
        latimeElement.style.display = 'none';
        document.querySelector('label[for=latimeElement]').style.display = 'none';
    }
    //inaltime
    if(element == breton){
        inaltimeElement.style.display = 'block';
        document.querySelector('label[for=inaltimeElement]').style.display = 'block';
        inaltimeElement.value = conversie(element.style.height); 
    } else {
        inaltimeElement.style.display = 'none';
        document.querySelector('label[for=inaltimeElement]').style.display = 'none';
    }
    //pozitionare element
    if(element != cautaArticol && element != articol && element != titluArticol && element != continutArticol && element != breton){
        pozitionareElement.style.display = 'block';
        document.querySelector('label[for=pozitionareElement]').style.display = 'block'; 
    } else {
        pozitionareElement.style.display = 'none';
        document.querySelector('label[for=pozitionareElement]').style.display = 'none';
    }
    //margine
    if(element == titluArticol || element == continutArticol){
        margineElement.style.display = 'block'; 
        document.querySelector('label[for=margineElement]').style.display = 'block'; 
        selecteazaMargineElement.style.display = 'block'; 
    }  else {
        margineElement.style.display = 'none';
        document.querySelector('label[for=margineElement]').style.display = 'none'; 
        selecteazaMargineElement.style.display = 'none'; 
    }
    //umplutura
    if(element != articol && element != titluArticol && element != continutArticol && element != breton){
        umpluturaElement.style.display = 'block'; 
        document.querySelector('label[for=umpluturaElement]').style.display = 'block'; 
        selecteazaUmpluturaElement.style.display = 'block'; 
        umpluturaElement.value = conversie(element.style.padding);
    } else if(element != articol && element != breton){
        umpluturaElement.style.display = 'block'; 
        document.querySelector('label[for=umpluturaElement]').style.display = 'block'; 
        selecteazaUmpluturaElement.style.display = 'block'; 
    } else {
        umpluturaElement.style.display = 'none';
        document.querySelector('label[for=umpluturaElement]').style.display = 'none'; 
        selecteazaUmpluturaElement.style.display = 'none'; 
    }
    //dimensiune text, culoare, familie fonturi
    if(element != articol && element != breton){
        document.querySelector('label[for=dimensiuneTextElement]').style.display = 'block'; 
        dimensiuneTextElement.style.display = 'block'; 
        document.querySelector('label[for=culoareTextElement]').style.display = 'block'; 
        culoareTextElement.style.display = 'block'; 
        document.querySelector('label[for=familieFonturi]').style.display = 'block'; 
        familieFonturi.style.display = 'block'; 
        console.log(3)
    } else {
        document.querySelector('label[for=dimensiuneTextElement]').style.display = 'none'; 
        dimensiuneTextElement.style.display = 'none'; 
        document.querySelector('label[for=culoareTextElement]').style.display = 'none'; 
        culoareTextElement.style.display = 'none'; 
        document.querySelector('label[for=familieFonturi]').style.display = 'none'; 
        familieFonturi.style.display = 'none'; 
    }

    // if(element != articol){
    //     umpluturaElement.value = conversie(element.style.padding);
    // }

    if(element != articol && element != titluArticol && element != continutArticol){
        stanga = element.style.left;
        sus = element.style.top;
    }  
    
    //afisare
    if(element == articol){
        afisare.style.display = 'block';
        document.querySelector('label[for=afisare]').style.display = 'block'; 
    } else {
        afisare.style.display = 'none';
        document.querySelector('label[for=afisare]').style.display = 'none'; 
    }
    //fundal
    if(element == articol){
        fundal.style.display = 'block';
        document.querySelector('label[for=fundal]').style.display = 'block'; 
    } else {
        fundal.style.display = 'none';
        document.querySelector('label[for=fundal]').style.display = 'none'; 
    }

    if(element != articol && element != titluArticol && element != continutArticol){
        dimensiuneTextElement.value = conversie(element.style.fontSize);
        familieFonturi.value = element.style.fontFamily;
        culoareTextElement.value = rgbToHex(element.style.color);
        fundalTextElementCuloare.value = rgbToHex(element.style.backgroundColor);
        modelBordura.value = element.style.borderStyle;
        grosimeBordura.value = conversie(element.style.borderWidth);
        borduraTextElementCuloare.value = rgbToHex(element.style.borderColor);
    } 
})
//0 Elemente caseta

//  Continut element, latime, inaltime, dimensiune text element, familie fonturi
continutTextElement.addEventListener('keyup', (e) => {
    element.textContent = e.target.value;
})

latimeElement.addEventListener('keyup', (e) => {
    if (element == cautaArticol || element == breton) {
        element.style.width = e.target.value + 'vw';
    } else if(element == articol) {
        grupElementeModificare(element, 'width', e.target.value, 'vw')
    }else {
        element.style.width = e.target.value + 'px';
    }
})
latimeElement.addEventListener('change', (e) => {
    if (element == cautaArticol || element == breton) {
        element.style.width = e.target.value + 'vw';
    } else if(element == articol) {
        grupElementeModificare(element, 'width', e.target.value, 'vw')
    }else {
        element.style.width = e.target.value + 'px';
    }
})

inaltimeElement.addEventListener('keyup', (e) => {
    element.style.height = e.target.value + 'px';
    stergeArticol.style.paddingTop = e.target.value + 'px';
})
inaltimeElement.addEventListener('change', (e) => {
    element.style.height = e.target.value + 'px';
    stergeArticol.style.paddingTop = e.target.value + 'px';
})

dimensiuneTextElement.addEventListener('keyup', (e) => {
    if(element == titluArticol || element == continutArticol) {
        grupElementeModificare(element, 'fontSize', e.target.value, 'px')
    }else {
        element.style.fontSize = e.target.value + 'px';
    }
})
dimensiuneTextElement.addEventListener('change', (e) => {
    if(element == titluArticol || element == continutArticol) {
        grupElementeModificare(element, 'fontSize', e.target.value, 'px')
    }else {
        element.style.fontSize = e.target.value + 'px';
    }
})

familieFonturi.addEventListener('change', (e) => {
    if(element == titluArticol || element == continutArticol) {
        grupElementeModificare(element, 'fontFamily', e.target.value, '')
    }else {
        element.style.fontFamily = e.target.value;
    }
    // element.style.fontFamily = e.target.value;
})

//1 Culoare text
culoareTextElement.addEventListener('change', (e) => {
    if(element == titluArticol || element == continutArticol) {
        grupElementeModificare(element, 'color', e.target.value, '')
    }else {
        element.style.color = e.target.value;
    }
})
//1 Culoare text

//Margine
selecteazaMargineElement.addEventListener('change', (e) => {
    if(e.target.value == 'tot'){
        margineElement.value = conversie(element.style.margin);  
    } else if(e.target.value == 'dreapta'){
        margineElement.value = conversie(element.style.marginRight);
    } else if(e.target.value == 'jos'){
        margineElement.value = conversie(element.style.marginBottom);
    } else if(e.target.value == 'stanga'){
        margineElement.value = conversie(element.style.marginLeft);
    } else if(e.target.value == 'sus'){
        margineElement.value = conversie(element.style.marginTop);
    } else {
        
    }
})

margineElement.addEventListener('change', (e) => {
    if(selecteazaMargineElement.value == 'tot'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'margin', e.target.value, 'px')
        }else {
            element.style.margin = e.target.value + 'px';
        }
    } else if(selecteazaMargineElement.value == 'dreapta'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'marginRight', e.target.value, 'px')
        }else {
            element.style.marginRight = e.target.value + 'px';
        }
    } else if(selecteazaMargineElement.value == 'jos'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'marginBottom', e.target.value, 'px')
        }else {
            element.style.marginBottom = e.target.value + 'px';
        }
    } else if(selecteazaMargineElement.value == 'stanga'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'marginLeft', e.target.value, 'px')
        }else {
            element.style.marginLeft = e.target.value + 'px';
        }
    } else if(selecteazaMargineElement.value == 'sus'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'marginTop', e.target.value, 'px')
        }else {
            element.style.marginTop = e.target.value + 'px';
        }
    }
})
margineElement.addEventListener('keyup', (e) => {
    if(selecteazaMargineElement.value == 'tot'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'margin', e.target.value, 'px')
        }else {
            element.style.margin = e.target.value + 'px';
        }
    } else if(selecteazaMargineElement.value == 'dreapta'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'marginRight', e.target.value, 'px')
        }else {
            element.style.marginRight = e.target.value + 'px';
        }
    } else if(selecteazaMargineElement.value == 'jos'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'marginBottom', e.target.value, 'px')
        }else {
            element.style.marginBottom = e.target.value + 'px';
        }
    } else if(selecteazaMargineElement.value == 'stanga'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'marginLeft', e.target.value, 'px')
        }else {
            element.style.marginLeft = e.target.value + 'px';
        }
    } else if(selecteazaMargineElement.value == 'sus'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'marginTop', e.target.value, 'px')
        }else {
            element.style.marginTop = e.target.value + 'px';
        }
    }
})
//Margine

//Afisare
afisare.addEventListener('change', (e) => {
    container.className = e.target.value;
})
//Afisare

//Fundal
fundal.addEventListener('change', (e) => {
    document.body.style.backgroundImage = `url(./images/${e.target.value}.jpg)`;
})
//Fundal

// Umplutura

selecteazaUmpluturaElement.addEventListener('change', (e) => {
    if(e.target.value == 'tot'){
        umpluturaElement.value = conversie(element.style.padding);  
    } else if(e.target.value == 'dreapta'){
        umpluturaElement.value = conversie(element.style.paddingRight);
    } else if(e.target.value == 'jos'){
        umpluturaElement.value = conversie(element.style.paddingBottom);
    } else if(e.target.value == 'stanga'){
        umpluturaElement.value = conversie(element.style.paddingLeft);
    } else if(e.target.value == 'sus'){
        umpluturaElement.value = conversie(element.style.paddingTop);
    } else {
        
    }
})

umpluturaElement.addEventListener('change', (e) => {
    if(selecteazaUmpluturaElement.value == 'tot'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'padding', e.target.value, 'px')
        }else {
            element.style.padding = e.target.value + 'px';
        }
    } else if(selecteazaUmpluturaElement.value == 'dreapta'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'paddingRight', e.target.value, 'px')
        }else {
            element.style.paddingRight = e.target.value + 'px';
        }
    } else if(selecteazaUmpluturaElement.value == 'jos'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'paddingBottom', e.target.value, 'px')
        }else {
            element.style.paddingBottom = e.target.value + 'px';
        }
    } else if(selecteazaUmpluturaElement.value == 'stanga'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'paddingLeft', e.target.value, 'px')
        }else {
            element.style.paddingLeft = e.target.value + 'px';
        }
    } else if(selecteazaUmpluturaElement.value == 'sus'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'paddingTop', e.target.value, 'px')
        }else {
            element.style.paddingTop = e.target.value + 'px';
        }
    }
})
umpluturaElement.addEventListener('keyup', (e) => {
    if(selecteazaUmpluturaElement.value == 'tot'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'padding', e.target.value, 'px')
        }else {
            element.style.padding = e.target.value + 'px';
        }
    } else if(selecteazaUmpluturaElement.value == 'dreapta'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'paddingRight', e.target.value, 'px')
        }else {
            element.style.paddingRight = e.target.value + 'px';
        }
    } else if(selecteazaUmpluturaElement.value == 'jos'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'paddingBottom', e.target.value, 'px')
        }else {
            element.style.paddingBottom = e.target.value + 'px';
        }
    } else if(selecteazaUmpluturaElement.value == 'stanga'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'paddingLeft', e.target.value, 'px')
        }else {
            element.style.paddingLeft = e.target.value + 'px';
        }
    } else if(selecteazaUmpluturaElement.value == 'sus'){
        if(element == titluArticol || element == continutArticol) {
            grupElementeModificare(element, 'paddingTop', e.target.value, 'px')
        }else {
            element.style.paddingTop = e.target.value + 'px';
        }
    }
})

// Umplutura

//2 Culoare fundal
fundalTextElementCuloare.addEventListener('change', (e) => {
    if(element == titluArticol || element == continutArticol || element == articol) {
        grupElementeModificare(element, 'backgroundColor', e.target.value, '')
    }else {
        element.style.backgroundColor = e.target.value;
    }
})
//2 Culoare fundal

//3 Culoare bordura
borduraTextElementCuloare.addEventListener('change', (e) => {
    if(element == titluArticol || element == continutArticol || element == articol) {
        grupElementeModificare(element, 'borderColor', e.target.value, '')
    }else {
        element.style.borderColor = e.target.value;
    }
})
//3 Culoare bordura

//4 Model bordura si grosime bordura
modelBordura.addEventListener('change', (e) => {
    if(element == titluArticol || element == continutArticol || element == articol) {
        grupElementeModificare(element, 'borderStyle', e.target.value, '')
    }else {
        element.style.borderStyle = e.target.value;
    }
})

grosimeBordura.addEventListener('keyup', (e) => {
    if(element == titluArticol || element == continutArticol || element == articol) {
            grupElementeModificare(element, 'borderWidth', e.target.value, 'px')
        }else {
            element.style.borderWidth = e.target.value + 'px';
        }
})
grosimeBordura.addEventListener('change', (e) => {
    if(element == titluArticol || element == continutArticol || element == articol) {
            grupElementeModificare(element, 'borderWidth', e.target.value, 'px')
        }else {
            element.style.borderWidth = e.target.value + 'px';
        }
})
//4 Model bordura si grosime bordura

// Rotunjire colturi
rotunjireColturi.addEventListener('change', (e) => {
    if(element == titluArticol || element == continutArticol || element == articol) {
            grupElementeModificare(element, 'borderRadius', e.target.value, 'px')
        }else {
            element.style.borderRadius = e.target.value + 'px';
        }
})
rotunjireColturi.addEventListener('keyup', (e) => {
    if(element == titluArticol || element == continutArticol || element == articol) {
            grupElementeModificare(element, 'borderRadius', e.target.value, 'px')
        }else {
            element.style.borderRadius = e.target.value + 'px';
        }
})
// Rotunjire colturi

//5 Pozitie elemente
let stanga = element.style.left, sus = element.style.top;

pozitionareElement.addEventListener('click', (e) => {
    let x = '', y = '';

    if(typeof(stanga) == 'string'){
        for(let i=0; i<stanga.length; i++){
            if(!isNaN(stanga[i])){
                x += stanga[i];
            } else {
                break;
            }
        }
    }
    if(typeof(sus) == 'string'){
        for(let i=0; i<sus.length; i++){
            if(!isNaN(sus[i])){
                y += sus[i];
            } else {
                break;
            }
        }
    }

    if(typeof(stanga) == 'string'){
        stanga = parseFloat(x); 
    }
    if(typeof(sus) == 'string'){
        sus = parseFloat(y);
    }

    if(e.target.id == 'stanga'){
        stanga -= 1;
        element.style.left = stanga +'%';
    } else if(e.target.id == 'dreapta'){
        stanga += 1;
        element.style.left = stanga +'%';
    } else if(e.target.id == 'sus'){
        sus -= 1;
        element.style.top = sus +'vh';
    } else if(e.target.id == 'jos'){
        sus += 1;
        element.style.top = sus +'vh';
    } 

})

//5 Pozitie elemente

console.log(selectCaseta);   
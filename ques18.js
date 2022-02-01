let news = document.querySelector('#inputNews');
let newsSource = document.querySelector('#source');
let outDiv = document.querySelector('#output');

let sources = ['whatsapp','facebook','telegram'];

newsSource.addEventListener('keyup',fakeNewsCheck);

function fakeNewsCheck(){
    for(i=0; i<sources.length; i++){
        if(newsSource.value === sources[i] ){
            outDiv.innerHTML = `<h1>Don't believe things on FB and Whatsapp</h1>`;
        }
    }
 }


//  fetch('https://www.abbreviations.com/services/v2/lyrics.php?uid=9232&tokenid=33GJP9hGDrQl9GrI&term=baby&artist=justin%20bieber')
//   .then(response => response.text())
//   .then(data => {
//     let parser = new DOMParser(); //convert into xml object
//     let xml = parser.parseFromString(data,'application/xml')
//     // let lyrics = xml.getElementsByTagName('GetLyricResult')[0].children[9].firstChild.nodeValue;
//     console.log(xml)})










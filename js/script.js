// const paragraf1= document.getElementById('p1');
//  paragraf1.innerText = 'hei bos'
// paragraf1.style.backgroundColor = 'orange'

// const paragraf2 = document.getElementById('p2');
// paragraf2.style.backgroundColor = 'blue';

// const paragraf3 = document.getElementById('p3');
// paragraf3.style.backgroundColor = 'yellow';
// // l


const button = document.getElementById("add");

const paragraf1 = document.getElementById("p1")
let urutId  = 2
button.onclick = function(){
    const parent = document.getElementById("wrapper");
    // let newElement = document.createElement("div");
    // newElement.innerText = "new elemen";
    
    let clonedElement = paragraf1.cloneNode(true);
    clonedElement.id = "p" + urutId; ++urutId;
    parent.append(clonedElement);
};


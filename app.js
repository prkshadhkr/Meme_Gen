const form = document.querySelector('#meme-form');
const inputImg = document.querySelector('input[name="img-input"]');
const inputTopText = document.querySelector('input[name="top-text"]');
const inputBottomText = document.querySelector('input[name="bottom-text"]');
const inputRange = document.querySelector('input[type="range"]');
const inputColor = document.querySelector('input[type="color"]');
const out = document.querySelector('.output');
const imgCommonTexts = document.querySelectorAll('.img-text');
const imgTopText = document.querySelector('.text-top');
const imgBottomText = document.querySelector('.text-bottom');

inputRange.oninput = function() {
    out.textContent = inputRange.value;
    for (let imgText of imgCommonTexts) {
        imgText.style.fontSize = inputRange.value + 'px';
        imgText.style.color = inputColor.value;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const imgUpload = document.querySelector('#img-upload');
    imgUpload.src = inputImg.value;
    imgTopText.children[0].innerText = inputTopText.value;
    imgBottomText.children[0].innerText = inputBottomText.value;
});

const imgSaveButton = document.querySelector('#img-save-btn');
const box = document.querySelector('.box');
const result = document.querySelector('.result');
const removeButtons = document.querySelectorAll('.remove');

imgSaveButton.addEventListener('click', function(e) {
    e.preventDefault;
    const imgSave = document.querySelector('#img-upload');
    const imgTextTopSave = document.querySelector('.text-top').children[0];
    const imgTextBottomSave = document.querySelector('.text-bottom').children[0];
    const imgTextStyleSave = document.querySelector('.img-text');

    const divBox = document.createElement('div');
    const newImg = document.createElement('img');

    divBox.classList.add('box');
    newImg.src = imgSave.src;
    newImg.width = imgSave.width;
    newImg.height = imgSave.height;

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';
    removeBtn.classList.add('remove');

    removeBtn.addEventListener('click', function(e) {
        e.target.parentElement.parentElement.remove();
    });



    const topText = getTexts('text-top', imgTextTopSave, imgTextStyleSave);
    const bottomText = getTexts('text-bottom', imgTextBottomSave, imgTextStyleSave);

    bottomText.append(removeBtn);
    divBox.append(newImg, topText, bottomText);
    result.appendChild(divBox);
});

function getTexts(divClass, saveText, saveStyle) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add(divClass);
    p.classList.add('img-text');
    p.innerText = saveText.innerText;
    p.style.fontSize = saveStyle.style.fontSize;
    p.style.color = saveStyle.style.color;
    div.append(p);
    return div;
}



// imgSaveButton.addEventListener('click', function(e) {
//     e.preventDefault;
//     const imgSave = document.querySelector('#img-upload');
//     const imgTextStyleSave = document.querySelector('.img-text');
//     const imgTextTopSave = document.querySelector('.text-top').children[0];
//     const imgTextBottomSave = document.querySelector('.text-bottom').children[0];

//     const divBox = document.createElement('div');
//     const newImg = document.createElement('img');
//     const divTextTop = document.createElement('div');
//     const pTextTop = document.createElement('p');
//     const divTextBottom = document.createElement('div');
//     const pTextBottom = document.createElement('p');

//     const removeBtn = document.createElement('button');
//     removeBtn.innerText = "X";
//     removeBtn.classList.add('remove');

//     removeBtn.addEventListener('click', function(e) {
//         e.target.parentElement.parentElement.remove();
//     });

//     divBox.classList.add('box');

//     newImg.src = imgSave.src;
//     newImg.width = imgSave.width;
//     newImg.height = imgSave.height;

//     divTextTop.classList.add('text-top');
//     pTextTop.classList.add('img-text');
//     pTextTop.innerText = imgTextTopSave.innerText;
//     pTextTop.style.fontSize = imgTextStyleSave.style.fontSize;
//     pTextTop.style.color = imgTextStyleSave.style.color;

//     divTextBottom.classList.add('text-bottom');
//     pTextBottom.classList.add('img-text');
//     pTextBottom.innerText = imgTextBottomSave.innerText;
//     pTextBottom.style.fontSize = imgTextStyleSave.style.fontSize;
//     pTextBottom.style.color = imgTextStyleSave.style.color;

//     divTextTop.append(pTextTop);
//     divTextBottom.append(pTextBottom);
//     divTextBottom.append(removeBtn);
//     divBox.append(newImg, divTextTop, divTextBottom);
//     result.appendChild(divBox);

// });
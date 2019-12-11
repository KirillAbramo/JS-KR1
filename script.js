let f1 = document.forms['f1'];
let one = document.getElementById('one');
let btnEdit = document.getElementById('btnEdit');
btnEdit.onclick = function () {
    f1.style.display = 'block';
    f2.style.display = 'none';
    f1.textEditor.value = one.innerHTML
}

f1.btnSave.onclick = function () {
    f1.style.display = 'none';
    one.innerHTML = f1.textEditor.value
}

let btnStyle = document.getElementById('btnStyle');
btnStyle.onclick = function () {
    f1.style.display = 'none'
    f2.style.display = 'block'
}

let f2 = document.forms['f2'];
for (let i = 0; i < f2.fonts.length; i++) {
    f2.fonts[i].onclick = function () {
        one.style.fontSize = this.value
    }
}
f2.fontFam.onchange = function () {
    for (let i = 0; i < f2.fontFam.options.length; i++) {
        if (f2.fontFam.options[i].selected) {
            one.style.fontFamily = this.value
        }
    }
}

f2.bold.onclick = function () {
    if (f2.bold.checked) {
        one.style.fontWeight = 'bold'
    } else {
        one.style.fontWeight = 'normal'
    }
}
f2.cursive.onclick = function () {
    if (f2.cursive.checked) {
        one.style.fontStyle = 'italic'
    } else {
        one.style.fontStyle = 'normal'
    }
}
f2.textColor.onclick = function () {
    boxColors.style.display = 'flex'

    for (let i = 0; i < boxColors.children.length; i++) {
        boxColors.children[i].onclick = function () {
            one.style.color = this.style.backgroundColor
            boxColors.style.display = 'none'
        }
    }
}

f2.backgColor.onclick = function () {
    boxColors.style.display = 'flex';

    for (let i = 0; i < boxColors.children.length; i++) {
        boxColors.children[i].onclick = function () {
            one.style.backgroundColor = this.style.backgroundColor
            boxColors.style.display = 'none'
        }
    }
}

f1.btnAdd.onclick = function () {
    document.getElementById('one').style.display = 'none'
    document.getElementById('btns').style.display = 'none'
    document.getElementById('two').style.display = 'none'
    document.getElementById('choose').style.display = 'block'
}

let f3 = document.forms['f3'];
console.log(f3);

f3.btnCreate.onclick = function () {
    let countLi = f3.countLi.value;
    let typeLi = f3.typeLi.value;
    f1.textEditor.value += `<ul type=${typeLi}>`
    for (let i = 1; i <= countLi; i++) {
        f1.textEditor.value += `<li>item ${i}</li>`
    }
    f1.textEditor.value += `</ul>`;
    document.getElementById('choose').style.display = 'none'
    document.getElementById('one').style.display = 'block'
    document.getElementById('btns').style.display = 'block'
    document.getElementById('two').style.display = 'block'

}

let f4 = document.forms['f4']
let tabBtn = document.getElementById('table');
let listBtn = document.getElementById('list');
tabBtn.onclick = function () {
    f3.style.display = 'none';
    f4.style.display = 'block'
    listBtn.checked = false
}
listBtn.onclick = function () {
    f3.style.display = 'block';
    f4.style.display = 'none';
    tabBtn.checked = false
}


f4.btnCreateTab.onclick = function () {
    let countTr = f4.countTr.value;
    let countTd = f4.countTd.value;
    let widthTd = f4.widthTd.value;
    let heightTd = f4.heightTd.value;
    let widthBd = f4.widthBd.value;
    let typeBd = f4.typeBd.value;
    let colorBd = f4.colorBd.value;
    f1.textEditor.value += `<table style="border-collapse: collapse">`
    for (let i = 1; i <= countTr; i++) {
        f1.textEditor.value += `<tr>`;
        for (let i = 1; i <= countTd; i++) {
            f1.textEditor.value += `<td style="width: ${widthTd}px; height: ${heightTd}px; border: ${widthBd}px ${typeBd} ${colorBd}">${i}</td>`
        }
        f1.textEditor.value += `</tr>`;

    }

    f1.textEditor.value += `</table>`;
    document.getElementById('choose').style.display = 'none'
    document.getElementById('one').style.display = 'block'
    document.getElementById('btns').style.display = 'block'
    document.getElementById('two').style.display = 'block'
}











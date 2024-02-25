/**
 * MAIN APP
 * --------
 */

const list = window.location.search.substring(1).split(';');

const container = document.querySelector('.container');
list.forEach(str => {

    const str_name = str.substring(0, str.length -1);
    const str_code = parseInt(str.charAt(str.length -1));

    const box = document.createElement('div');
    box.classList.add('box');

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = decodeURIComponent(str_name);

    const icon = document.createElement('div');
    icon.classList.add('icon');
    if (str_code === 1){
        icon.classList.add('icon-1');
    }
    icon.innerHTML = "&#xf1821;";

    box.appendChild(icon);
    box.appendChild(name);
    container.appendChild(box);
});

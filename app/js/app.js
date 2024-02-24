/**
 * MAIN APP
 * --------
 */

const list = window.location.search.substr(1).split(';');

const container = document.querySelector('.container');
list.forEach(str => {
    const box = document.createElement('div');
    box.classList.add('box');

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = decodeURIComponent(str);

    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.innerHTML = "&#xf1821;";

    box.appendChild(icon);
    box.appendChild(name);
    container.appendChild(box);
});

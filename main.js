const firstList = document.querySelector('.FirstList');

firstList.addEventListener('click', function (event) {
    const list1 = event.target;
    list1.style.textDecoration = 'line-through';
});

const secondList = document.querySelector('.SecondList');

secondList.addEventListener('click', function (event) {
    const list2 = event.target;
    list2.style.opacity = 0.5;
});

const testingImages = document.querySelector('.images');

testingImages.addEventListener('click', function (event) {
    const testImage = event.target;
    testImage.style.textDecoration = 'line-through';
    testImage.style.opacity = 0.5;
});

const button = document.querySelector('#destroy-all');

button.addEventListener('click', function () {
    const listItems1 = document.querySelectorAll('ol li');
    for (let i = 0; i <listItems1.length; i++) {
        const item = listItems1[i];
        item.style.textDecoration = 'line-through';
    };

    const listItems2 = document.querySelectorAll('.SecondList ul li');
    for (let i = 0; i < listItems2.length; i++) {
        const item2 = listItems2[i];
        item2.style.opacity = 0.5;
    };

    const listItems3 = document.querySelectorAll('.images section img');
    for (let i = 0; i < listItems3.length; i++) {
        const item3 = listItems3[i];
        item3.style.width = '0px';
    };
});
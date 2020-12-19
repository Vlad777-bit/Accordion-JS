'use strict';

let accordions;
const accordionWrapper = document.querySelector('.accordion__wrapper');

const contentData = [
    {
        id: 1,
        title: 'title 1',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam doloremque laudantium odit et odio doloribus est libero atque corporis animi.'
    },
    {
        id: 2,
        title: 'title 2',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam doloremque laudantium odit et odio doloribus est libero atque corporis animi.'
    },
    {
        id: 3,
        title: 'title 3',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam doloremque laudantium odit et odio doloribus est libero atque corporis animi.'
    },
    {
        id: 4,
        title: 'title 4',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam doloremque laudantium odit et odio doloribus est libero atque corporis animi.'
    },
    {
        id: 5,
        title: 'title 5',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam doloremque laudantium odit et odio doloribus est libero atque corporis animi.'
    },
];

const createTemplate = ({title, content}) => {
    return `
        <div class="accordion__item">
            <div class="accordion__item-title">
                ${title}
            </div>
            <div class="accordion__item-content">
               ${content}
            </div>
        </div>
    `;
};

const fillHtmlList = () => {
    contentData.forEach(item => {
        accordionWrapper.innerHTML += createTemplate(item);
    });
    accordions = document.querySelectorAll('.accordion__item');
};

fillHtmlList();

if (accordions) {
    for (let item of accordions) {
        item.addEventListener('click', function() {
            // Если нужно что бы открывались все titles
            // this.classList.toggle('active')
            if (this.classList.contains('active')) {
                this.classList.remove('active'); 
            } else {
                for (let el of accordions) {
                    el.classList.remove('active');
                }
                this.classList.add('active');
            }
        });
    }
}


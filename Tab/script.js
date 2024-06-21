const tabContainer = document.querySelector('.container');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.content');

tabContainer.addEventListener('click', (event) => {
    console.log(event.target.dataset);
    const currentId = event.target.dataset.id;

    if(currentId) {

        // add button active class and removing them
        tabButtons.forEach((btn) => {
            btn.classList.remove('active');
        });

        event.target.classList.add('active');

        //showing and hiding the tab content
        tabContents.forEach((content) => {
            content.classList.remove('active');
        });

        const currentElement = document.getElementById(currentId);
        currentElement.classList.add('active');
    }
});
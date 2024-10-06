const wrapper = document.querySelector('.wrapper');
const wrapper2 = document.querySelector('.wrapper2');
const btns = document.querySelectorAll('.btns button');
const submit = document.querySelector('#submit');
let massage = document.querySelector('.massage h3');
let activeButton = null;

btns.forEach(btn => {
    btn.addEventListener('click', function() {

    if (activeButton) {
        activeButton.classList.remove('active');
    }
    this.classList.add('active');
    activeButton = this;
    });

    submit.addEventListener('click', () => {
        if(activeButton === null){
            return
        }else{
            wrapper.style.display= "none";
            wrapper2.style.display = 'block'
            massage.textContent =`You selected ${activeButton.textContent} out of 5`;
        }
    })
});


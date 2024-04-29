window.onload = function () {

    console.log("init")

    const container = document.getElementById('container');
    console.log(container)
    const heade = document.getElementById('header');
    const testa = document.getElementById('testa');

   
    window.addEventListener('scroll', function (event) {
        console.log("init")

        const headerbott = heade.getBoundingClientRect().bottom;
        const containerTop = document.getElementById('container').getBoundingClientRect().bottom;

        
        if (headerbott > containerTop) {
            
            testa.classList.add('change')
            testa.classList.remove('testata')
            
        } else {
            testa.classList.remove('change')
            testa.classList.add('testata')
            
        }
    });
    
    fadeM();
}

function fadeM() {
    const ems = document.querySelectorAll('[stroke-miterlimit="4"][opacity="1"] g [opacity="1"][style="display: block;"]')
    console.log(ems);
    const emsl = ems.length;
    const randnum = [];
    let interval;
    let intervallone;
    for (let i = 0; i < 19; i++) {
        randnum.push(Math.floor(Math.random() * emsl) + 1);
    }
    // randnum.forEach(num => {
    //     console.log(ems[num]);
    // const interval = setInterval(ems[num].setAttribute('opacity', '0'),1000);
    let index=0;
    const changeOpacity = () => {
        let ind = randnum[index];
        if (index < randnum.length) {
            console.log(ems[ind]);
            ems[ind].setAttribute('opacity', '0');
            index++;
        } else {
            console.log("clear");
            index=0;
            clearInterval(interval); // Stop the interval when all elements have been processed
            changeOpacityOn();
            intervallone = setInterval(changeOpacityOn, 100);
        }
    };
    const changeOpacityOn = () => {
        
        let ind = randnum[index];
        if (index < randnum.length) {
            console.log(ems[ind]);
            ems[ind].setAttribute('opacity', '1');
            index++;
        } else {
            console.log("clearone");
            index=0;
            clearInterval(intervallone); // Stop the interval when all elements have been processed
            changeOpacity();
            interval = setInterval(changeOpacity, 100);
        }
    };

    // Call the changeOpacity function immediately and then every 2 seconds
    changeOpacity(); // Call immediately
    interval = setInterval(changeOpacity, 500);


    // cicle(randnum,ems);
}
    


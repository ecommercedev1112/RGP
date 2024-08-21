document.querySelectorAll('.subscription__wrapper').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.add('add-border');
        const nextElement = this.nextElementSibling;
        const preElement = this.previousElementSibling;
        if (nextElement.classList.contains('add-border')) {
            console.log(nextElement, "next");                
            nextElement.classList.remove('add-border');
        }
        if (preElement.classList.contains('add-border')) {
            console.log(preElement, "pre");                
            preElement.classList.remove('add-border');
        }
    });
});
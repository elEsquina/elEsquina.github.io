document.body.addEventListener('click', function(event) {
    var header = document.getElementById('header');
    var menubtn = document.getElementById('menubtn');
    if (!header.contains(event.target) && !menubtn.contains(event.target)) {
        if (header.classList.contains('open')) {
            header.classList.remove('open');
        }
    }
});


function openheader() {  
    var header = document.getElementById('header');
    if (!header.classList.contains('open')) {
        header.classList.add('open');
    }
}

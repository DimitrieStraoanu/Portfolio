document.querySelector('.closeBtn').addEventListener('click', toggleMenu);

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', selectLink)
});

function toggleMenu() {
    document.querySelector('.menu').classList.toggle('closed');
    document.querySelectorAll('.closeBtn i').forEach(i => i.classList.toggle('hidden'));
}

function selectLink() {
    document.querySelectorAll('.link').forEach(link => link.classList.remove('selected'));
    this.classList.add('selected');
    location.href = '#' + this.innerHTML.toLowerCase();
}
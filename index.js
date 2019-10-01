window.addEventListener('scroll', checkPosition);

document.querySelector('.closeBtn').addEventListener('click', toggleMenu);

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', linkClicked)
});

function toggleMenu() {
    document.querySelector('.menu').classList.toggle('closed');
    document.querySelectorAll('.closeBtn i').forEach(i => i.classList.toggle('hidden'));
}

function linkClicked() {    
    location.href = '#' + this.innerHTML.toLowerCase();
}

function checkPosition(){
    const aboutHeight = Math.floor(document.querySelector('#about').getBoundingClientRect().height);
    const workHeight = Math.floor(document.querySelector('#work').getBoundingClientRect().height);
    const resumeHeight = Math.floor(document.querySelector('#resume').getBoundingClientRect().height);
    const contactHeight = Math.floor(document.querySelector('#contact').getBoundingClientRect().height);
    if(window.pageYOffset<aboutHeight) selectLink('About');
    else if(window.pageYOffset>=aboutHeight && window.pageYOffset<aboutHeight+workHeight-1) selectLink('Work');
    else if(window.pageYOffset>=aboutHeight+workHeight && window.pageYOffset<aboutHeight+workHeight+resumeHeight-1) selectLink('Resume');
    else if(window.pageYOffset>=aboutHeight+workHeight+resumeHeight && window.pageYOffset<aboutHeight+workHeight+resumeHeight+contactHeight-1) selectLink('Contact');
}

function selectLink(linkName){
    document.querySelectorAll('.link').forEach(link =>{
       if(link.innerHTML === linkName) link.classList.add('selected');
       else link.classList.remove('selected')
    });
        
}
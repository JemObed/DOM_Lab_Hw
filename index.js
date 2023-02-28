// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';
//not showing? 
//Case sensitive thanks to group
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add('flex-ctr');

const topMenuEl = document.querySelector('#top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');

menuLinks.forEach(obj => {
    const a = document.createElement('a')

    a.setAttribute('href', obj.href)

    a.textContent = obj.text; 

    topMenuEl.append(a);
})
// based on solution at https://www.youtube.com/watch?v=ZKXv_ZHQ654
var checkbox = document.querySelector('input[name=theme');
var container = document.querySelector('.container');

checkbox.addEventListener('change', () => {
    if (document.documentElement.getAttribute('data-theme') === 'default') {
        console.log("default");
        document.documentElement.setAttribute('data-theme', 'dark');
        container.classList.add('dark');
        
    }
    else {
        document.documentElement.setAttribute('data-theme', 'default');
        console.log("dark");
        container.classList.remove('dark');
    }
});
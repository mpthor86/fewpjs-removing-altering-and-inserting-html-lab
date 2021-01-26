// Write your code here!
document.getElementById('main').remove();
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
document.body.appendChild(newHeader);
let message = document.querySelector('h1#victory');
message.innerHTML = 'Michael is the champion';
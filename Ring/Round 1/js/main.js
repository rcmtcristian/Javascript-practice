document.querySelector('span').innerText = 'temp'
document.querySelector('#move').onclick = transfer

function transfer(){
  document.querySelector('span').classList.toggle('shaken')
  document.querySelector('span').style.color = 'blue'
  document.querySelector('body').classList.toggle('gack')
}
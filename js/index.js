// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

function save_lincoln(){
  button = document.getElementById('save_lincoln')
  image = document.getElementById('foreground')

  button.addEventListener('click', function(event){
    image.style.WebkitTransition = 'opacity 1s';
    image.style.MozTransition = 'opacity 1s';
    image.style.transition = 'opacity 1s'
  })
}

save_lincoln()
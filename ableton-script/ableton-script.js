let moreButtonsEl = document.querySelector('.more-btn');
    const apiKey = '35feefc291cab5690ccb693d288c9c9d';
    let dropEl = document.querySelector('.hover-section');

    moreButtonsEl.addEventListener('click', ()=>{
      if(dropEl.style.display === 'none'){
        dropEl.style.display = 'block';
      }else{
        dropEl.style.display = 'none';
      }
      
    });
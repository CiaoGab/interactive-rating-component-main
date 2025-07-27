const ratings = document.getElementsByClassName('rating')
const submitBtn = document.getElementById('submitBtn')
const errorMessage = document.getElementById('error-message')

let selectedRating;
for (let rating of ratings) {
    rating.addEventListener('click', () => {
        for (let r of ratings) {
            r.classList.remove('selected');
        }
        rating.classList.add('selected')
        selectedRating = rating.innerHTML
        errorMessage.innerHTML = ''

    }) 
}

const handleSubmit = () => {
    let submittedStateHtml = `
        <div class="submitted-content">
          <img src="./images/illustration-thank-you.svg" alt="thank you image" />
          <div class="selection-container">
            <p>You selected ${selectedRating} out of 5</p>
          </div>
        <div class="text-container">
          <h2>Thank you!</h2>
            <p>
              We appreciate you taking the time to give a rating. If you ever need more
              support, don't hesitate to get in touch!
            </p>
        </div>
      </div>`
      if (selectedRating) {
        document.getElementById('container').innerHTML = submittedStateHtml
      } else {
        errorMessage.innerHTML = 'Please choose a rating!'
      }
    
}


submitBtn.addEventListener('click', handleSubmit)
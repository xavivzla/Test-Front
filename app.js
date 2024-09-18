document.addEventListener('DOMContentLoaded', () => {
  // Add box
  const addBox = () => {
    const BOXCONTAINER = document.querySelector('#box-container')
    const BOX = document.createElement('div')
    BOX.classList.add('box')
    BOX.textContent = 'Box added!'
    BOX.style.backgroundColor = '#f1c40f'
    BOXCONTAINER.appendChild(BOX)
  }

  const validateForm = () => {
    const FORM = document.querySelector('#form')
    FORM.addEventListener('submit', e => {
      e.preventDefault()
      const NAME = document.querySelector('#name')
      const EMAIL = document.querySelector('#email')
      const NAMEERROR = document.querySelector('#name-error')
      const EMAILERROR = document.querySelector('#email-error')
      // validate regex
      const nameRegex = /^[a-zA-Z ]{2,30}$/
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

      if (!nameRegex.test(NAME.value)) {
        NAMEERROR.textContent = 'Please enter a valid name'
        NAMEERROR.style.color = '#ff4242'
        NAME.style.borderColor = '#ff4242'
      } else {
        NAMEERROR.textContent = ''
        NAME.style.borderColor = '#2ecc71'
      }

      if (!emailRegex.test(EMAIL.value)) {
        EMAILERROR.textContent = 'Please enter a valid email'
        EMAILERROR.style.color = '#ff4242'
        EMAIL.style.borderColor = '#ff4242'
      } else {
        EMAILERROR.textContent = ''
        EMAIL.style.borderColor = '#2ecc71'
      }
    })
  }

  const sortArrayAndSum = () => {
    const ARRAY_CONTENT = document.querySelector('#array-result')
    const NUMBERS = document
      .querySelector('#numbers')
      .value.split(',')
      .map(Number)
    const SORTEDNUMBERS = NUMBERS.sort((a, b) => a - b)
    const SUM = SORTEDNUMBERS.reduce((acc, cur) => acc + cur, 0)
    ARRAY_CONTENT.textContent = `Sorted Numbers: ${SORTEDNUMBERS}, Sum: ${SUM}`
  }

  const initApp = () => {
    let count = 0
    const ACTION = document.querySelector('#action')
    const TITLE = document.querySelector('#title')
    const COUNTER = document.querySelector('#counter')
    const ARRAY_ACTION = document.querySelector('#array-action')

    // event listener

    ACTION.addEventListener('click', e => {
      e.preventDefault()
      count++
      COUNTER.textContent = `Clicks: ${count}`
      TITLE.textContent = 'Text changed!'
      TITLE.style.color = '#ff4242'
      addBox()
    })

    ARRAY_ACTION.addEventListener('click', e => {
      e.preventDefault()
      sortArrayAndSum()
    })

    validateForm()
  }

  initApp()
})

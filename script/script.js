const navItems = document.querySelectorAll('.nav-item')
let formerId = 0

console.log(`
 _                       
|_)  _   _  o  _       _ 
|_) (_) | | | (_) |_| |  
           _|            
      \\_________/
      
`)

// Creation of the intersection observer
const options = {
  root: null, // The element that is used as the viewport for checking visibility of the target - null => the browser viewport
  rootMargin: '0px', //Margin around the root.
  threshold: 0.2 // 60% of the element is visible
}

const observer = new IntersectionObserver(handleObserver, options)

// Targeting an element to be observed

const targets = document.querySelectorAll('.section')

targets.forEach(target => {
  observer.observe(target)
})

const underline = (id) => {

  navItems[formerId].classList.remove('displayed')
  navItems[id].classList.add('displayed')
  formerId = id
}

function handleObserver(entries, observer){
  entries.forEach(entry => {
    entry.isIntersecting && underline(entry.target.dataset.id)
  })
}

const yearSpan = document.querySelector('.year')
const currentYear = new Date().getFullYear()
yearSpan.innerText = currentYear
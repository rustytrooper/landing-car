const linksWrapper = document.querySelector('.section-contacts-links')
const linksArr = Array.from(linksWrapper.children)

function contactsHover(e) {
  const currentLink = e.target;
  linksArr.forEach(link => {
    if (link !== currentLink) {
      link.classList.add('contact-hover')
    }
  })
}

function contactsNoHover() {
  linksArr.forEach(link => {
    if (link.classList.contains('contact-hover')) {
      link.classList.remove('contact-hover')
    }
  })
}

export { contactsHover, contactsNoHover, linksArr }
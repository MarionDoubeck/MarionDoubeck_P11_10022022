const openClose = (e, contentClassName) => {
  const elem=e.target
  const content = document.getElementsByClassName(contentClassName)[0];
  if (elem.classList.contains('closed')) {
    elem.classList.remove('closed');
    elem.classList.add('opened');
    content.classList.remove('hidden');
  }else{
    elem.classList.remove('opened');
    elem.classList.add('closed');
    content.classList.add('hidden');
  }
};

export default openClose;

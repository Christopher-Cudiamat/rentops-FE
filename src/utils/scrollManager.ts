export const scrollStop = (flag: boolean) => {
  if(flag){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
}

export const scrollToTop = () => {
  window.scrollTo(0, 0)
}
export const scrollStop = (flag: boolean) => {
  if(flag){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
}

export const scrollToTop = (behavior?: string) => {
  if(behavior){
    window.scrollTo({top: 0,behavior: 'smooth'});
  } else {
    window.scrollTo(0, 0);
  }

}
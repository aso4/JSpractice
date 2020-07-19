function handleClick(event) {
  // console.log(event.target.href); // returns full url
  document.getElementsByTagName('body')[0].style.background = 'red'
  return false; // tell the browser to stop after execution
}




document.onreadystatechange = closeLoading
function closeLoading() {
  if(document.readyState == "complete") 
    setTimeout(() => {
      document.getElementById('loading-container').style.visibility="hidden";
    }, 1000);
  else {document.getElementById('loading-container').style.visibility="visible";}
}

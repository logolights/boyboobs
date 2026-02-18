function copyrightYear() {

  document.getElementById("yearText").innerHTML = new Date().getFullYear().toString(); 
  
}
copyrightYear();

//using .toString because getFullYear doesn't return a string
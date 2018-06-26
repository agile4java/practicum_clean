function readXML(incomingXML) {
  //var parser = new DOMParser();
  var x = incomingXML.getElementsByTagName("CategoryName");
  var catArray;
  for (i = 0; i < x.length; i++) {
    catArray += "<li>";
    catArray += x[i].childNodes[0].nodeValue + "</li>";
  }
  console.log("Function readXML, catArray = " + catArray);
  console.log("");
  document.getElementById("categoryList").innerHTML = catArray;


}
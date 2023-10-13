 
 const texto = document.getElementById("text")
 fetch("html.txt")
 .then((res) => res.text())
 .then(text=> {
text = text.replace(/(\`\*\*|\*\*`)/g,"")
    console.log(text)
    texto.textContent=text;
 })
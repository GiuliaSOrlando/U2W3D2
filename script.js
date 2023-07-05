const saveBtn = document.getElementById("save")
const resetBtn = document.getElementById("reset")
const inputFld = document.getElementById("name")
const savedRsltBox = document.querySelector("ul")

let save = function () {
  let inputField = inputFld.value
  localStorage.setItem("userName", inputField)
  const newLi = document.createElement("li")
  newLi.innerText = `Nome salvato: ${inputField}`
  savedRsltBox.appendChild(newLi)
  alert("Nome salvato correttamente")
}

let reset = function () {
  inputFld.value = ""
  localStorage.removeItem("userName")
  savedRsltBox.removeChild(savedRsltBox?.lastElementChild)
  alert("Nome rimosso correttamente")
}

saveBtn.addEventListener("click", save)
resetBtn.addEventListener("click", reset)

window.addEventListener("load", function () {
  setInterval(function () {
    let time = sessionStorage.getItem("time")
    if (time) {
      let timeSite = new Date().getTime() - time
      let timeSiteSec = (sec = Math.floor((timeSite / 1000) % 60))
      document.getElementById("counter").innerText = timeSiteSec
    } else {
      time = new Date().getTime()
      sessionStorage.setItem("time", time)
    }
  }, 1000)
})

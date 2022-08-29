import "bootstrap"
import "@fortawesome/fontawesome-free/css/all.css"
import "bootstrap/dist/css/bootstrap.css"
import "./styles.scss"
import np from "numjs"
import {DecisionTreeClassifier} from "./model.js"

const clf = new DecisionTreeClassifier()
const labels = ["Calling 📞", "Chatting ⌨️", "Reading 📘"]
const imgPathes = [
  "../images/cat_calling.gif",
  "../images/cat_typing.gif",
  "../images/cat_reading.gif"
]
let prediction = null
let evts = []
let firstSecond = 0

const requestPermission = function () {
  if (
    typeof DeviceMotionEvent !== "undefined" &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission()
      .then((response) => {
        if (response === "granted") {
          window.addEventListener("devicemotion", (e) => {
            if (prediction != null) evts.push(e)
          })
        }
      })
      .catch(console.error)
  }
}

document.getElementById("predict").onchange = function () {
  if (this.checked) {
    requestPermission()
    prediction = window.setInterval(predict, 1000)
  } else {
    window.clearInterval(prediction)
    prediction = null
    document.getElementById("result").innerHTML =
      "Stop staring 👀. Toggle the button!"
    evts = []
    firstSecond = 0
  }
}

const predict = function () {
  if (evts.length === 0) {
    let status = ""
    if (firstSecond === 0) {
      status = "Loading..."
      firstSecond += 1
    } else {
      status = "Seeing an error 🆘. Please, try again."
    }
    document.getElementById("result").innerHTML = status
  } else {
    const data = getMotionData(evts)
    const inputVector = generateInputData(data)
    const pred = clf.predict(inputVector)
    document.getElementById("result").innerHTML = labels[pred]
    const img = document.createElement("img")
    img.src = imgPathes[pred]
    img.setAttribute("height", "160")
    img.setAttribute("width", "200")
    document.getElementById("result").appendChild(document.createElement("br"))
    document.getElementById("result").appendChild(img)
  }
  evts = []
}

const getMotionData = function (evts) {
  let data = []
  let evtsData = []
  if (evts.length > 0) {
    for (let i in evts) {
      let event = evts[i]
      if (event instanceof DeviceMotionEvent) {
        evtsData.push(event.acceleration.y)
        evtsData.push(event.acceleration.z)
        evtsData.push(event.accelerationIncludingGravity.y)
        evtsData.push(event.accelerationIncludingGravity.z)
        evtsData.push(event.rotationRate.beta)
      }
      data.push(evtsData)
      evtsData = []
    }
    return data
  }
}

const generateInputData = function (data) {
  const arr = np.array(data)

  const y0 = arr.slice(0, [0, 1])
  const z0 = arr.slice(0, [1, 2])
  const y = arr.slice(0, [2, 3])
  const z = arr.slice(0, [3, 4])
  const beta = arr.slice(0, [4, 5])

  const y0__root_mean_square = np.sqrt(np.mean(y0.pow(2)))
  const z0__variance = Math.pow(np.std(z0), 2)
  const y__mean = np.mean(y)
  const z__minimum = np.min(z)
  const beta__length = beta.length
  const beta__root_mean_square = np.sqrt(np.mean(beta.pow(2)))

  const inputVector = []
  inputVector.push(y0__root_mean_square)
  inputVector.push(z0__variance)
  inputVector.push(y__mean)
  inputVector.push(z__minimum)
  inputVector.push(beta__length)
  inputVector.push(beta__root_mean_square)

  return inputVector
}

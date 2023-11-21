function addImageByCanvas () {
  const element = document.querySelector(".for-canvas")

  const canvas = document.createElement("canvas")
  canvas.width = 100
  canvas.height = 100
  element.appendChild(canvas)

  const ctx = canvas.getContext("2d")
  loadImage("/img-1.png").then((img) => {
    ctx.drawImage(img, 0, 0, 100, 100)
  })
}

function addImageByCss () {
  const element = document.querySelector(".for-css")
  element.classList.add("with-img")
}

function loadImage (fileName) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      resolve(img)
    }
    img.src = fileName
  })
}

function addPreloadLink (fileName) {
  const link = document.createElement("link")
  link.rel = "preload"
  link.as = "image"
  link.href = fileName
  document.head.appendChild(link)
}


function preloadByImageElement () {
  Promise.all([
    loadImage("/img-1.png"),
    loadImage("/img-2.png")
  ]).then(() => {
    console.log("imgs loaded")
  })
}

function preloadByPreloadLink () {
  addPreloadLink("/img-1.png")
  addPreloadLink("/img-2.png")
  console.log("imgs loaded")
}


export function cactus (canvas, image) {
  const context = canvas.getContext('2d')
  context.clearRect(0, 0, image.width, image.height)
  context.drawImage(image, 0, 0, image.width, image.height)
}

export default class Cactus {
  constructor (canvas) {
    this.canvas = canvas
    this.image = null
    this.scaleX = 1
    this.scaleY = 1
    this.angle = 0
    this.rotate()
    this.filters = {
      brightness: 100,
      contrast: 100,
      saturation: 0,
      hue: 0,
      blur: 0,
      invert: 0
    }
  }

  setCanvas (canvas) {
    this.canvas = canvas
  }

  setImage (image) {
    this.image = image
    this.canvas.width = image.width
    this.canvas.height = image.height
  }

  brightness (value) {
    this.filters.brightness = value
  }

  contrast (value) {
    this.filters.contrast = value
  }

  saturation (value) {
    this.filters.saturation = value
  }

  hue (value) {
    this.filters.hue = value
  }

  grayscale (value) {
    this.filters.grayscale = value
  }

  sepia (value) {
    this.filters.sepia = value
  }

  blur (value) {
    this.filters.blur = value
  }

  invert (value) {
    this.filters.invert = value
  }

  reset () {
    this.filters = {
      brightness: 100,
      contrast: 100,
      saturation: 0,
      hue: 0,
      blur: 0,
      invert: 0
    }
  }

  getFilters () {
    return `
      brightness(${this.filters.brightness}%)
      contrast(${this.filters.contrast}%)
      saturate(${this.filters.saturation}%)
      grayscale(${this.filters.grayscale}%)
      sepia(${this.filters.sepia}%)
      hue-rotate(${this.filters.hue}deg)
      blur(${this.filters.blur}px)
      invert(${this.filters.invert}%)
      `
  }

  mirror () {
    this.scaleX = this.scaleX * -1
  }

  flip () {
    this.scaleY = this.scaleY * -1
  }

  rotate (degrees = 0) {
    this.angle = this.normalizeAngle(this.angle + degrees)
  }

  normalizeAngle (angle) {
    return angle + Math.ceil(-angle / 360) * 360
  }

  getRotation (context) {
    context.translate(this.canvas.width / 2, this.canvas.height / 2)
    context.rotate(this.angle * Math.PI / 180)
    context.translate(-this.canvas.width / 2, -this.canvas.height / 2)
    return context
  }

  render () {
    let context = this.canvas.getContext('2d')
    context.save()
    context.clearRect(0, 0, this.image.width, this.image.height)
    context = this.getRotation(context)
    context.scale(this.scaleX, this.scaleY)
    context.filter = this.getFilters()
    context.drawImage(this.image, 0, 0, this.image.width * this.scaleX, this.image.height * this.scaleY)
    context.restore()
  }
}

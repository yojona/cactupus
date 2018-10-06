export function cactus (canvas, image) {
  const context = canvas.getContext('2d')
  context.clearRect(0, 0, image.width, image.height)
  context.drawImage(image, 0, 0, image.width, image.height)
}

export default class Cactus {
  constructor (canvas) {
    this.canvas = canvas
    this.image = null
    this.filters = {
      brightness: 100,
      contrast: 100,
      saturation: 0,
      hue: 0,
      blur: 0
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

  getFilters () {
    return `
      brightness(${this.filters.brightness}%)
      contrast(${this.filters.contrast}%)
      saturate(${this.filters.saturation}%)
      grayscale(${this.filters.grayscale}%)
      sepia(${this.filters.sepia}%)
      hue-rotate(${this.filters.hue}deg)
      blur(${this.filters.blur}px)
      `
  }

  render () {
    const context = this.canvas.getContext('2d')
    context.clearRect(0, 0, this.image.width, this.image.height)
    context.filter = this.getFilters()

    console.log(this.getFilters())
    context.drawImage(this.image, 0, 0, this.image.width, this.image.height)
  }
}

export function getCanvas () {
  return document.getElementsByTagName('canvas')[0]
}

export function open () {
  document.getElementById('inputFile').click()
}

export function close () {
  this.resetFilters()
  this.setState({
    title: 'Fotoship',
    photoLoaded: false
  })
}

export function load (photo) {
  const reader = new window.FileReader()

  if (photo) {
    const canvas = this.getCanvas()
    const context = canvas.getContext('2d')

    reader.readAsDataURL(photo)
    reader.addEventListener('load', () => {
      const img = new window.Image()
      img.src = reader.result

      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        context.drawImage(img, 0, 0, img.width, img.height)
        canvas.removeAttribute('data-caman-id')
        this.setState({
          title: photo.name,
          photoLoaded: true
        })
      }
    }, false)
    this.resetFilters()
  }
}

export function setLevel (name, value) {
  let levels = this.data.levels
  levels[name] = value
  this.setState({levels})
  this.updateFilters()
}

export function resetFilters () {
  let levels = this.data.levels
  for (const setting in levels) {
    levels[setting] = 0
  }
  this.setState({levels})
  this.updateFilters()
}

export function updateFilters () {
  const self = this
  if (this.data.photoLoaded) {
    window.Caman(this.getCanvas(), function () {
      this.revert()
      this.brightness(self.data.levels.brightness)
        .contrast(self.data.levels.contrast)
        .saturation(self.data.levels.saturation)
        .hue(self.data.levels.hue)
        .vibrance(self.data.levels.vibrance)
        .render()
    })
  }
}

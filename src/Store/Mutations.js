import Cactus from '../libs/Cactus'
const Cactupus = new Cactus()

export function getCanvas () {
  return document.getElementsByTagName('canvas')[0]
}

export function getZoom () {
  return this.data.zoom
}

export function setZoom (zoom) {
  this.setState({zoom})
}

export function zoomIn () {
  if (this.getZoom() < 100) {
    const zoom = this.getZoom() + 0.1
    this.setZoom(zoom)
  }
}

export function zoomOut () {
  if (this.getZoom() > 0.2) {
    const zoom = this.getZoom() - 0.1
    this.setZoom(zoom)
  }
}

export function getFileName (str) {
  if (str.indexOf('.') > 0) {
    str = str.substring(0, str.lastIndexOf('.'))
  }
  return str
}

export function open () {
  document.getElementById('inputFile').click()
}

export function close () {
  this.resetAll()
  this.setState({
    title: 'Corico Photo Editor',
    photoLoaded: false,
    fileName: null,
    fileSize: 0
  })
}

export function load (photo) {
  const reader = new window.FileReader()

  if (photo) {
    reader.readAsDataURL(photo)
    reader.addEventListener('load', () => {
      const img = new window.Image()
      img.src = reader.result
      img.onload = () => {
        Cactupus.setCanvas(this.getCanvas())
        Cactupus.setImage(img)
        Cactupus.render()
        this.setState({
          title: `${photo.name} - Corico Photo Editor`,
          fileName: this.getFileName(photo.name),
          fileSize: photo.size,
          photoLoaded: true
        })
      }
    }, false)
    this.resetAll()
  }
}

export function resetFilters () {
  const levels = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    grayscale: 0,
    sepia: 0,
    hue: 360,
    blur: 0,
    invert: 0
  }
  this.setState({levels})
  this.updateFilters()
}

export function resetAll () {
  Cactupus.resetAll()
  this.resetFilters()
  this.setZoom(1)
}

export function restore () {
  Cactupus.resetAll()
  this.resetFilters()
}

export function setLevel (name, value) {
  let levels = this.data.levels
  levels[name] = value
  this.updateFilters(value)
  this.setState({levels})
}

export function updateFilters (value) {
  if (this.data.photoLoaded) {
    for (const filter in this.data.levels) {
      Cactupus[filter](this.data.levels[filter])
    }
    Cactupus.render()
  }
}

export function mirrorImage () {
  Cactupus.mirror()
  Cactupus.render()
  this.setState({mirrored: this.data.mirrored})
}

export function flipImage () {
  Cactupus.flip()
  Cactupus.render()
  this.setState({flipped: this.data.flipped})
}

export function rotateImage (degrees) {
  Cactupus.rotate(degrees)
  Cactupus.render()
  this.setState({flipped: this.data.flipped})
}

export function save (type = 'png', name = this.data.fileName) {
  Cactupus.save(name, type)
}

// Presets //
export function overExpose (bool) {
  Cactupus.overExpose = bool
  Cactupus.render()
}

export function setPreset1977 () {
  const levels = {
    brightness: 110,
    contrast: 110,
    saturation: 130,
    grayscale: 0,
    sepia: 0,
    hue: 360,
    blur: 0,
    invert: 0
  }

  const overlay = {
    style: 'rgba(243, 106, 188, 0.3)',
    blendMode: 'screen'
  }

  Cactupus.brightness(levels.brightness)
  Cactupus.contrast(levels.contrast)
  Cactupus.saturation(levels.saturation)
  Cactupus.setOverlay(overlay.style, overlay.blendMode)
  Cactupus.render()
  this.setLevel('brightness', levels.brightness)
  this.setLevel('contrast', levels.contrast)
  this.setLevel('saturation', levels.saturation)
  this.setLevel('grayscale', levels.grayscale)
  this.setLevel('sepia', levels.sepia)
  this.setLevel('hue', levels.hue)
  this.setLevel('blur', levels.blur)
  this.setLevel('invert', levels.invert)
  this.setState({overlay})
}

export function setPresetBrannan () {
  const levels = {
    brightness: 100,
    contrast: 140,
    saturation: 100,
    grayscale: 0,
    sepia: 50,
    hue: 360,
    blur: 0,
    invert: 0
  }

  const overlay = {
    style: 'rgba(161, 44, 199, 0.31)',
    blendMode: 'lighten'
  }

  Cactupus.brightness(levels.brightness)
  Cactupus.contrast(levels.contrast)
  Cactupus.saturation(levels.saturation)
  Cactupus.setOverlay(overlay.style, overlay.blendMode)
  Cactupus.render()
  this.setLevel('brightness', levels.brightness)
  this.setLevel('contrast', levels.contrast)
  this.setLevel('saturation', levels.saturation)
  this.setLevel('grayscale', levels.grayscale)
  this.setLevel('sepia', levels.sepia)
  this.setLevel('hue', levels.hue)
  this.setLevel('blur', levels.blur)
  this.setLevel('invert', levels.invert)
  this.setState({overlay})
}

export function setPresetInkWell () {
  const levels = {
    brightness: 110,
    contrast: 110,
    saturation: 100,
    grayscale: 100,
    sepia: 30,
    hue: 360,
    blur: 0,
    invert: 0
  }

  const overlay = {
    style: 'rgba(0, 0, 0, 0)',
    blendMode: 'source-over'
  }

  Cactupus.brightness(levels.brightness)
  Cactupus.contrast(levels.contrast)
  Cactupus.saturation(levels.saturation)
  Cactupus.setOverlay(overlay.style, overlay.blendMode)
  Cactupus.render()
  this.setLevel('brightness', levels.brightness)
  this.setLevel('contrast', levels.contrast)
  this.setLevel('saturation', levels.saturation)
  this.setLevel('grayscale', levels.grayscale)
  this.setLevel('sepia', levels.sepia)
  this.setLevel('hue', levels.hue)
  this.setLevel('blur', levels.blur)
  this.setLevel('invert', levels.invert)
  this.setState({overlay})
}

export function setPresetReyes () {
  const levels = {
    brightness: 110,
    contrast: 85,
    saturation: 75,
    grayscale: 0,
    sepia: 22,
    hue: 0,
    blur: 0,
    invert: 0
  }

  const overlay = {
    style: 'rgba(173, 205, 239, 0.1)',
    blendMode: 'soft-light'
  }

  Cactupus.brightness(levels.brightness)
  Cactupus.contrast(levels.contrast)
  Cactupus.saturation(levels.saturation)
  Cactupus.setOverlay(overlay.style, overlay.blendMode)
  Cactupus.render()
  this.setLevel('brightness', levels.brightness)
  this.setLevel('contrast', levels.contrast)
  this.setLevel('saturation', levels.saturation)
  this.setLevel('grayscale', levels.grayscale)
  this.setLevel('sepia', levels.sepia)
  this.setLevel('hue', levels.hue)
  this.setLevel('blur', levels.blur)
  this.setLevel('invert', levels.invert)
  this.setState({overlay})
}

export function setPresetNostalgia () {
  const levels = {
    brightness: 95,
    contrast: 130,
    saturation: 75,
    grayscale: 40,
    sepia: 15,
    hue: 0,
    blur: 0,
    invert: 0
  }

  const overlay = {
    style: 'rgba(173, 205, 239, 0.2)',
    blendMode: 'soft-light'
  }

  Cactupus.brightness(levels.brightness)
  Cactupus.contrast(levels.contrast)
  Cactupus.saturation(levels.saturation)
  Cactupus.setOverlay(overlay.style, overlay.blendMode)
  Cactupus.render()
  this.setLevel('brightness', levels.brightness)
  this.setLevel('contrast', levels.contrast)
  this.setLevel('saturation', levels.saturation)
  this.setLevel('grayscale', levels.grayscale)
  this.setLevel('sepia', levels.sepia)
  this.setLevel('hue', levels.hue)
  this.setLevel('blur', levels.blur)
  this.setLevel('invert', levels.invert)
  this.setState({overlay})
}

export function setPresetSepia () {
  const levels = {
    brightness: 100,
    contrast: 100,
    saturation: 75,
    grayscale: 20,
    sepia: 100,
    hue: 0,
    blur: 0,
    invert: 0
  }

  const overlay = {
    style: 'rgba(173, 205, 239, 0.2)',
    blendMode: 'soft-light'
  }

  Cactupus.brightness(levels.brightness)
  Cactupus.contrast(levels.contrast)
  Cactupus.saturation(levels.saturation)
  Cactupus.setOverlay(overlay.style, overlay.blendMode)
  Cactupus.render()
  this.setLevel('brightness', levels.brightness)
  this.setLevel('contrast', levels.contrast)
  this.setLevel('saturation', levels.saturation)
  this.setLevel('grayscale', levels.grayscale)
  this.setLevel('sepia', levels.sepia)
  this.setLevel('hue', levels.hue)
  this.setLevel('blur', levels.blur)
  this.setLevel('invert', levels.invert)
  this.setState({overlay})
}

export function setPresetStinson () {
  const levels = {
    brightness: 115,
    contrast: 75,
    saturation: 85,
    grayscale: 0,
    sepia: 0,
    hue: 0,
    blur: 0,
    invert: 0
  }

  const overlay = {
    style: 'rgba(240, 149, 128, 0.2)',
    blendMode: 'soft-light'
  }

  Cactupus.brightness(levels.brightness)
  Cactupus.contrast(levels.contrast)
  Cactupus.saturation(levels.saturation)
  Cactupus.setOverlay(overlay.style, overlay.blendMode)
  Cactupus.render()
  this.setLevel('brightness', levels.brightness)
  this.setLevel('contrast', levels.contrast)
  this.setLevel('saturation', levels.saturation)
  this.setLevel('grayscale', levels.grayscale)
  this.setLevel('sepia', levels.sepia)
  this.setLevel('hue', levels.hue)
  this.setLevel('blur', levels.blur)
  this.setLevel('invert', levels.invert)
  this.setState({overlay})
}

export function getBrightness () { return this.data.levels.brightness }
export function getContrast () { return this.data.levels.contrast }
export function getSaturation () { return this.data.levels.saturation }
export function getGrayscale () { return this.data.levels.grayscale }
export function getSepia () { return this.data.levels.sepia }
export function getHue () { return this.data.levels.hue }
export function getBlur () { return this.data.levels.blur }
export function getInvert () { return this.data.levels.invert }

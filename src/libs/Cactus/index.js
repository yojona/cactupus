export function cactus (canvas, image) {
  const context = canvas.getContext('2d')
  context.clearRect(0, 0, image.width, image.height)
  context.drawImage(image, 0, 0, image.width, image.height)
}

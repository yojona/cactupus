import React from 'react'
import MenuBar from './MenuBar'
import Menu from './Menu'
import Command from './Command'
import Separator from './Separator'
import Store from '../../Store'

export default function MainMenu () {
  return (
    <MenuBar>
      <Menu label='File'>
        <Command label='Open...' shortcut='Ctrl + O' onClick={Store.open} />
        <Separator />
        <Command label='Close' shortcut='Ctrl + C' onClick={() => Store.close()} />
        <Command label='Save as PNG' shortcut='Ctrl + S' onClick={() => Store.save('png')} />
        <Command label='Save as JPEG' onClick={() => Store.save('jpeg')} />
        {/* <Separator />
        <Command label='Print...' shortcut='Ctrl + P' onClick={() => Store.setBrightness(20)} />
        <Separator />
        <Command label='Preferences' shortcut='Ctrl + K' /> */}
      </Menu>
      {/* <Menu label='Edit'>
        <Command label='Undo' shortcut='Ctrl + Z' onClick={() => Store.undo()} />
        <Command label='Redo' shortcut='Ctrl + Shift + Z' />
      </Menu> */}
      <Menu label='View'>
        <Command label='Zoom in' shortcut='Ctrl + +' onClick={() => Store.zoomIn()} />
        <Command label='Zoom out' shortcut='Ctrl + -' onClick={() => Store.zoomOut()} />
        <Separator />
        <Command label='Zoom 50%' shortcut='Ctrl + 0' onClick={() => Store.setZoom(0.5)} />
        <Command label='Zoom 100%' shortcut='Ctrl + 0' onClick={() => Store.setZoom(1)} />
        <Command label='Zoom 200%' shortcut='Ctrl + 0' onClick={() => Store.setZoom(2)} />
      </Menu>
      <Menu label='Image'>
        <Command label='Flip' shortcut='Ctrl + Down' onClick={() => Store.flipImage()} />
        <Command label='Mirror' shortcut='Ctrl + M' onClick={() => Store.mirrorImage()} />
        <Separator />
        <Command label='Rotate left' shortcut='Ctrl + Left' onClick={() => Store.rotateImage(-90)} />
        <Command label='Rotate right' shortcut='Ctrl + Right' onClick={() => Store.rotateImage(90)} />
        <Separator />
        <Command label='Restore image' shortcut='Ctrl + r' onClick={() => Store.restore()} />
      </Menu>
      <Menu label='Presets'>
        <Command label='Soft overlay' onClick={() => Store.overExpose(true)} />
        <Command label='Remove soft overlay' onClick={() => Store.overExpose(false)} />
        <Separator />
        <Command label='Nostalgia' onClick={() => Store.setPresetNostalgia()} />
        <Command label='1977' onClick={() => Store.setPreset1977()} />
        <Command label='Brannan' onClick={() => Store.setPresetBrannan()} />
        <Command label='InkWell' onClick={() => Store.setPresetInkWell()} />
        <Command label='Reyes' onClick={() => Store.setPresetReyes()} />
        <Command label='Sepia' onClick={() => Store.setPresetSepia()} />
        <Command label='Stinson' onClick={() => Store.setPresetStinson()} />
      </Menu>
      <Menu label='Help'>
        <Command label='Jonathan Ayala yojona@msn.com' />
      </Menu>
    </MenuBar>
  )
}

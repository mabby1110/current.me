import { useEffect } from 'react'
import * as THREE from 'three'
import Style from '@/app/scenes/homeScene.module.css'

export default function HomeScene() {
  
  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    const height = window.innerHeight
    
    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('app') as HTMLCanvasElement
    })
    renderer.setSize(width, height)
    const mainCamera = new THREE.PerspectiveCamera(60, width/height, 0.1, 100)
    
    const scene = new THREE.Scene()
    
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshPhongMaterial({color: 0xFFFFFF})
    const cube = new THREE.Mesh(geometry, material)
    cube.position.z = -5
    cube.position.y = 1
    scene.add(cube)

    const light = new THREE.DirectionalLight(0xFFFFFF, 1)
    light.position.set(0, 4, 2)
    scene.add(light)
    
    const orbitControl = new THREE.CameraHelper(mainCamera)
    scene.add(orbitControl)
    
    renderer.render(scene, mainCamera)

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        renderer.setSize(width, height)
        renderer.render(scene, mainCamera)
      }
      
      window.addEventListener('resize', handleResize)
      
      // Set initial size
      handleResize()
      
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])
  }

  return (
    <canvas id="app"></canvas>
  )
}



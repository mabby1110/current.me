import { useEffect, useState } from 'react'
import * as THREE from 'three'

export default function HomeScene() {
  const [renderer, setRenderer] = useState(false)
  const [mainCamera, setMainCamera] = useState(false)
  const [scene, setScene] = useState(false)

  useEffect(() => {
      const width = window.innerWidth
      const height = window.innerHeight

      const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('app') as HTMLCanvasElement })
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
      light.position.set(0, 6, 2)
      scene.add(light)

      const orbitControl = new THREE.CameraHelper(mainCamera)
      scene.add(orbitControl)

      setRenderer(renderer)
      setMainCamera(mainCamera)
      setScene(scene)

      renderer.render(scene, mainCamera)
  }, [])

  return (
    <canvas id="app"></canvas>
  )
}
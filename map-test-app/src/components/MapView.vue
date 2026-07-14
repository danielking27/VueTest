<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import Graphic from '@arcgis/core/Graphic'
import Point from '@arcgis/core/geometry/Point'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import '@arcgis/core/assets/esri/themes/light/main.css'
import { wos } from '../data/wos.js'

const mapContainer = ref(null)
let view = null

onMounted(() => {
  const map = new Map({
    basemap: 'topo-vector'
  })

  view = new MapView({
    container: mapContainer.value,
    map: map,
    center: [-111.8315, 33.4152], // Mesa, AZ (longitude, latitude)
    zoom: 11
  })

  // Add work orders as graphics on the map (wkid 102100) as blue markers with white outlines. 
  // Each marker should have a popup that shows the status, asset and location of the work order.

})

onBeforeUnmount(() => {
  if (view) {
    view.destroy()
    view = null
  }
})
</script>

<template>
  <div ref="mapContainer" class="map-view"></div>
</template>

<style scoped>
.map-view {
  width: 100%;
  height: 100%;
}
</style>

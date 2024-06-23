<script setup lang="ts">
import layers from 'protomaps-themes-base'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Map, NavigationControl, addProtocol } from 'maplibre-gl'
import { Protocol } from 'pmtiles'
import { onMounted } from 'vue'

onMounted(() => {
  const protocol = new Protocol()
  addProtocol('pmtiles', protocol.tile)
  const map = new Map({
    container: 'map',
    style: {
      version: 8,
      glyphs: 'https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf',
      sources: {
        protomaps: {
          type: 'vector',
          url: 'pmtiles://lille.pmtiles',
          attribution: '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>',
        },
      },
      layers: layers('protomaps', 'light'),
    },
    center: [3.058999, 50.632043],
    zoom: 13,
    minZoom: 13,
    dragRotate: false,
    maxBounds: [[2.987243, 50.604817], [3.139948, 50.668033]],
  })

  map.addControl(
    new NavigationControl({
      visualizePitch: true,
    }),
  )
})
</script>

<template>
  <div id="map" />
</template>

<style scoped>
#map {
  height: 100vh;
}
</style>

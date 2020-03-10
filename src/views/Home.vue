<template>
  <div class="home">
    <vl-map style="height:calc(100vh * 0.6)">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>
      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>
      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-feature>
        <vl-geom-point :coordinates="[38.726634,9.003391]"></vl-geom-point>
        <vl-geom-polygon :coordinates="[[[-98.844959,19.691586],[-98.842749,19.690980],[-98.842170,19.693122],[-98.844358,19.693667],[-98.844959,19.691586]]]"></vl-geom-polygon>
      </vl-feature>

      <vl-overlay id="overlay" :position="overlayCoordinate">
        <template slot-scope="scope">
          <div class="overlay-content">
            Hello world!<br>
            Position: {{ scope.position }}
          </div>
        </template>
      </vl-overlay>
    
    </vl-map>
    <div style="padding: 20px">
      Zoom: {{ zoom }}<br>
      Center: {{ center }}<br>
      Rotation: {{ rotation }}<br>
      My geolocation: {{ geolocPosition }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data () {
      return { 
        zoom: 12,
        center: [0,0],
        rotation: 90,
      }
    },
}
</script>

<style scoped>
	#map{
		height: 100%;
		width: 100%;
	}

</style>

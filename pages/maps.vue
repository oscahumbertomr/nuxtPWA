<template>
  <v-row>
    <!-- <input class="input" ref="searchTextField" type="text" /> -->
    <v-col cols="12" class="ma-0 pa-0">
        <div id="map"></div>
    </v-col>
    <v-col cols="12" >
        <h3 v-if="monto" class="text-center"> Distancia en carro es de {{ distanciaEntrega }} ({{tiempoEntrega}}), costo entrega {{monto}} MXN </h3>
    </v-col>
  </v-row>
</template>

<script>
const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Package: @nuxtjs/dotenv
const amaiCoordenadas = { lat: 21.0321475, lng: -89.6477273 };
var map;

export default {
  name: "about",
  head() {
    return {
      title: "Maps",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "Maps",
          name: "Maps",
          content: "Maps",
        },
      ],
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`,
        },
      ],
    };
  },
  data() {
    return {
      directionsData: null,
      distancia: null,
      monto: 0,
      tiempoEntrega:0,
      distanciaEntrega:0,
      map: null,
      amaiMarker: null,
      directionsService: null,
      directionsRenderer: null,
    };
  },
  methods: {
    initMap() {
      // The map, centered on Central Park
      const center = { lat: 21.0107774, lng: -89.6429821 };
      const options = {
        zoom: 13.25,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      this.map = new google.maps.Map(document.getElementById("map"), options);

      let vm = this;
      // Locations of landmarks

      // The markers for The Dakota and The Frick Collection
      const image =
    "https://www.ingoscar.co/amai.png";
  
      vm.amaiMarker = new google.maps.Marker({
        position: amaiCoordenadas,
        map: this.map,
        title: 'Amai Tienda',
        icon: image,
      });
      // var mk2 = new google.maps.Marker({ position: frick, map: map });
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer();
      this.directionsRenderer.setMap(this.map); // Existing map object displays directions
      // Create route from existing points used for markers

      google.maps.event.addListener(this.map, "click", (event) => {
        vm.clickMaps(event);
      });
    },
    clickMaps(event) {
      //var mk2 = new google.maps.Marker({ position: frick, map: map });
      if(this.amaiMarker){
        this.amaiMarker.setMap(null)
        this.amaiMarker = null;
      }
      const route = {
        origin: amaiCoordenadas,
        destination: event.latLng,
        travelMode: "DRIVING",
      };
      let vm = this;
      this.directionsService.route(route, function (response, status) {
        // anonymous function to capture directions
        if (status !== "OK") {
          window.alert("Directions request failed due to " + status);
          return;
        } else {
          vm.directionsRenderer.setDirections(response); // Add route to the map
          var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
          vm.directionsData = response.routes[0].legs[0];
          if (!directionsData) {
            window.alert("Directions request failed");
            return;
          } else {
            vm.distancia = Math.ceil(directionsData.distance.value / 1000);
            vm.distanciaEntrega = directionsData.distance.text
            vm.tiempoEntrega = directionsData.duration.text
            if (vm.distancia <= 5) {
              vm.monto = 35;
            } else {
              let kilometrosExtra = vm.distancia - 5;
              let diferido = kilometrosExtra * 5;
              vm.monto = diferido + 35;
            }
          }
        }
      });
    },
  },
  mounted() {
    //var input = this.$refs.searchTextField; //.getElementById('searchTextField');
    //new google.maps.places.Autocomplete(input);
    this.initMap();
    window.vm = this;
  },
};
</script>

<style scoped>
#map {
  height: 70vh;
  width: 100%;
}
</style>
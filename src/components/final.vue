
<template>
  <section class="src-components-final">
    <div class = "jumbotron">
      <h1>Conversor de temperatura</h1>
    <div>
      Ingrese Temperatura C°: <input type="number" v-model="gradosCelsius" />
    </div>
    <br>
    <br>
    <div v-bind:style="{ color: getEstiloTemp(this.gradosCelsius)}">
      <p>Valor convertido °F {{ calcularFarenheit }} </p>
    </div>

     <div v-bind:style="{ color: getEstiloTemp(this.gradosCelsius)}">
      <p>Valor convertido °K {{ calcularKelvin }}</p>
    </div>

    <div>
      <p>Respuestas: 1:c 2:b 3:c 4:a 5:b </p>
    </div>
  
  </div>


    
  </section>
</template>

<script lang="js">


  export default  {
    name: 'src-components-final',
    props: [],
    mounted () {

    },
    data () {
      return {
        gradosCelsius: 0      
      }
    },
    methods: {
      getEstiloTemp(temp){
        let estilo = ''
        if (temp <= 0 ) {
          estilo = 'blue'
        }

        else if (temp > 0 && temp < 15) {
          estilo = 'magenta'
        }
        else{
          estilo = 'red'
        }
        return estilo
      } 

    },
    
    computed: {
    calcularFarenheit() {
      let gradosFarenheit = (this.gradosCelsius * 9/5) + 32
		return gradosFarenheit
	},

   calcularKelvin() {
      let gradosKelvin = (this.gradosCelsius* 1)  + 273.15
		return gradosKelvin
	}
}
}
</script>

<style scoped lang="css"></style>
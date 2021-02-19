
var articules = new Vue({
    el: '#sobreMi',
    data: {
        message: 'Me gusta aprender a diario sobre todo lo relacionado con la tecnología y finanzas, es increible lo que puedes encontrar en internet.'
    }
})

var posts = new Vue({
    el: '#posts',
    data () {
      return {
        seen: true,
        articu: null
      }
    },
    mounted () {
        axios
          .get('json/articules.json')
          .then(response => (this.articu = response.data))
      }
})
 
var experiences = new Vue({
    el: '#experience',
    data () {
        return {
          seen: true,
          experien: null
        }
      },
      mounted () {
          axios
            .get('json/experiences.json')
            .then(response => (this.experien = response.data))
        }
})

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
        info: null
      }
    },
    mounted () {
        axios
          .get('posts/articules.json')
          .then(response => (this.info = response.data))
      }
})
   
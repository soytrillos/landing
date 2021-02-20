
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
          .get('https://api-articules-simon.herokuapp.com/articules')
          .then(response => (this.articu = response.data))
      }
})

var postsCount = new Vue({
  el: '#countPos',
  data () {
    return {
      count: null
    }
  },
  mounted () {
    axios
      .get('https://api-articules-simon.herokuapp.com/articules/count')
      .then(response => (this.count = response.data))
  }
})

var artHtml = new Vue({
  el: '#artHtml',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api-articules-simon.herokuapp.com/articules/')
      .then(response => (this.info = response.data))
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

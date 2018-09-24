import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      json: {
        "altura": 50,
        "nome": "Trovarius",
        "nascimento": "2012-04-23T18:25:43.511Z",
        "skills": ["careca", "legal"],
        "widget": {
          "debug": "on",
          "window": {
            "title": "Sample Konfabulator Widget",
            "name": "main_window",
            "width": 500,
            "height": 500
          },
          "image": {
            "src": "Images/Sun.png",
            "name": "sun1",
            "hOffset": 250,
            "vOffset": 250,
            "alignment": "center"
          },
          "text": {
            "data": "Click Here",
            "size": 36,
            "style": "bold",
            "name": "text1",
            "hOffset": 250,
            "vOffset": 100,
            "alignment": "center",
            "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
          }
        }
      }
    },
    mutations: {

    }
  })
}

export default createStore

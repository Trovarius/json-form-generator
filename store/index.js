import Vuex from 'vuex'
import Vue from 'vue'

const createStore = () => {
  return new Vuex.Store({
    state: {
      json: {
        "altura": 50,
        "nome": "Trovarius",
        "nascimento": "2012-04-23T18:25:43.511Z",
        "skills": ["careca", "legal"],
        "caracteristicas": [{"teste": "1"}, {"teste": "2"}],
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
      addField(state, payload) {
        const arr = payload.path.split('.').filter(x => x != "");
        let obj = arr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, state.json);
        
        if(obj){
          Vue.set(obj, payload.key, payload.value) ;
        }
      }
    }
  })
}

export default createStore

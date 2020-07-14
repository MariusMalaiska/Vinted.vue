import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: "stringas",
        img: require("@/assets/img/home/rubas-1.jpg"),
        title: "Benetton striukė",
        about: "devėta, tačiau būklė ideali",
        city: "Vilnius",
        color: "chaki",
        date: "19-08-11",
        condition: "LABAI GERA",
        price: 22,
        size: "xl",
        height: 22,
        width: 11
      },
      {
        id: "stringas1",
        img: require("@/assets/img/home/rubas-2.jpg"),
        title: "Benetton striukė",
        about: "devėta, tačiau būklė ideali",
        city: "Vilnius",
        color: "chaki",
        date: "19-08-11",
        condition: "LABAI GERA",
        price: 22,
        size: " xl",
        height: 22,
        width: 11,
        brand: "zara"
      },
      {
        id: "stringas2",
        img: require("@/assets/img/home/rubas-3.jpg"),
        title: "Benetton striukė",
        about: "devėta, tačiau būklė ideali",
        city: "Vilnius",
        color: "chaki",
        date: "19-08-11",
        condition: "LABAI GERA",
        price: 22,
        size: "xl",
        height: 22,
        width: 11,
        brand: "zara"
      },
      {
        id: "stringas3",
        img: require("@/assets/img/home/rubas-4.jpg"),
        title: "Benetton striukė",
        about: "devėta, tačiau būklė ideali",
        city: "Vilnius",
        color: "chaki",
        date: "19-08-11",
        condition: "LABAI GERA",
        price: 22,
        size: "xl",
        height: 22,
        width: 11
      },
      {
        id: "stringas4",
        img: require("@/assets/img/home/rubas-5.jpg"),
        title: "Benetton striukė",
        about: "devėta, tačiau būklė ideali",
        city: "Vilnius",
        color: "chaki",
        date: "19-08-11",
        condition: "LABAI GERA",
        price: 22,
        size: " xl",
        height: 22,
        width: 11,
        brand: "zaras"
      }
    ],
    users: [
      {
        id: "stringas",
        img: require("@/assets/img/home/avatar.png"),
        username: "Iewutee",
        loginDate: "19-08-11",
        city: "Kaunas"
      },
      {
        id: "stringas1",
        img: require("@/assets/img/home/avatar.png"),
        username: "Juozaš",
        loginDate: "19-08-11",
        city: "Kaunas"
      },
      {
        id: "stringas2",
        img: require("@/assets/img/home/avatar.png"),
        username: "Wirgė",
        loginDate: "19-08-11",
        city: "Kaunas"
      },
      {
        id: "stringas3",
        img: require("@/assets/img/home/avatar.png"),
        username: "Wirgė",
        loginDate: "19-08-11",
        city: "Kaunas"
      },
      {
        id: "stringas4",
        img: require("@/assets/img/home/avatar.png"),
        username: "Wirgė",
        loginDate: "19-08-11",
        city: "Kaunas"
      }
    ]
  },

  mutations: {},
  actions: {},
  modules: {},
  getters: {
    homeItems: ({ items }) => items,
    getItemById: state => id => state.items.find(item => item.id === id),
    users: ({ users }) => users,
    getUserById: state => id => state.users.find(user => user.id === id)
  }
});

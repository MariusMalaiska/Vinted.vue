<template>
  <nav class="header__main">
    <div class="container">
      <ul>
        <li>
          <router-link to="/">
            <img class="logo" src="~@/assets/img/home/logo.png" alt />
          </router-link>
        </li>
        <li>
          <div class="header__item">
            <dropdown title="Services" :items="services" />
            <input class="search__input" type="text" id="fname" name="fname" />
          </div>
        </li>
        <li>
          <div class="header__item">
            <button class="button register">Registruotis | Prisijungti</button>
            <button class="button signin">Parduok dabar</button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Dropdown from "@/components/partials/Dropdown";
export default {
  name: "navbar",
  components: { Dropdown },
  data() {
    return {
      services: [
        {
          title: "Drabužiai",
          link: "#"
        },
        {
          title: "Nariai",
          link: "#"
        },
        {
          title: "Forumas",
          link: "#"
        },
        {
          title: "Pagalbos Centras",
          link: "#"
        }
      ]
    };
  }
};
</script>

//
<style lang="scss" scoped>
.header__main {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  height: 54px;
  background-color: #fff;
  border-bottom: 2px solid #ececec;
  z-index: 2;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    padding: unset;
    margin: unset;
    .logo {
      width: 90px;
    }

    .header__item {
      display: flex;
      align-items: center;
    }
    .search__input[type="text"] {
      // min-width: 100%;
      padding: 5px 10px;
      border-radius: 0px 10px 10px 0px;
      margin: 8px 0;
      box-sizing: border-box;
      border: none;
      background-color: #f5f6f7;
      color: #bbb;
      width: 500px;
    }
    .search__input[type="text"]:focus {
      outline: none;
    }
    // }

    .button {
      margin-left: 20px;
      background-color: transparent;
      border: 1px solid #0ab0ba;
      border-radius: 5px;
      color: #0ab0ba;
      padding: 3px 10px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }

    .signin {
      background-color: #0ab0ba;
      color: white;
    }
  }
}
</style>

<template>
  <!-- navbar-expand-lg navbar-dark fixed-top -->
  <!-- <nav class="navbar fixed-top  "> -->
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
            <button class="search__btn">
              <img class="arrow" src="~@/assets/img/home/arrow.png" alt />
            </button>
            <div class="search__dropdown__modal">
              <ul>
                <li><button class="select">Drabužiai</button></li>
                <li><button class="select">Nariai</button></li>
                <li><button class="select">Forumas</button></li>
                <li><button class="select">Pagalbos Centras</button></li>
              </ul>
            </div>
            <input class="search__input" type="text" id="fname" name="fname" />
            <!-- <div class="search__btn">
              <select>
                <option value="clothes">Drabužiai</option>
                <option value="users">Nariai</option>
                <option value="forum">Forumas</option>
                <option value="help">Pagalbos Centras</option>
              </select>
            </div> -->
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

<style lang="scss" scoped>
.header__main {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  height: 58px;
  background-color: #fff;
  border-bottom: 2px solid #ececec;
  z-index: 1;

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
      .search__btn {
        position: relative;
        margin-left: 20px;
        background-color: #f5f6f7;
        border: none;
        border-radius: 10px 0px 0px 10px;
        border-right: 1px solid #e3e4e5;
        color: #a0a0a0;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }
      .search__btn select {
        display: none;
      }
      .search__input[type="text"] {
        width: 100%;
        padding: 5px 10px;
        border-radius: 0px 10px 10px 0px;
        margin: 8px 0;
        box-sizing: border-box;
        border: none;
        background-color: #f5f6f7;
        color: #bbb;
        width: 600px;
      }
      .search__input[type="text"]:focus {
        outline: none;
      }

      .arrow {
        width: 15px;
      }
    }

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

    .search__dropdown__modal {
      display: flex;
      align-items: left;
      box-sizing: border-box;
      padding: 5px;
      box-shadow: 2px 2px 5px #888888;
      background-color: #f5f6f7;
      border-radius: 5px;
      position: absolute;
      top: 56px;
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: unset;
        margin: unset;
        li {
          .select {
            margin-left: 20px;
            background-color: transparent;
            border: none;
            border-radius: 5px;
            color: #0ab0ba;
            // text-align: center;
            text-decoration: none;
            // display: inline-block;
            font-size: 16px;
            padding: unset;
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>

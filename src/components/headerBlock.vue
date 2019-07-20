<template>
    <header class="header">
        <h1 class="header__title">Рейтинг федерации сквоша России</h1>

        <nav class="menu header__menu globalWrapper">
            <ul class="menu__list" v-if="menuList">
                <li class="menu__item" v-for="menuItem of menuList" v-bind:key="menuItem.title">
                    <router-link class="menu__link" :to="menuItem.link">
                        {{menuItem.title}}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
  export default {
    name: "headerBlock",
    data: () => ({
      menuList: [
        {
          title: 'Мужчины',
          link: '/',
        },
        {
          title: 'Женщины',
          link: '/women/',
        }
      ],
    }),
  }
</script>

<style scoped>
    .header {
        width: 100%;
        background-color: #333;
        color: #ffc107;
    }

    .header__title {
        margin: 0;
        font-size: 3.5rem;
        font-weight: 300;
    }

    .menu__list {
        display: flex;
        padding: 0;
        list-style-type: none;
    }

    .menu__item {
        margin-right: 30px;
    }

    .menu__link {
        padding: 1rem;
        font-weight: 600;
        color: #ffc107;
        text-decoration-line: none;
    }

    .menu__link.router-link-exact-active {
        color: #333;
        -webkit-border-radius: .25rem;
        -moz-border-radius: .25rem;
        border-radius: .25rem;
        background-color: #ffc107;
    }
</style>
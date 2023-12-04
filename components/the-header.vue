<template>
  <header class="header">
    <nav class="navigation">
      <logo-svg class="logo" />
      <ul>
        <li v-for="(item, index) in header" :key="index">
          <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <the-hero></the-hero>

    <bg-header-right-svg class="header-right-svg" />
    <bg-main-left-svg class="main-left-svg" />
    <bg-main-right-svg class="main-right-svg" />
    <bg-img-obsecure-svg class="img-obsecure-svg" />
    <bg-bottom-svg class="bottom-svg" />
  </header>
</template>

<script setup>
const header = [
  {
    title: "Календарь",
    link: "/details/0",
  },
  {
    title: "Мастер классы",
    link: "/",
  },
  {
    title: "Новости",
    link: "/",
  },
  {
    title: "О нас",
    link: "/",
  },
];
</script>

<style lang="scss" scoped>
.header {
  min-height: 147.5rem;
  display: flex;
  flex-direction: column;
  position: relative;

  & .navigation {
    padding: 2.5rem 4rem 2.5rem 8.5rem;

    display: flex;
    justify-content: space-between;

    & ul {
      display: flex;

      & li {
        & a {
          font-weight: var(--font-weight-bold);
          font-size: var(--header-link);
          padding: 0.5rem 2.5rem;
          display: inline-block;
        }
      }
    }
  }

  & .logo {
    width: 8.25rem;
    height: 8.25rem;

    border-radius: 50%;
    cursor: pointer;
  }

  // surely there's a better way than this...
  & .main-left-svg {
    position: absolute;
    top: 0;
    left: 0;

    z-index: -20;
  }

  & .main-right-svg {
    position: absolute;
    top: 0;
    right: 0;

    z-index: -10;
  }

  & .header-right-svg {
    position: absolute;
    top: 0;
    right: 0;

    z-index: -5;
  }

  & .bottom-svg {
    position: absolute;

    top: 67.5rem;
    right: 0;

    z-index: -25;
  }

  & .img-obsecure-svg {
    position: absolute;

    left: 1038px;
    top: 871px;
  }
}
</style>

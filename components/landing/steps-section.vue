<script setup lang="ts">
  const header = "«‎iTOUR»‎ - это"
</script>

<template>
  <div class="steps-section">
    <vector-svg class="bg-svg" />

    <div class="steps-container">
      <h2>{{ header }}</h2>
    </div>

    <first-arrow class="first-arrow" />
    <second-arrow class="second-arrow" />
    <third-arrow class="third-arrow" />

    <map-svg class="map-svg" />
    <guide-svg class="guide-svg" />
    <construct-svg class="construct-svg" />
  </div>
</template>

<style lang="scss" scoped>
  .steps-section {
    margin-bottom: 10rem;
    position: relative;
    height: 380rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    & .steps-container {
      position: absolute;
      top: 35rem;

      & h2 {
        font-size: 8rem;
        font-weight: var(--font-weight-boldest);
      }
    }

    & .bg-svg {
      position: absolute;
    }

    & .first-arrow {
      position: absolute;

      top: 40rem;
    }

    & .construct-svg {
      position: absolute;

      top: 70rem;
      left: 5rem;
    }

    & .second-arrow {
      position: absolute;

      top: 130rem;
    }

    & .guide-svg {
      position: absolute;

      top: 190rem;
      left: 128rem;
    }

    & .third-arrow {
      position: absolute;

      top: 245rem;
    }

    & .map-svg {
      position: absolute;

      top: 285rem;
      left: 27rem;
    }
  }
</style>

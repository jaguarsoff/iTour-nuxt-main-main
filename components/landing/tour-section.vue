
<script lang="ts" setup>
  const states = ["Карта", "Виртуальная карта", "Экскурсия"]
  const current: Ref<string> = ref("Карта")
  const header = "«‎iTOUR»‎"
  const floors = [{name: "этаж 3", info: "ФГКУ РС(Я) Национальная библиотека республики Саха (Якутия) ДТК-ЦЕНТР ЧТЕНИЯ", id: "3"}, {name: "этаж 4", info: "Общий этаж", id: "4"}, {name: "этаж 5", info: "Общий этаж", id: "5" }]
  const floor: any = ref(floors[0])
  const selectFloor = (id: string) => {
  floor.value = floors.find(obj => obj.id == id)
  }
</script>

<template>
  <div class="tour-section">
    <div class="container">
      <h2>{{ header }}</h2>
      <div class="navigation">
        <button
          :class="{ selected: current === state }"
          @click="current = state"
          v-for="state in states"
          :key="state"
        >
          {{ state }}
        </button>
      </div>
    </div>

    <bg-svg class="bg-tour" />

    <building-svg @floor="selectFloor" v-if="current === 'Карта'" class="building-svg" />
    <div v-if="current === 'Карта'" class="floors">
      <div class="floor">
        <h3> {{ floor.name }} </h3> 
        <p> {{ floor.info }} </p>
      </div>
    </div>
    <div v-if="current === 'Виртуальная карта'">
      <div class="map">
        <the-map></the-map>
      </div>
    </div>
    <div v-if="current === 'Экскурсия'">
      <div class="map">
        <excursion></excursion>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .tour-section {
    overflow: hidden;
    position: relative;
    padding: 0 5.5rem;
    height: 197rem;

    .container {
      position: absolute;
      top: 35rem;

      & h2 {
        margin-bottom: 8rem;
        font-size: 7.5rem;
        font-weight: 800;
      }

      & .navigation {
        display: flex;
        gap: 8rem;

        & button {
          color: rgba(255, 255, 255, 0.35);
          font-size: 4.5rem;
          font-weight: 600;
        }
      }
    }

    .bg-tour {
      position: absolute;
      z-index: -100;
      left: 0;
    }

    .building-svg {
      position: absolute;

      top: 72.5rem;
      left: 20rem;
    }

    .floor {
      position: absolute
      font-size 


    }

    .map {
      position: absolute;

      top: 62.5rem;
      left: -5rem;
    }
    .floors {
      position: absolute;
      left: 1185px;
      top: 55rem;

      display: flex;
      flex-direction: column;
      gap: 3.5rem;

      & .floor {
        padding: 1.25rem;
        font-family: "Itim", cursive;
        border-radius: 2.5rem;
        background: #c73939;
        height: 39.5rem;
        width: 57rem;

        & .title {
          margin: 0 auto;

          background: #fff;
          color: #c73939;

          width: 8.5rem;
          height: 7.5rem;

          border-radius: 50%;

          display: flex;
          justify-content: center;
          align-items: center;

          & h3 {
            font-size: 6rem;
            font-weight: 600;
          }
        }
      }
    }
  }

  .selected {
    color: #fff !important;
    
  }

  
  
</style>
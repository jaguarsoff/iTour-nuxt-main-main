<template>
  <div class="tour-section">
    <div class="text-container">
      <h1>Гид:</h1>
    </div>
    <div>
      <iframe src="https://app.lapentor.com/sphere/itour" 
      loading= "eager" 
      frameborder="0" 
      width="1800px" 
      height="800px" 
      scrolling="no" 
      allow="vr,gyroscope,accelerometer" 
      allowfullscreen="true" 
      webkitallowfullscreen="true" 
      mozallowfullscreen="true" 
      oallowfullscreen="true" 
      msallowfullscreen="true"></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .hero-section {
    flex: 1;
    display: flex;
    padding: 3rem 0;

    & .text-container {
      flex: 1;
      padding-left: 12.5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.25rem;

      & h1 {
        font-weight: var(--font-weight-boldest);
        font-size: var(--hero-header);
        font-style: normal;
      }

      & .hero-btn {
        align-self: flex-start;
        border-radius: 10rem;
        background: #fff;
        padding: 1.25rem 2.25rem;
        align-items: center;

        display: flex;
        gap: 8rem;

        & p {
          font-weight: var(--font-weight-bold);
          color: #228dc3;
          font-size: 2rem;
        }

        & svg {
          cursor: pointer;
        }
      }
    }

    & .image-container {
      margin-top: 1rem; // I also shouldn't be doing this
      width: 114.5rem;
      height: 100%;

      & img {
        height: 100%;
        width: 100%;
      }
    }
  }
</style>

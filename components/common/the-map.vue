<template>
  <div class="tour-section">
    <div class="text-container">
      <h1>г.Якутск</h1>
    </div>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1700665743102!6m8!1m7!1sCAoSLEFGMVFpcE01MTFZVVgxLXBoQzA3ZkF1X2RFekRsRlJ0OVRCV2k5WVlTaEZL!2m2!1d62.03287914011124!2d129.7505399285528!3f123.00320746587438!4f4.845038050077335!5f0.7820865974627469"
        width="1920"
        height="860"
        style="border:0;"
        loading="eager"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
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

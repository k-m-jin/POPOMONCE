<template>
  <router-link to="/performance/search">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="circle-svg"
      viewBox="0 0 500 500"
    >
      <defs>
        <path
          id="textcircle_top"
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
        >
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="20s"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            repeatCount="indefinite"
          />
        </path>
        <path
          id="textcircle_bottom"
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
        >
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="20s"
            type="rotate"
            from="195 250 250"
            to="555 250 250"
            repeatCount="indefinite"
          />
        </path>
      </defs>
      <text dy="70" textLength="1220">
        <!-- textLength (essentially the circumference of the circle) is used as an alternative to letter-spacing for Firefox, which currently doesn't support letter-spacing for SVG -->
        <textPath xlink:href="#textcircle_top">search and book</textPath>
        <textPath xlink:href="#textcircle_bottom">performances!</textPath>
      </text>
    </svg>
  </router-link>
</template>

<style lang="scss" scope>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .circle-svg {
    width: 200px;
    position: absolute;
    bottom: 3%;
    right: 50px;
    text {
      font-size: 33px;
      font-family: Helvetica Neue, sans-serif;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 21px;
      fill: #fff;
      text-shadow: 1px 1px 10px #aaa;
    }
  }
</style>

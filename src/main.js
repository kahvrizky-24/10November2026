import './style.css'


// ============================================================
// IMPORT FOTO
// ============================================================

import foto1 from './assets/photos/foto1.jpeg'
import foto2 from './assets/photos/foto2.jpeg'
import foto3 from './assets/photos/foto3.jpeg'
import foto4 from './assets/photos/foto4.jpeg'
import foto5 from './assets/photos/foto5.jpeg'
import foto6 from './assets/photos/foto6.jpeg'
import foto7 from './assets/photos/foto7.jpeg'
import foto8 from './assets/photos/foto8.jpeg'
import foto9 from './assets/photos/foto9.jpeg'


// ============================================================
// IMPORT VIDEO
// ============================================================

import video1 from './assets/video/vidioNov.mp4'


// ============================================================
// IMPORT MUSIK
// ============================================================

import musikNov from './assets/musicNov.mp3'


// ============================================================
// DATA FOTO
// ============================================================

const photos = [
  {
    src: foto1,
    number: '01',
    title: 'Our Memory 01'
  },
  {
    src: foto2,
    number: '02',
    title: 'Our Memory 02'
  },
  {
    src: foto3,
    number: '03',
    title: 'Our Memory 03'
  },
  {
    src: foto4,
    number: '04',
    title: 'Our Memory 04'
  },
  {
    src: foto5,
    number: '05',
    title: 'Our Memory 05'
  },
  {
    src: foto6,
    number: '06',
    title: 'Our Memory 06'
  },
  {
    src: foto7,
    number: '07',
    title: 'Our Memory 07'
  },
  {
    src: foto8,
    number: '08',
    title: 'Our Memory 08'
  },
  {
    src: foto9,
    number: '09',
    title: 'Our Memory 09'
  }
]


// ============================================================
// TAMBAHAN STYLE BUNGA DARI JAVASCRIPT
// ============================================================

const dynamicStyle =
  document.createElement('style')

dynamicStyle.textContent = `

/* ============================================================
   LOVE EXPLOSION
============================================================ */

.love-explosion-layer {
  position: fixed;

  inset: 0;

  z-index: 99999;

  pointer-events: none;

  overflow: hidden;
}


.explosion-heart {
  position: absolute;

  left: 50%;
  top: 50%;

  transform:
    translate(-50%, -50%)
    scale(0);

  opacity: 1;

  color: #ff6fa8;

  text-shadow:
    0 0 8px
    rgba(255, 105, 170, .9),

    0 0 18px
    rgba(255, 80, 150, .8),

    0 0 35px
    rgba(255, 70, 140, .7);

  animation:
    loveExplosion
    1.15s
    cubic-bezier(.15, .75, .25, 1)
    forwards;
}


@keyframes loveExplosion {

  0% {
    transform:
      translate(-50%, -50%)
      translate(0, 0)
      scale(.1)
      rotate(0deg);

    opacity: 1;
  }

  45% {
    opacity: 1;
  }

  100% {
    transform:
      translate(-50%, -50%)
      translate(
        var(--love-x),
        var(--love-y)
      )
      scale(var(--love-scale))
      rotate(var(--love-rotate));

    opacity: 0;
  }

}


/* ============================================================
   FLOWER GARDEN
   KHUSUS AREA BAWAH
============================================================ */

.flower-garden {
  position: fixed;

  left: 0;
  right: 0;
  bottom: 0;

  /*
     Bunga hanya berada di bagian bawah.
     Tidak memenuhi bagian tengah halaman.
  */

  top: auto;

  height: 38vh;

  /*
     ==========================================================
     PERBAIKAN LAYER BUNGA
     ==========================================================

     Bunga berada di belakang halaman.
  */

  z-index: 1;

  pointer-events: none;

  overflow: hidden;

  opacity: 0;

  visibility: hidden;

  transition:
    opacity .8s ease,
    visibility .8s ease;
}


.flower-garden.flowers-visible {
  opacity: 1;

  visibility: visible;
}

.flower-garden::before {
  content: '';

  position: absolute;

  left: -6%;
  right: -6%;
  bottom: -16px;

  height: 92px;

  background:
    radial-gradient(ellipse at 50% 100%, rgba(35, 83, 49, .62), transparent 72%),
    linear-gradient(0deg, rgba(10, 25, 18, .4), transparent 80%);

  pointer-events: none;
}

.flower-garden::after {
  content: '';

  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  height: 38px;

  background:
    repeating-linear-gradient(78deg, transparent 0 17px, rgba(111, 160, 83, .16) 18px 19px, transparent 20px 34px),
    linear-gradient(0deg, rgba(34, 75, 43, .23), transparent);

  -webkit-mask-image: linear-gradient(0deg, #000 0%, transparent 100%);

  mask-image: linear-gradient(0deg, #000 0%, transparent 100%);

  pointer-events: none;
}


/* ============================================================
   GLOW TANAH
============================================================ */

.root-ground {
  position: absolute;

  left: -5%;
  bottom: -10px;

  width: 110%;
  height: 75px;

  background:
    radial-gradient(
      ellipse at center bottom,

      rgba(53, 120, 69, .72) 0%,

      rgba(31, 75, 47, .48) 35%,

      rgba(15, 35, 25, .22) 58%,

      transparent 78%
    );

  opacity: .9;

  filter: blur(.2px);
}


/* ============================================================
   AKAR UTAMA
============================================================ */

.root {
  position: absolute;

  width: var(--root-width);
  height: var(--root-height);

  left: var(--root-left);
  bottom: var(--root-bottom);

  background:
    linear-gradient(
      90deg,

      transparent,

      rgba(53, 112, 68, .9),

      rgba(112, 164, 89, .75),

      transparent
    );

  border-radius: 100%;

  transform-origin: left center;

  opacity: .75;

  transform:
    rotate(var(--root-rotate))
    scaleX(0);

  animation:
    rootGrow
    var(--root-duration)
    cubic-bezier(.2, .8, .2, 1)
    var(--root-delay)
    forwards;
}


@keyframes rootGrow {

  0% {
    transform:
      rotate(var(--root-rotate))
      scaleX(0);

    opacity: 0;
  }

  100% {
    transform:
      rotate(var(--root-rotate))
      scaleX(1);

    opacity: .75;
  }

}


/* ============================================================
   TANAMAN
============================================================ */

.realistic-plant {
  position: absolute;

  bottom: -25px;

  left: var(--plant-left);

  width: var(--plant-width);
  height: var(--plant-height);

  transform-origin: bottom center;

  rotate: 0deg;

  opacity: 0;

  animation:
    plantGrow
    var(--plant-grow)
    cubic-bezier(.18, .75, .25, 1)
    var(--plant-delay)
    forwards,
    plantSway
    var(--plant-sway-duration)
    ease-in-out
    var(--plant-sway-delay)
    infinite
    alternate;
}

@keyframes plantSway {
  to {
    rotate: var(--plant-sway-angle);
  }
}


@keyframes plantGrow {

  0% {
    opacity: 0;

    transform:
      translateY(80px)
      scaleY(.05)
      rotate(var(--plant-rotate));
  }

  45% {
    opacity: 1;
  }

  75% {
    transform:
      translateY(0)
      scaleY(1.04)
      rotate(
        calc(
          var(--plant-rotate) + 2deg
        )
      );
  }

  100% {
    opacity: 1;

    transform:
      translateY(0)
      scaleY(1)
      rotate(var(--plant-rotate));
  }

}


/* ============================================================
   BATANG UTAMA
============================================================ */

.plant-stem {
  position: absolute;

  left: 50%;
  bottom: 0;

  width: var(--stem-width);
  height: var(--stem-height);

  transform:
    translateX(-50%)
    rotate(var(--stem-lean));

  transform-origin: bottom center;

  border-radius:
    100px
    100px
    20px
    20px;

  background:
    linear-gradient(
      90deg,

      #1d4d32 0%,

      #37794b 25%,

      #72ad67 48%,

      #4a8b55 74%,

      #214a31 100%
    );

  border-radius:
    54% 46% 18% 18% /
    5% 5% 2% 2%;

  box-shadow:
    0 0 4px
    rgba(100, 180, 100, .35),

    inset 1px 0 2px
    rgba(220, 255, 210, .22);
}


/* ============================================================
   CABANG
============================================================ */

.plant-branch {
  position: absolute;

  width: var(--branch-length);
  height: var(--branch-thickness);

  left: var(--branch-left);
  bottom: var(--branch-bottom);

  transform-origin: left center;

  border-radius: 100px;

  background:
    linear-gradient(
      90deg,

      #326d43,

      #6bad63,

      #3d7f4d
    );

  transform:
    rotate(var(--branch-angle))
    scaleX(0);

  animation:
    branchGrow
    .9s
    ease-out
    var(--branch-delay)
    forwards;
}


@keyframes branchGrow {

  0% {
    transform:
      rotate(var(--branch-angle))
      scaleX(0);

    opacity: 0;
  }

  100% {
    transform:
      rotate(var(--branch-angle))
      scaleX(1);

    opacity: .95;
  }

}


/* ============================================================
   DAUN REALISTIS
============================================================ */

.realistic-leaf {
  position: absolute;

  width: var(--leaf-width);
  height: var(--leaf-height);

  left: var(--leaf-left);
  bottom: var(--leaf-bottom);

  border-radius:
    100% 0
    100% 0;

  background:
    linear-gradient(
      135deg,

      #d2e99b 0%,

      #91c96e 28%,

      #5b9c50 64%,

      #285a38 100%
    );

  box-shadow:
    0 0 7px
    rgba(100, 200, 120, .3),

    inset 1px 1px 4px
    rgba(255,255,255,.28);

  transform-origin: 50% 70%;

  rotate: 0deg;

  opacity: 0;

  transform:
    rotate(var(--leaf-angle))
    scale(.05);

  animation:
    leafAppear
    .8s
    cubic-bezier(.2, .8, .2, 1)
    var(--leaf-delay)
    forwards,
    leafSway
    var(--leaf-sway-duration)
    ease-in-out
    var(--leaf-sway-delay)
    infinite
    alternate;
}

@keyframes leafSway {
  to {
    rotate: var(--leaf-sway-angle);
  }
}


.realistic-leaf::before {
  content: '';

  position: absolute;

  left: 8%;
  top: 48%;

  width: 84%;
  height: 1.2px;

  background:
    linear-gradient(
      90deg,
      rgba(225,255,215,.12),
      rgba(231,255,218,.72) 48%,
      rgba(225,255,215,.12)
    );

  transform:
    rotate(-11deg);
}


.realistic-leaf::after {
  content: '';

  position: absolute;

  left: 48%;
  top: 16%;

  width: 38%;
  height: 62%;

  background: repeating-linear-gradient(
    155deg,
    transparent 0 4px,
    rgba(31, 83, 47, .28) 4.5px 5.2px,
    transparent 5.7px 8px
  );

  clip-path:
    polygon(0 0, 100% 0, 0 100%);
}


@keyframes leafAppear {

  0% {
    opacity: 0;

    transform:
      rotate(var(--leaf-angle))
      scale(.05);
  }

  70% {
    opacity: 1;

    transform:
      rotate(
        calc(
          var(--leaf-angle) + 5deg
        )
      )
      scale(1.08);
  }

  100% {
    opacity: .96;

    transform:
      rotate(var(--leaf-angle))
      scale(1);
  }

}


/* ============================================================
   BUNGA REALISTIS
============================================================ */

.realistic-flower {
  position: absolute;

  width: var(--flower-size);
  height: var(--flower-size);

  left: var(--flower-left);
  bottom: var(--flower-bottom);

  rotate: 0deg;

  transform:
    translate(-50%, 50%)
    scale(.05);

  opacity: 0;

  animation:
    flowerBloomRealistic
    1.15s
    cubic-bezier(.2, .8, .2, 1)
    var(--flower-delay)
    forwards,
    flowerSway
    var(--flower-sway-duration)
    ease-in-out
    calc(var(--flower-delay) + 1.15s)
    infinite
    alternate;

  filter:
    drop-shadow(
      0 0 7px
      var(--flower-glow)
    )

    drop-shadow(
      0 0 16px
      var(--flower-glow)
    );
}

@keyframes flowerSway {
  to {
    rotate: var(--flower-sway-angle);
  }
}


@keyframes flowerBloomRealistic {

  0% {
    opacity: 0;

    transform:
      translate(-50%, 50%)
      scale(.05)
      rotate(-20deg);
  }

  50% {
    opacity: 1;

    transform:
      translate(-50%, 50%)
      scale(1.12)
      rotate(8deg);
  }

  75% {
    transform:
      translate(-50%, 50%)
      scale(.96)
      rotate(-3deg);
  }

  100% {
    opacity: 1;

    transform:
      translate(-50%, 50%)
      scale(1)
      rotate(0deg);
  }

}


/* ============================================================
   KELOPAK BUNGA
============================================================ */

.realistic-petal {
  position: absolute;

  width: 48%;
  height: 61%;

  left: 26%;
  top: 19%;

  border-radius:
    54% 54% 46% 46% /
    60% 60% 40% 40%;

  transform-origin: 50% 90%;

  background:
    radial-gradient(ellipse at 34% 22%, rgba(255,255,255,.72), transparent 25%),
    radial-gradient(ellipse at 52% 56%, var(--petal-light) 0%, var(--petal-blush) 28%, var(--petal-mid) 66%, var(--petal-deep) 100%);

  box-shadow:
    0 2px 5px rgba(80, 31, 56, .22),
    inset 1px 2px 5px rgba(255,255,255,.55),
    inset -2px -5px 7px rgba(91, 37, 67, .2);

  -webkit-mask-image:
    radial-gradient(ellipse 66% 68% at 50% 38%, #000 68%, transparent 100%);

  mask-image:
    radial-gradient(ellipse 66% 68% at 50% 38%, #000 68%, transparent 100%);
}

.realistic-petal::after {
  content: '';

  position: absolute;

  left: 49%;
  top: 27%;

  width: 1px;
  height: 54%;

  border-radius: 50%;

  background: linear-gradient(
    180deg,
    rgba(255,255,255,.38),
    rgba(255,255,255,.12) 55%,
    transparent
  );

  transform: rotate(4deg);
}


.realistic-petal.p1 {
  transform:
    rotate(var(--petal-angle))
    translateY(-38%)
    scaleX(var(--petal-width))
    scaleY(var(--petal-length));
}


.realistic-petal.p2 {
  transform:
    rotate(var(--petal-angle))
    translateY(-38%)
    scaleX(var(--petal-width))
    scaleY(var(--petal-length));
}


.realistic-petal.p3 {
  transform:
    rotate(var(--petal-angle))
    translateY(-38%)
    scaleX(var(--petal-width))
    scaleY(var(--petal-length));
}


.realistic-petal.p4 {
  transform:
    rotate(var(--petal-angle))
    translateY(-38%)
    scaleX(var(--petal-width))
    scaleY(var(--petal-length));
}


.realistic-petal.p5 {
  transform:
    rotate(var(--petal-angle))
    translateY(-38%)
    scaleX(var(--petal-width))
    scaleY(var(--petal-length));
}


/* ============================================================
   BAGIAN DALAM BUNGA
============================================================ */

.flower-inner {
  position: absolute;

  width: 46%;
  height: 46%;

  left: 27%;
  top: 27%;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,

      rgba(255,255,235,.98) 0%,
      var(--flower-center) 32%,
      #c99555 72%,
      var(--flower-center-deep) 100%
    );

  box-shadow:
    0 1px 4px rgba(76, 45, 28, .3),
    inset 0 0 7px rgba(255,255,255,.55);

  overflow: hidden;

  z-index: 5;
}

.flower-inner::after {
  content: '';

  position: absolute;

  inset: 12%;

  border-radius: 50%;

  background:
    radial-gradient(circle, rgba(106, 65, 36, .55) 0 1px, transparent 1.5px);

  background-size: 4px 4px;

  opacity: .46;
}


.flower-core {
  position: absolute;

  width: 25%;
  height: 25%;

  left: 37.5%;
  top: 37.5%;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,

      #fff6cf,
      var(--flower-center) 52%,
      var(--flower-center-deep) 100%
    );

  box-shadow:
    inset 0 1px 2px rgba(255,255,255,.62),
    0 1px 3px rgba(85, 49, 27, .3);

  z-index: 7;
}


/* ============================================================
   BUNGA KECIL DI CABANG
============================================================ */

.branch-flower {
  position: absolute;

  width: var(--small-flower-size);
  height: var(--small-flower-size);

  left: var(--small-left);
  bottom: var(--small-bottom);

  transform:
    scale(.05)
    rotate(-20deg);

  opacity: 0;

  animation:
    smallFlowerBloom
    .9s
    ease-out
    var(--small-delay)
    forwards;

  filter:
    drop-shadow(
      0 0 5px
      rgba(255, 125, 190, .55)
    );
}


@keyframes smallFlowerBloom {

  0% {
    opacity: 0;

    transform:
      scale(.05)
      rotate(-20deg);
  }

  65% {
    opacity: 1;

    transform:
      scale(1.12)
      rotate(8deg);
  }

  100% {
    opacity: 1;

    transform:
      scale(1)
      rotate(0deg);
  }

}


.small-petal {
  position: absolute;

  width: 45%;
  height: 55%;

  left: 27.5%;
  top: 22.5%;

  border-radius: 60%;

  background:
    radial-gradient(
      circle at 35% 30%,

      #fff,

      #ffd2ea 35%,

      #f37bb7 72%,

      #c74488 100%
    );

  box-shadow:
    0 0 4px
    rgba(255, 130, 190, .45);
}


.small-petal:nth-child(1) {
  transform:
    rotate(0deg)
    translateY(-35%);
}


.small-petal:nth-child(2) {
  transform:
    rotate(90deg)
    translateY(-35%);
}


.small-petal:nth-child(3) {
  transform:
    rotate(180deg)
    translateY(-35%);
}


.small-petal:nth-child(4) {
  transform:
    rotate(270deg)
    translateY(-35%);
}


.small-center {
  position: absolute;

  width: 24%;
  height: 24%;

  left: 38%;
  top: 38%;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,

      #fff6a5,

      #ffbd42
    );

  z-index: 5;
}


/* ============================================================
   AKAR TIPIS
============================================================ */

.root-fine {
  position: absolute;

  left: var(--fine-left);
  bottom: var(--fine-bottom);

  width: var(--fine-width);
  height: 2px;

  border-radius: 100%;

  background:
    linear-gradient(
      90deg,

      rgba(37,78,47,.1),

      rgba(75,130,72,.7),

      transparent
    );

  transform-origin: left center;

  transform:
    rotate(var(--fine-angle))
    scaleX(0);

  animation:
    fineRootGrow
    1.5s
    ease-out
    var(--fine-delay)
    forwards;
}


@keyframes fineRootGrow {

  to {
    transform:
      rotate(var(--fine-angle))
      scaleX(1);
  }

}


/* ============================================================
   MOBILE BUNGA
============================================================ */

@media (max-width: 768px) {

  .flower-garden {
    height: 32vh;
  }

  .realistic-plant {
    transform-origin:
      bottom center;
  }

  .realistic-flower {
    transform-origin:
      center;
  }

  .root {
    opacity: .55;
  }

  .realistic-leaf {
    opacity: .85;
  }

}

@media (prefers-reduced-motion: reduce) {

  .realistic-plant,
  .realistic-flower,
  .realistic-leaf {
    animation: none !important;

    opacity: 1;

    transform: none;

    rotate: 0deg;
  }

}


/* ============================================================
   LETTER
============================================================ */

.page-letter .letter-card {
  scroll-behavior: auto;
}


.page-letter.auto-scrolling
.letter-card {
  scrollbar-width: thin;
}


/* ============================================================
   VIDEO
============================================================ */

.page-video .video-wrapper {
  width:
    min(94vw, 1250px);

  max-width: 1250px;

  margin-left: auto;
  margin-right: auto;
}


.page-video .video-wrapper video {
  width: 100%;

  max-width: 1250px;

  min-height: 55vh;

  max-height: 72vh;

  object-fit: contain;

  display: block;

  margin: 0 auto;
}


/* ============================================================
   COUNTDOWN LOCK
============================================================ */

#openGift.countdown-locked {
  pointer-events: none !important;

  cursor: not-allowed !important;

  opacity: .45 !important;
}

`


document.head.appendChild(
  dynamicStyle
)


// ============================================================
// FLOWER LAYER FIX
//
// BUNGA TETAP TERLIHAT DI BAGIAN BAWAH,
// TETAPI SELALU BERADA DI BELAKANG HALAMAN.
// ============================================================

const flowerLayerFix =
  document.createElement('style')


flowerLayerFix.textContent = `

  .flower-garden {
    z-index: 1 !important;

    pointer-events: none !important;
  }

  .page {
    z-index: 2;
  }

  .site-background {
    position: fixed;

    z-index: 0;
  }

`


document.head.appendChild(
  flowerLayerFix
)
// ============================================================
// APP
// ============================================================

document.querySelector('#app').innerHTML = `

<div class="site-background">
  <div class="stars"></div>
  <div class="floating-hearts"></div>
</div>


<div
  class="flower-garden"
  id="flowerGarden"
></div>


<!-- ========================================================
     HOME
======================================================== -->

<section
  class="page page-home active"
  id="home"
>

  <div class="hero-content">

    <div class="small-label">
      ✦ OUR SPECIAL MOMENT ✦
    </div>

    <h1>
      Our Special Day
    </h1>

    <h2>
      is Coming
    </h2>

    <p class="hero-description">
      Sesuatu yang indah sedang menunggu waktunya ♡
    </p>

    <div
      class="countdown"
      id="countdown"
    >

      <div class="time-box">
        <span id="days">00</span>
        <small>HARI</small>
      </div>

      <div class="separator">
        :
      </div>

      <div class="time-box">
        <span id="hours">00</span>
        <small>JAM</small>
      </div>

      <div class="separator">
        :
      </div>

      <div class="time-box">
        <span id="minutes">00</span>
        <small>MENIT</small>
      </div>

      <div class="separator">
        :
      </div>

      <div class="time-box">
        <span id="seconds">00</span>
        <small>DETIK</small>
      </div>

    </div>


    <button
      class="main-button"
      id="openGift"
      hidden
    >
      OPEN YOUR GIFT
    </button>

  </div>

</section>


<!-- ========================================================
     GIFT
======================================================== -->

<section
  class="page page-gift"
  id="gift"
>

  <div class="gift-content">

    <div class="small-label">
      ✦ SOMETHING FOR YOU ✦
    </div>

    <h2>
      A Little Surprise
    </h2>

    <p>
      Ada sesuatu kecil yang ingin aku berikan untukmu.
    </p>


    <div
      class="gift-box"
      id="giftBox"
    >

      <div class="gift-lid"></div>

      <div class="gift-body"></div>

      <div class="gift-ribbon vertical"></div>

      <div class="gift-ribbon horizontal"></div>

      <div class="gift-bow">
        <span></span>
        <span></span>
      </div>

    </div>


    <button
      class="main-button"
      id="openMemory"
    >
      OPEN THE MEMORY
    </button>

  </div>

</section>


<!-- ========================================================
     SPECIAL
======================================================== -->

<section
  class="page page-special"
  id="special"
>

  <div class="special-content">

    <div class="small-label">
      ✦ OUR STORY ✦
    </div>

    <h2>
      Every Moment
      <br>
      Is Special
    </h2>


    <div class="special-photo-area">

      <div
        class="side-photo photo-left photo-left-1"
      >
        <img
          src="${foto1}"
          alt="Memory 1"
        >
      </div>


      <div
        class="side-photo photo-left photo-left-2"
      >
        <img
          src="${foto2}"
          alt="Memory 2"
        >
      </div>


      <div
        class="side-photo photo-left photo-left-3"
      >
        <img
          src="${foto3}"
          alt="Memory 3"
        >
      </div>


      <div
        class="special-main-photo"
      >

        <img
          src="${foto4}"
          alt="Our Special Memory"
        >

        <div class="photo-glow"></div>

      </div>


      <div
        class="side-photo photo-right photo-right-1"
      >
        <img
          src="${foto5}"
          alt="Memory 5"
        >
      </div>


      <div
        class="side-photo photo-right photo-right-2"
      >
        <img
          src="${foto6}"
          alt="Memory 6"
        >
      </div>


      <div
        class="side-photo photo-right photo-right-3"
      >
        <img
          src="${foto7}"
          alt="Memory 7"
        >
      </div>

    </div>


    <p class="special-description">
      Dari sekian banyak hal yang terjadi,
      aku paling bersyukur karena ada kamu
      di dalam cerita ini.
    </p>


    <button
      class="main-button"
      id="openLetter"
    >
      READ MY LETTER
    </button>

  </div>

</section>


<!-- ========================================================
     LETTER
======================================================== -->

<section
  class="page page-letter"
  id="letter"
>

  <div class="letter-container">

    <div class="small-label">
      ✦ A LETTER FOR YOU ✦
    </div>


    <div class="letter-card">

      <div class="letter-top">
        <span>♡</span>
      </div>


      <div class="letter-content">

        <p>
          Untuk seseorang yang begitu berarti,
        </p>


        <p>
          Aku mungkin tidak selalu pandai
          mengungkapkan apa yang ada di dalam
          pikiranku.
        </p>


        <p>
          Tapi ada satu hal yang ingin selalu
          aku pastikan kamu tahu.
        </p>


        <p>
          Aku sangat menghargai setiap waktu,
          setiap cerita, setiap tawa, dan setiap
          momen yang kita lewati bersama.
        </p>


        <p>
          Terima kasih karena sudah menjadi
          bagian dari perjalanan ini.
        </p>


        <p>
          Terima kasih untuk semua hal kecil
          yang mungkin terlihat sederhana,
          tetapi sebenarnya sangat berarti.
        </p>


        <p>
          Semoga ke depannya kita masih bisa
          menciptakan lebih banyak kenangan
          indah bersama.
        </p>


        <p>
          Tidak harus selalu sempurna.
          Cukup tetap menjadi diri kita sendiri
          dan terus menghargai satu sama lain.
        </p>


        <p class="letter-ending">
          With all my heart,
          <br>
          ♡
        </p>

      </div>


      <div class="letter-bottom">
        <span>✦</span>
      </div>

    </div>


    <button
      class="main-button"
      id="openGallery"
    >
      OUR MEMORIES
    </button>

  </div>

</section>


<!-- ========================================================
     GALLERY
======================================================== -->

<section
  class="page page-gallery"
  id="gallery"
>

  <div class="gallery-container">

    <div class="gallery-header">

      <div class="small-label">
        ✦ OUR MEMORIES ✦
      </div>

      <h2>
        Little Moments
      </h2>

      <p>
        Setiap foto menyimpan cerita
        yang tidak akan terlupakan.
      </p>

    </div>


    <div
      class="photo-grid"
      id="photoGrid"
    >

      ${photos.map((photo, index) => `
        
        <div
          class="memory-card"
          data-index="${index}"
        >

          <div class="memory-image">

            <img
              src="${photo.src}"
              alt="${photo.title}"
              loading="lazy"
            >

          </div>


          <div class="memory-overlay">

            <span>
              ${photo.number}
            </span>

            <p>
              ${photo.title}
            </p>

          </div>

        </div>

      `).join('')}

    </div>


    <button
      class="main-button"
      id="openVideo"
    >
      WATCH OUR VIDEO
    </button>

  </div>

</section>


<!-- ========================================================
     VIDEO
======================================================== -->

<section
  class="page page-video"
  id="video"
>

  <div class="video-container">

    <div class="video-header">

      <div class="small-label">
        ✦ OUR MOMENT ✦
      </div>

      <h2>
        A Memory In Motion
      </h2>

      <p>
        Karena beberapa kenangan
        lebih indah ketika dilihat kembali.
      </p>

    </div>


    <div class="video-wrapper">

      <video
        id="specialVideo"
        controls
        playsinline
        preload="metadata"
      >

        <source
          src="${video1}"
          type="video/mp4"
        >

        Browser kamu tidak mendukung
        pemutaran video.

      </video>

    </div>


    <button
      class="main-button"
      id="openWish"
    >
      MAKE A WISH
    </button>

  </div>

</section>


<!-- ========================================================
     WISH
======================================================== -->

<section
  class="page page-wish"
  id="wish"
>

  <div class="wishes-container">

    <div class="small-label">
      ✦ A LITTLE WISH ✦
    </div>

    <h2>
      Make A Wish
    </h2>


    <div class="wish-card">

      <div class="wish-icon">
        ♡
      </div>


      <div class="wish-text">

        <p>
          Semoga semua hal baik
          selalu menemukan jalannya
          menuju kamu.
        </p>


        <p>
          Semoga setiap langkah yang
          kamu ambil membawa kamu
          lebih dekat dengan semua
          impianmu.
        </p>


        <p>
          Dan semoga kita selalu
          punya alasan untuk tersenyum
          ketika mengingat semua
          perjalanan yang sudah kita lalui.
        </p>

      </div>


      <div class="wish-stars">
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
      </div>

    </div>


    <button
      class="main-button"
      id="finish"
    >
      ONE LAST THING
    </button>

  </div>

</section>


<!-- ========================================================
     FINAL
======================================================== -->

<section
  class="page page-final"
  id="final"
>

  <div class="final-content">

    <div class="final-glow"></div>


    <div class="small-label">
      ✦ FOR YOU ✦
    </div>


    <h1>
      I LOVE YOU
    </h1>


    <h2>
      AINAA
    </h2>


    <div class="final-heart">
      ♡
    </div>


    <p>
      Terima kasih sudah menjadi
      bagian dari cerita indah ini.
    </p>


    <p class="final-small">
      Until every next beautiful moment...
    </p>

  </div>

</section>


<!-- ========================================================
     LIGHTBOX
======================================================== -->

<div
  class="lightbox"
  id="lightbox"
>

  <button
    class="lightbox-close"
    id="lightboxClose"
    aria-label="Close"
  >
    ×
  </button>


  <button
    class="lightbox-prev"
    id="lightboxPrev"
    aria-label="Previous"
  >
    ‹
  </button>


  <div class="lightbox-content">

    <img
      id="lightboxImage"
      src=""
      alt="Memory"
    >

    <div
      class="lightbox-counter"
      id="lightboxCounter"
    >
      01 / 09
    </div>

  </div>


  <button
    class="lightbox-next"
    id="lightboxNext"
    aria-label="Next"
  >
    ›
  </button>

</div>


<!-- ========================================================
     AUDIO
======================================================== -->

<audio
  id="bgMusic"
  loop
  preload="auto"
>

  <source
    src="${musikNov}"
    type="audio/mpeg"
  >

</audio>


<button
  class="music-control"
  id="musicControl"
  type="button"
  aria-label="Play background music"
  aria-pressed="false"
  hidden
>
  <span
    class="music-control-icon"
    aria-hidden="true"
  >♫</span>
  <span id="musicStatus">MUSIC PAUSED</span>
</button>

`


// ============================================================
// ELEMENT REFERENCES
// ============================================================

const pages =
  document.querySelectorAll('.page')


const fallingStars =
  document.querySelector('.stars')


const flowerGarden =
  document.querySelector('#flowerGarden')


const bgMusic =
  document.querySelector('#bgMusic')


const musicControl =
  document.querySelector('#musicControl')


const musicStatus =
  document.querySelector('#musicStatus')


const specialVideo =
  document.querySelector('#specialVideo')


const openGift =
  document.querySelector('#openGift')


const giftBox =
  document.querySelector('#giftBox')


const openMemory =
  document.querySelector('#openMemory')


const openLetter =
  document.querySelector('#openLetter')


const openGallery =
  document.querySelector('#openGallery')


const openVideo =
  document.querySelector('#openVideo')


const openWish =
  document.querySelector('#openWish')


const finish =
  document.querySelector('#finish')


const photoGrid =
  document.querySelector('#photoGrid')


const lightbox =
  document.querySelector('#lightbox')


const lightboxImage =
  document.querySelector('#lightboxImage')


const lightboxClose =
  document.querySelector('#lightboxClose')


const lightboxPrev =
  document.querySelector('#lightboxPrev')


const lightboxNext =
  document.querySelector('#lightboxNext')


const lightboxCounter =
  document.querySelector('#lightboxCounter')


// ============================================================
// CURRENT PAGE
// ============================================================

let currentPage =
  'home'


// ============================================================
// LIGHTBOX STATE
// ============================================================

let currentPhotoIndex =
  0


// ============================================================
// FLOWER STATE
// ============================================================

let flowerStarted =
  false


// ============================================================
// FALLING STARS
// ============================================================

function initializeFallingStars() {

  if (
    !fallingStars ||
    fallingStars.childElementCount > 0
  ) {
    return
  }


  const starColors = [
    '#ffffff',
    '#ffd8eb',
    '#e9dcff'
  ]


  for (
    let i = 0;
    i < 24;
    i++
  ) {

    const star =
      document.createElement('span')


    star.className =
      'falling-star'


    star.style.setProperty(
      '--star-left',
      `${Math.random() * 100}%`
    )

    star.style.setProperty(
      '--star-top',
      `${Math.random() * 100}%`
    )


    star.style.setProperty(
      '--star-size',
      `${0.7 + Math.random() * 1.5}px`
    )


    star.style.setProperty(
      '--star-duration',
      `${10 + Math.random() * 11}s`
    )


    star.style.setProperty(
      '--star-delay',
      `${-Math.random() * 18}s`
    )

    star.style.setProperty(
      '--star-twinkle-delay',
      `${-Math.random() * 2.8}s`
    )


    star.style.setProperty(
      '--star-drift',
      `${-28 + Math.random() * 56}px`
    )


    star.style.setProperty(
      '--star-color',
      starColors[
        Math.floor(
          Math.random() * starColors.length
        )
      ]
    )


    if (Math.random() < .35) {
      star.classList.add('twinkling')
    }


    fallingStars.appendChild(star)

  }

}


initializeFallingStars()


// ============================================================
// SHOW PAGE
// ============================================================

function showPage(
  pageId
) {

  const target =
    document.getElementById(
      pageId
    )


  if (!target || !target.classList.contains('page')) {
    return
  }


  pages.forEach(
    page => {

      page.classList.remove(
        'active'
      )

    }
  )


  target.classList.add(
    'active'
  )


  currentPage =
    pageId


  if (musicControl) {
    musicControl.hidden =
      pageId === 'home'
  }


  if (pageId !== 'home') {
    startMusic()
  } else if (bgMusic && !bgMusic.paused) {
    bgMusic.pause()

    musicStarted =
      false
  }


  if (fallingStars) {
    fallingStars.classList.toggle(
      'stars-active',
      pageId !== 'home'
    )
  }


  window.scrollTo(
    0,
    0
  )


  if (pageId === 'gift') {
    startFlowerGarden()
  } else if (flowerGarden) {
    flowerGarden.classList.remove(
      'flowers-visible'
    )
  }

}


// ============================================================
// FLOWER GARDEN
// ============================================================

function startFlowerGarden() {

  if (!flowerGarden) {
    return
  }

  flowerGarden.classList.add(
    'flowers-visible'
  )


  if (flowerStarted) {
    return
  }


  flowerStarted =
    true

  createRoots()

  createPlants()

}


// ============================================================
// CREATE ROOTS
// ============================================================

function createRoots() {

  if (!flowerGarden) {
    return
  }


  for (
    let i = 0;
    i < 18;
    i++
  ) {

    const root =
      document.createElement(
        'div'
      )


    root.className =
      'root'


    root.style.setProperty(
      '--root-width',
      `${90 + Math.random() * 180}px`
    )


    root.style.setProperty(
      '--root-height',
      `${2 + Math.random() * 4}px`
    )


    root.style.setProperty(
      '--root-left',
      `${Math.random() * 100}%`
    )


    root.style.setProperty(
      '--root-bottom',
      `${Math.random() * 55}px`
    )


    root.style.setProperty(
      '--root-rotate',
      `${-35 + Math.random() * 70}deg`
    )


    root.style.setProperty(
      '--root-duration',
      `${1.5 + Math.random() * 1.5}s`
    )


    root.style.setProperty(
      '--root-delay',
      `${Math.random() * 1.2}s`
    )


    flowerGarden.appendChild(
      root
    )

  }

}


// ============================================================
// CREATE REALISTIC PLANT
// ============================================================

function createRealisticPlant(
  position = null
) {

  if (!flowerGarden) {
    return
  }


  if (position === null) {

    position =
      2 +
      Math.random() * 96

  }


  const plant =
    document.createElement(
      'div'
    )


  plant.className =
    'realistic-plant'


  /*
     Tanaman dibuat sedikit lebih pendek
     supaya tetap berada di area bawah.
  */

  const height =
    105 +
    Math.random() * 175


  const width =
    80 +
    Math.random() * 100


  plant.style.setProperty(
    '--plant-left',
    `${position}%`
  )


  plant.style.setProperty(
    '--plant-width',
    `${width}px`
  )


  plant.style.setProperty(
    '--plant-height',
    `${height}px`
  )


  plant.style.setProperty(
    '--plant-grow',
    `${1.8 + Math.random() * 1.5}s`
  )


  plant.style.setProperty(
    '--plant-delay',
    `${Math.random() * .5}s`
  )


  plant.style.setProperty(
    '--plant-rotate',
    `${-3 + Math.random() * 6}deg`
  )

  plant.style.setProperty(
    '--plant-sway-angle',
    `${-.8 + Math.random() * 1.6}deg`
  )

  plant.style.setProperty(
    '--plant-sway-duration',
    `${4.5 + Math.random() * 3}s`
  )

  plant.style.setProperty(
    '--plant-sway-delay',
    `${Math.random() * -5}s`
  )


  // ----------------------------------------------------------
  // BATANG
  // ----------------------------------------------------------

  const stem =
    document.createElement(
      'div'
    )


  stem.className =
    'plant-stem'


  const stemHeight =
    height *
    (
      .72 +
      Math.random() * .2
    )


  stem.style.setProperty(
    '--stem-height',
    `${stemHeight}px`
  )


  stem.style.setProperty(
    '--stem-width',
    `${4 + Math.random() * 4}px`
  )


  stem.style.setProperty(
    '--stem-lean',
    `${-4 + Math.random() * 8}deg`
  )


  plant.appendChild(
    stem
  )


  // ----------------------------------------------------------
  // CABANG
  // ----------------------------------------------------------

  const branchCount =
    2 +
    Math.floor(
      Math.random() * 3
    )


  for (
    let i = 0;
    i < branchCount;
    i++
  ) {

    const branch =
      document.createElement(
        'div'
      )


    branch.className =
      'plant-branch'


    const branchSide =
      i % 2 === 0
        ? -1
        : 1


    branch.style.setProperty(
      '--branch-left',
      `${48 + branchSide * (Math.random() * 8)}%`
    )


    branch.style.setProperty(
      '--branch-bottom',
      `${35 + i * (height * .18)}px`
    )


    branch.style.setProperty(
      '--branch-length',
      `${35 + Math.random() * 55}px`
    )


    branch.style.setProperty(
      '--branch-thickness',
      `${2 + Math.random() * 2}px`
    )


    branch.style.setProperty(
      '--branch-angle',
      `${branchSide * (25 + Math.random() * 25)}deg`
    )


    branch.style.setProperty(
      '--branch-delay',
      `${.5 + i * .25 + Math.random() * .4}s`
    )


    plant.appendChild(
      branch
    )


  }


  // ----------------------------------------------------------
  // DAUN
  // ----------------------------------------------------------

  const leafCount =
    5 +
    Math.floor(
      Math.random() * 5
    )


  for (
    let i = 0;
    i < leafCount;
    i++
  ) {

    const leaf =
      document.createElement(
        'div'
      )


    leaf.className =
      'realistic-leaf'


    const side =
      i % 2 === 0
        ? -1
        : 1


    leaf.style.setProperty(
      '--leaf-width',
      `${22 + Math.random() * 25}px`
    )


    leaf.style.setProperty(
      '--leaf-height',
      `${12 + Math.random() * 15}px`
    )


    leaf.style.setProperty(
      '--leaf-left',
      `${45 + side * (Math.random() * 15)}%`
    )


    leaf.style.setProperty(
      '--leaf-bottom',
      `${35 + i * (height / (leafCount + 1))}px`
    )


    leaf.style.setProperty(
      '--leaf-angle',
      `${side * (25 + Math.random() * 35)}deg`
    )


    leaf.style.setProperty(
      '--leaf-delay',
      `${.7 + i * .12 + Math.random() * .4}s`
    )

    leaf.style.setProperty(
      '--leaf-sway-angle',
      `${-2 + Math.random() * 4}deg`
    )

    leaf.style.setProperty(
      '--leaf-sway-duration',
      `${3.2 + Math.random() * 3}s`
    )

    leaf.style.setProperty(
      '--leaf-sway-delay',
      `${Math.random() * -4}s`
    )


    plant.appendChild(
      leaf
    )

  }


  // ----------------------------------------------------------
  // BUNGA UTAMA
  // ----------------------------------------------------------

  const flower =
    document.createElement(
      'div'
    )

  const flowerPalettes = [
    {
      light: 'rgba(255,255,255,.98)',
      blush: 'rgba(255,225,238,.96)',
      mid: 'rgba(246,157,191,.94)',
      deep: 'rgba(186,78,120,.96)',
      glow: 'rgba(246,157,191,.48)',
      center: '#f8df91',
      centerDeep: '#bb793b'
    },
    {
      light: 'rgba(255,250,242,.98)',
      blush: 'rgba(255,220,211,.96)',
      mid: 'rgba(244,166,145,.94)',
      deep: 'rgba(176,91,91,.96)',
      glow: 'rgba(244,166,145,.45)',
      center: '#f6d78e',
      centerDeep: '#ad7137'
    },
    {
      light: 'rgba(255,255,255,.98)',
      blush: 'rgba(238,226,255,.96)',
      mid: 'rgba(190,163,224,.94)',
      deep: 'rgba(112,82,151,.96)',
      glow: 'rgba(190,163,224,.48)',
      center: '#f2df9d',
      centerDeep: '#ae7746'
    },
    {
      light: 'rgba(255,255,250,.98)',
      blush: 'rgba(255,230,240,.96)',
      mid: 'rgba(225,170,199,.94)',
      deep: 'rgba(145,91,130,.96)',
      glow: 'rgba(225,170,199,.45)',
      center: '#f8dfa0',
      centerDeep: '#a86e3d'
    }
  ]

  const palette =
    flowerPalettes[
      Math.floor(
        Math.random() * flowerPalettes.length
      )
    ]

  flower.className =
    'realistic-flower'

  flower.style.setProperty(
    '--petal-light',
    palette.light
  )

  flower.style.setProperty(
    '--petal-blush',
    palette.blush
  )

  flower.style.setProperty(
    '--petal-mid',
    palette.mid
  )

  flower.style.setProperty(
    '--petal-deep',
    palette.deep
  )

  flower.style.setProperty(
    '--flower-glow',
    palette.glow
  )

  flower.style.setProperty(
    '--flower-center',
    palette.center
  )

  flower.style.setProperty(
    '--flower-center-deep',
    palette.centerDeep
  )

  flower.style.setProperty(
    '--flower-sway-angle',
    `${-.9 + Math.random() * 1.8}deg`
  )

  flower.style.setProperty(
    '--flower-sway-duration',
    `${3.8 + Math.random() * 2.8}s`
  )


  flower.style.setProperty(
    '--flower-size',
    `${42 + Math.random() * 35}px`
  )


  flower.style.setProperty(
    '--flower-left',
    `${48 + (-5 + Math.random() * 10)}%`
  )


  flower.style.setProperty(
    '--flower-bottom',
    `${height * .72}px`
  )


  flower.style.setProperty(
    '--flower-delay',
    `${1.4 + Math.random() * .9}s`
  )


  // ----------------------------------------------------------
  // 5 KELOPAK
  // ----------------------------------------------------------

  for (
    let i = 1;
    i <= 5;
    i++
  ) {

    const petal =
      document.createElement(
        'div'
      )


    petal.className =
      `realistic-petal p${i}`

    petal.style.setProperty(
      '--petal-angle',
      `${(i - 1) * 72 + (-5 + Math.random() * 10)}deg`
    )

    petal.style.setProperty(
      '--petal-width',
      `${.9 + Math.random() * .18}`
    )

    petal.style.setProperty(
      '--petal-length',
      `${.92 + Math.random() * .16}`
    )


    flower.appendChild(
      petal
    )

  }


  const inner =
    document.createElement(
      'div'
    )


  inner.className =
    'flower-inner'


  flower.appendChild(
    inner
  )


  const core =
    document.createElement(
      'div'
    )


  core.className =
    'flower-core'


  flower.appendChild(
    core
  )


  plant.appendChild(
    flower
  )


  flowerGarden.appendChild(
    plant
  )

}


// ============================================================
// CREATE PLANTS
// ============================================================

function createPlants() {

  if (!flowerGarden) {
    return
  }


  const plantCount =
    window.innerWidth <= 768
      ? 9
      : 13


  for (
    let i = 0;
    i < plantCount;
    i++
  ) {

    const position =
      (
        i /
        (plantCount - 1)
      ) * 96 +
      2


    createRealisticPlant(
      position
    )

  }

}
// ============================================================
// NAVIGATION HELPER
// ============================================================

function goToPage(pageId) {

  showPage(pageId)

}


// ============================================================
// GIFT BUTTON
// TERKUNCI HINGGA COUNTDOWN SELESAI
// ============================================================

if (openGift) {

  openGift.addEventListener(
    'click',
    () => {

      if (!countdownFinished) {
        return
      }

      goToPage('gift')

    }
  )

}
// ============================================================
// GIFT BOX
// ============================================================

if (giftBox) {

  giftBox.addEventListener(
    'click',
    () => {

      giftBox.classList.toggle(
        'opened'
      )

    }
  )

}


// ============================================================
// OPEN MEMORY
// ============================================================

if (openMemory) {

  openMemory.addEventListener(
    'click',
    () => {

      goToPage('special')

    }
  )

}


// ============================================================
// OPEN LETTER
// ============================================================

if (openLetter) {

  openLetter.addEventListener(
    'click',
    () => {

      goToPage('letter')

    }
  )

}


// ============================================================
// OPEN GALLERY
// ============================================================

if (openGallery) {

  openGallery.addEventListener(
    'click',
    () => {

      goToPage('gallery')

    }
  )

}


// ============================================================
// OPEN VIDEO
// ============================================================

if (openVideo) {

  openVideo.addEventListener(
    'click',
    () => {

      goToPage('video')

    }
  )

}


// ============================================================
// OPEN WISH
// ============================================================

if (openWish) {

  openWish.addEventListener(
    'click',
    () => {

      goToPage('wish')

    }
  )

}


// ============================================================
// FINISH
// ============================================================

if (finish) {

  finish.addEventListener(
    'click',
    () => {

      goToPage('final')

    }
  )

}


// ============================================================
// GALLERY LIGHTBOX
// ============================================================

function openLightbox(
  index
) {

  if (!photos[index]) {
    return
  }


  currentPhotoIndex =
    index


  updateLightbox()


  if (lightbox) {

    lightbox.classList.add(
      'show'
    )

  }

}


function closeLightbox() {

  if (!lightbox) {
    return
  }


  lightbox.classList.remove(
    'show'
  )

}


function updateLightbox() {

  if (!photos[currentPhotoIndex]) {
    return
  }


  if (lightboxImage) {

    lightboxImage.src =
      photos[currentPhotoIndex].src

    lightboxImage.alt =
      photos[currentPhotoIndex].title

  }


  if (lightboxCounter) {

    lightboxCounter.textContent =
      `${String(currentPhotoIndex + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`

  }

}


// ============================================================
// PHOTO CARD CLICK
// ============================================================

if (photoGrid) {

  photoGrid.addEventListener(
    'click',
    event => {

      const card =
        event.target.closest(
          '.memory-card'
        )


      if (!card) {
        return
      }


      const index =
        Number(
          card.dataset.index
        )


      if (
        Number.isNaN(index)
      ) {

        return

      }


      openLightbox(index)

    }
  )

}


// ============================================================
// LIGHTBOX CLOSE
// ============================================================

if (lightboxClose) {

  lightboxClose.addEventListener(
    'click',
    closeLightbox
  )

}


// ============================================================
// LIGHTBOX PREVIOUS
// ============================================================

if (lightboxPrev) {

  lightboxPrev.addEventListener(
    'click',
    () => {

      currentPhotoIndex--

      if (
        currentPhotoIndex <
        0
      ) {

        currentPhotoIndex =
          photos.length - 1

      }


      updateLightbox()

    }
  )

}


// ============================================================
// LIGHTBOX NEXT
// ============================================================

if (lightboxNext) {

  lightboxNext.addEventListener(
    'click',
    () => {

      currentPhotoIndex++

      if (
        currentPhotoIndex >=
        photos.length
      ) {

        currentPhotoIndex =
          0

      }


      updateLightbox()

    }
  )

}


// ============================================================
// CLOSE LIGHTBOX WHEN CLICKING BACKGROUND
// ============================================================

if (lightbox) {

  lightbox.addEventListener(
    'click',
    event => {

      if (
        event.target ===
        lightbox
      ) {

        closeLightbox()

      }

    }
  )

}


// ============================================================
// KEYBOARD LIGHTBOX
// ============================================================

document.addEventListener(
  'keydown',
  event => {

    if (
      !lightbox ||
      !lightbox.classList.contains('show')
    ) {

      return

    }


    if (
      event.key ===
      'Escape'
    ) {

      closeLightbox()

    }


    if (
      event.key ===
      'ArrowLeft'
    ) {

      currentPhotoIndex--

      if (
        currentPhotoIndex < 0
      ) {

        currentPhotoIndex =
          photos.length - 1

      }


      updateLightbox()

    }


    if (
      event.key ===
      'ArrowRight'
    ) {

      currentPhotoIndex++

      if (
        currentPhotoIndex >=
        photos.length
      ) {

        currentPhotoIndex =
          0

      }


      updateLightbox()

    }

  }
)


// ============================================================
// TOUCH / SWIPE LIGHTBOX
// ============================================================

let touchStartX =
  0

let touchEndX =
  0


if (lightbox) {

  lightbox.addEventListener(
    'touchstart',
    event => {

      if (
        !event.touches ||
        !event.touches.length
      ) {

        return

      }


      touchStartX =
        event.touches[0].clientX

    },
    {
      passive: true
    }
  )


  lightbox.addEventListener(
    'touchend',
    event => {

      if (
        !event.changedTouches ||
        !event.changedTouches.length
      ) {

        return

      }


      touchEndX =
        event.changedTouches[0].clientX


      const distance =
        touchEndX -
        touchStartX


      if (
        Math.abs(distance) <
        50
      ) {

        return

      }


      if (
        distance > 0
      ) {

        currentPhotoIndex--

        if (
          currentPhotoIndex < 0
        ) {

          currentPhotoIndex =
            photos.length - 1

        }

      } else {

        currentPhotoIndex++

        if (
          currentPhotoIndex >=
          photos.length
        ) {

          currentPhotoIndex =
            0

        }

      }


      updateLightbox()

    },
    {
      passive: true
    }
  )

}


// ============================================================
// BACKGROUND MUSIC
// ============================================================

let musicStarted =
  false


function updateMusicControl() {

  if (!bgMusic || !musicControl) {
    return
  }


  const isPlaying =
    !bgMusic.paused


  musicControl.classList.toggle(
    'is-playing',
    isPlaying
  )

  musicControl.setAttribute(
    'aria-pressed',
    String(isPlaying)
  )

  musicControl.setAttribute(
    'aria-label',
    isPlaying
      ? 'Pause background music'
      : 'Play background music'
  )


  if (musicStatus) {
    musicStatus.textContent =
      isPlaying
        ? 'MUSIC PLAYING'
        : 'MUSIC PAUSED'
  }

}


function startMusic() {

  if (!bgMusic) {
    return
  }


  if (musicStarted) {
    return
  }


  musicStarted =
    true


  bgMusic.volume =
    0.55


  const playPromise =
    bgMusic.play()


  if (
    playPromise &&
    typeof playPromise.catch ===
    'function'
  ) {

    playPromise.catch(
      error => {

        musicStarted =
          false

        if (musicStatus) {
          musicStatus.textContent =
            'TAP TO PLAY MUSIC'
        }

        console.warn(
          'Background music could not start:',
          error
        )

      }
    )

  }

}


// ============================================================
// MUSIC PLAY / PAUSE CONTROL
// ============================================================

if (bgMusic) {

  bgMusic.addEventListener(
    'play',
    updateMusicControl
  )

  bgMusic.addEventListener(
    'pause',
    updateMusicControl
  )

}


if (musicControl && bgMusic) {

  musicControl.addEventListener(
    'click',
    () => {

      if (bgMusic.paused) {

        musicStarted =
          true

        bgMusic.play().catch(
          error => {

            if (musicStatus) {
              musicStatus.textContent =
                'TAP TO PLAY MUSIC'
            }

            console.warn(
              'Background music could not start:',
              error
            )

          }
        )

      } else {

        bgMusic.pause()

      }

    }
  )

}


// ============================================================
// COUNTDOWN
// ============================================================

const daysElement =
  document.querySelector(
    '#days'
  )


const hoursElement =
  document.querySelector(
    '#hours'
  )


const minutesElement =
  document.querySelector(
    '#minutes'
  )


const secondsElement =
  document.querySelector(
    '#seconds'
  )


// ============================================================
// DATE COUNTDOWN + PERSISTENT ENTRY COUNTDOWN
// ============================================================

const secondCountdownDurationMs =
  10 * 1000


const targetDate =
  new Date(
    '2026-11-10T00:00:00+07:00'
  ).getTime()


const countdownStorageKey =
  'anniversary-countdown-2026-11-10-entry-started-at'


let countdownInterval
let countdownFinished = false
let secondStageStartedAt = null


function readSecondStageStart() {

  try {

    const storedStart =
      Number(
        localStorage.getItem(
          countdownStorageKey
        )
      )


    if (
      Number.isFinite(storedStart) &&
      storedStart >= targetDate &&
      storedStart <= Date.now()
    ) {
      return storedStart
    }

  } catch (error) {

    console.warn(
      'Countdown progress could not be read from storage:',
      error
    )

  }


  return null

}


function saveSecondStageStart(startedAt) {

  try {

    localStorage.setItem(
      countdownStorageKey,
      String(startedAt)
    )

  } catch (error) {

    console.warn(
      'Countdown progress could not be saved to storage:',
      error
    )

  }

}


if (Date.now() >= targetDate) {

  secondStageStartedAt =
    readSecondStageStart()


  if (secondStageStartedAt === null) {

    secondStageStartedAt =
      Date.now()

    saveSecondStageStart(
      secondStageStartedAt
    )

  }

}


// ============================================================
// UPDATE COUNTDOWN
// ============================================================

function updateCountdown() {

  if (countdownFinished) {
    return
  }


  const now =
    Date.now()


  if (now < targetDate) {

    const totalSeconds =
      Math.ceil(
        (targetDate - now) / 1000
      )


    updateCountdownDisplay(
      totalSeconds
    )


    return

  }


  if (secondStageStartedAt === null) {

    secondStageStartedAt =
      now

    saveSecondStageStart(
      secondStageStartedAt
    )

  }


  const remainingMs =
    secondCountdownDurationMs -
    (now - secondStageStartedAt)


  if (remainingMs <= 0) {

    countdownFinished = true

    updateCountdownDisplay(0)


    if (openGift) {

      openGift.disabled = false

      openGift.hidden = false

      openGift.textContent =
        'Buka Sekarang'

      openGift.classList.add(
        'countdown-ready'
      )

      openGift.classList.remove(
        'countdown-locked'
      )

      openGift.style.pointerEvents =
        'auto'

      openGift.removeAttribute(
        'aria-disabled'
      )

    }

    clearInterval(countdownInterval)

    return

  }


  const totalSeconds =
    Math.ceil(
      remainingMs / 1000
    )


  updateCountdownDisplay(
    totalSeconds
  )

}


function updateCountdownDisplay(totalSeconds) {

  const days =
    Math.floor(
      totalSeconds /
      86400
    )


  const hours =
    Math.floor(
      (
        totalSeconds %
        86400
      ) / 3600
    )


  const minutes =
    Math.floor(
      (
        totalSeconds %
        3600
      ) / 60
    )


  const seconds =
    totalSeconds %
    60


  if (daysElement) {

    daysElement.textContent =
      String(days)
        .padStart(2, '0')

  }


  if (hoursElement) {

    hoursElement.textContent =
      String(hours)
        .padStart(2, '0')

  }


  if (minutesElement) {

    minutesElement.textContent =
      String(minutes)
        .padStart(2, '0')

  }


  if (secondsElement) {

    secondsElement.textContent =
      String(seconds)
        .padStart(2, '0')

  }

}


// ============================================================
// START COUNTDOWN
// ============================================================

if (openGift) {

  openGift.disabled = true
  openGift.hidden = true

  openGift.classList.add(
    'countdown-locked'
  )

  openGift.style.pointerEvents =
    'none'

  openGift.setAttribute(
    'aria-disabled',
    'true'
  )

}


updateCountdown()


countdownInterval = setInterval(
  updateCountdown,
  250
)

// ============================================================
// PAGE INITIALIZATION
// ============================================================

document.body.classList.add(
  'page-loaded'
)


// ============================================================
// HOME INITIAL STATE
// ============================================================

showPage('home')


// ============================================================
// FLOWER LAYER FINAL PROTECTION
// ============================================================

if (flowerGarden) {

  flowerGarden.style.zIndex =
    '1'

  flowerGarden.style.pointerEvents =
    'none'

}


// ============================================================
// PROTECT PAGE CONTENT FROM FLOWERS
// ============================================================

pages.forEach(
  page => {

    page.style.position =
      'absolute'

    page.style.zIndex =
      '2'

  }
)


// ============================================================
// PROTECT INTERACTIVE ELEMENTS
// ============================================================

const interactiveElements =
  document.querySelectorAll(
    'button:not(#musicControl), a, .memory-card, .gift-box'
  )


interactiveElements.forEach(
  element => {

    element.style.position =
      'relative'

    element.style.zIndex =
      '30'

    element.style.pointerEvents =
      'auto'

  }
)


// ============================================================
// PREVENT FLOWER CHILDREN FROM CAPTURING CLICKS
// ============================================================

if (flowerGarden) {

  const flowerChildren =
    flowerGarden.querySelectorAll(
      '*'
    )


  flowerChildren.forEach(
    element => {

      element.style.pointerEvents =
        'none'

    }
  )

}

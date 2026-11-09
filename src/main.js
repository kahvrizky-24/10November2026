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

  opacity: 0;

  animation:
    plantGrow
    var(--plant-grow)
    cubic-bezier(.18, .75, .25, 1)
    var(--plant-delay)
    forwards;
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

      #245b39 0%,

      #3f8c55 28%,

      #82c875 50%,

      #4b9a5d 72%,

      #204f32 100%
    );

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

      #c5f2a4 0%,

      #8ed77b 25%,

      #55aa61 62%,

      #245d39 100%
    );

  box-shadow:
    0 0 7px
    rgba(100, 200, 120, .3),

    inset 1px 1px 4px
    rgba(255,255,255,.28);

  transform-origin: center;

  opacity: 0;

  transform:
    rotate(var(--leaf-angle))
    scale(.05);

  animation:
    leafAppear
    .8s
    cubic-bezier(.2, .8, .2, 1)
    var(--leaf-delay)
    forwards;
}


.realistic-leaf::before {
  content: '';

  position: absolute;

  left: 10%;
  top: 49%;

  width: 80%;
  height: 1px;

  background:
    rgba(225,255,215,.6);

  transform:
    rotate(-8deg);
}


.realistic-leaf::after {
  content: '';

  position: absolute;

  left: 42%;
  top: 12%;

  width: 1px;
  height: 70%;

  background:
    rgba(40, 100, 55, .38);

  transform:
    rotate(25deg);
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

  transform:
    translate(-50%, 50%)
    scale(.05);

  opacity: 0;

  animation:
    flowerBloomRealistic
    1.15s
    cubic-bezier(.2, .8, .2, 1)
    var(--flower-delay)
    forwards;

  filter:
    drop-shadow(
      0 0 7px
      rgba(255, 135, 195, .65)
    )

    drop-shadow(
      0 0 16px
      rgba(255, 100, 180, .28)
    );
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
  height: 58%;

  left: 26%;
  top: 21%;

  border-radius:
    65% 65%
    48% 48%;

  transform-origin: 50% 90%;

  background:
    radial-gradient(
      circle at 38% 25%,

      rgba(255,255,255,.99) 0%,

      rgba(255,232,244,.98) 16%,

      rgba(255,178,218,.95) 40%,

      rgba(241,104,180,.93) 68%,

      rgba(178,43,119,.98) 100%
    );

  box-shadow:
    0 0 9px
    rgba(255, 120, 190, .7),

    inset 2px 2px 8px
    rgba(255,255,255,.4),

    inset -3px -4px 8px
    rgba(150,40,100,.25);
}


.realistic-petal.p1 {
  transform:
    rotate(0deg)
    translateY(-38%);
}


.realistic-petal.p2 {
  transform:
    rotate(72deg)
    translateY(-38%);
}


.realistic-petal.p3 {
  transform:
    rotate(144deg)
    translateY(-38%);
}


.realistic-petal.p4 {
  transform:
    rotate(216deg)
    translateY(-38%);
}


.realistic-petal.p5 {
  transform:
    rotate(288deg)
    translateY(-38%);
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

      #fffbd0 0%,

      #ffe66e 28%,

      #ffc04b 55%,

      #e88731 100%
    );

  box-shadow:
    0 0 10px
    rgba(255, 225, 100, .95),

    inset 0 0 7px
    rgba(255,255,255,.55);

  z-index: 5;
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

      #fffbd8,

      #ffdc65 45%,

      #d77a2d 100%
    );

  box-shadow:
    0 0 6px
    rgba(255, 225, 110, .95);

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


  flower.className =
    'realistic-flower'


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
      () => {

        /*
           Browser dapat menolak autoplay.
           Musik akan dicoba lagi ketika
           pengguna melakukan interaksi.
        */

        musicStarted =
          false

      }
    )

  }

}


// ============================================================
// START MUSIC AFTER USER INTERACTION
// ============================================================

document.addEventListener(
  'click',
  () => {

    startMusic()

  },
  {
    once: true
  }
)


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
// COUNTDOWN DURATION
// ============================================================

// Temporary testing duration. Restore the original 16-hour countdown with:
// 16 * 60 * 60 * 1000
const COUNTDOWN_DURATION_MS =
  3 * 1000


const targetDate =
  Date.now() +
  COUNTDOWN_DURATION_MS


let countdownInterval
let countdownFinished = false


// ============================================================
// UPDATE COUNTDOWN
// ============================================================

function updateCountdown() {

  const now =
    Date.now()


  const difference =
    targetDate -
    now


  if (
    difference <= 0
  ) {

    countdownFinished = true

    if (daysElement) {
      daysElement.textContent =
        '00'
    }

    if (hoursElement) {
      hoursElement.textContent =
        '00'
    }

    if (minutesElement) {
      minutesElement.textContent =
        '00'
    }

    if (secondsElement) {
      secondsElement.textContent =
        '00'
    }


    if (openGift) {

      openGift.disabled = false

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
      difference / 1000
    )


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
  1000
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
    'button, a, .memory-card, .gift-box'
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

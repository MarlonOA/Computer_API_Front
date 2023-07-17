<script setup>
// import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<div>
  <main>
    <a href="/cadastrar">
      <button class="btnCad">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
        </svg>
        <!-- <svg class="voltar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M9.4 233.4c-12.5 12.5-12.5   32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
        </svg> -->
      </button>
    </a>
  </main>

  <RouterView />
</div>
</template>

<style scoped>
/* feito por mim */

/* main{
  display: flex;
  justify-content: center;
  align-items: center;
} */
.btnCad{
  display: block;
  position: fixed;
  right: 1.3rem;
  bottom: 1.3rem;
  width: 51px;
  height: 51px;
  background-color: #f00;
  border-radius: 50%;
  border: 0.5px solid #f00;
  box-shadow: 0 0 15px #f00;
}
.btnCad svg{
  width: 40px;
  height: 40px;
  margin: -15px;
}

</style>

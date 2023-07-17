<script>
// import { ref } from 'vue'
export default {
    name: "formulario",
    data () {
        return {
            nome: '',
            descricao: '',
            preco: '',
            computadores: [{}],
            computador: {},
        }
    },
    methods:{
        onClick(){
            const computador = {
                "cNome": '',
                "cDescricao": '',
                "cPreco": '',
            }
            computador.cNome = this.nome
            computador.cDescricao = this.descricao
            computador.cPreco = this.preco

            this.computadores.push(computador)

            // console.log(computador)
            // console.log(this.computadores)
            // console.log('nome ', this.nome, 'descricao ', this.descricao, 'preco ', this.preco)

            this.api(this.nome, this.descricao, this.preco)

            return computador
        },
        api(nome_comp, desc_comp, prec_comp){
            fetch('http://localhost:8080/Produto', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome_produto: nome_comp,
                descricao: desc_comp,
                preco: prec_comp
            })
        })
        }
    },
}
</script>

<template>
    <main class="pgCad">
        <h1>Cadastrar Computador</h1>
        <form class="formulario">
            <input v-model="nome" class="input" id="nome" placeholder="Nome do computador" type="text">

            <input v-model="descricao" class="input" id="descricao" placeholder="Descricao do computador" type="text">

            <input v-model="preco" class="input" id="preco" placeholder="Preco do computador" type="number">

            <button type="submit" @click.prevent="onClick()" class="button">Enviar</button>
        </form>
        <a href="/">
            <button class="btnCad">
                <svg class="voltar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5   32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>
            </button>
        </a>
    </main>
</template>

<style scoped>

button {
  font-weight: bold;
}
.formulario{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.input{
    width: 300px;
    height: 40px;
    box-shadow: 0 0 17px #f00;
    border-radius: 15px;
    background-color: rgba(1, 1, 1, 0);
    border: 2px solid #f00;
    color: #fff;
}
.input::placeholder{
    color: #fff;
    text-align: center;
}
.button{
    width: 130px;
    height: 40px;
    box-shadow: 0 0 17px #f00;
    border-radius: 15px;
    background-color: rgba(1, 1, 1, 0);
    border: 2px solid #f00;
    color: #fff;
}
.button:hover{
    color: #000;
    background-color: #fff;
    transition: 500ms;
}
.pgCad{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4rem;
}
.pgCad h1{
    font-size: 2.5rem;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
}
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
#preco::-webkit-inner-spin-button,
#preco::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

</style>

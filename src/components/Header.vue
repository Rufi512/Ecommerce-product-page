<template>
<header>
<input type="checkbox" id="basket-check" hidden/>
  
  <nav class="navigation">
    <input type="checkbox" id="topBar" hidden/>
  <label for="topBar" aria-label="menu">
  <MenuIcon/>
  </label>
  <LogoIcon/>
  <ul>
    <label for="topBar" aria-label="close">
      <CloseIcon/>
    </label>
    <li><a href="#">Collections</a></li>
    <li><a href="#">Men</a></li>
    <li><a href="#">Women</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
<div class="items">
  <label class="card-items" for="basket-check" aria-label="card">
    <span v-if="onQuantiy > 0">{{onQuantiy}}</span>
    <CartIcon/>
  </label>
  <img class="avatar" :src="avatar">
</div>

<div class="basket">
  <h3>Cart</h3>
  <p v-if="basket.length < 1" class="empty-text">Your cart is empty.</p>
  <div class="container-products-checkout">
    <div class="product-check" v-for="(product, index) in basket" :key="index">
      <img class="checkout-image" :src="require('../' + product.image)">
      <p class="checkout-title">{{product.title}}</p>
      <p class="checkout-price">${{product.price}} x {{product.quantity}}</p>
      <span class="checkout-total">${{Number(product.price) * Number(product.quantity)}}</span>
      <div class="trash-icon" @click="deleteProduct(index)">
      <DeleteIcon />
      </div>
    </div>
  </div>

  <button v-if="basket.length > 0">Checkout</button>
</div>

</header>


</template>

<script>

  import LogoIcon from '../assets/icons/logo.svg'
  import MenuIcon from '../assets/icons/icon-menu.svg'
  import CartIcon from '../assets/icons/icon-cart.svg'
  import AvatarIcon from '../assets/images/image-avatar.png'
  import DeleteIcon from '../assets/icons/icon-delete.svg'
  import CloseIcon from '../assets/icons/icon-close.svg'
  import emitter from 'tiny-emitter/instance';

  export default {
    name: 'Header',
    components:{
      LogoIcon,
      MenuIcon,
      CartIcon,
      DeleteIcon,
      CloseIcon
    },

    data(){
      return {
        avatar:AvatarIcon,
        basket:JSON.parse(localStorage.getItem("basket")) || [],
        onQuantiy:localStorage.getItem("basket") && JSON.parse(localStorage.getItem("basket")).length > 0 ? JSON.parse(localStorage.getItem("basket")).map((el)=>{
          return el.quantity
        }).reduce((a,b)=> {return a + b}) : 0
      }
    },

    mounted(){
      emitter.on('basket',()=>{
        const products = JSON.parse(localStorage.getItem("basket")) || []
        this.basket = products || []

        this.onQuantiy = products && products.length > 0 ? products.map((el)=>{
          return el.quantity
        }).reduce((a,b)=> {return a + b}) : 0
      })
    },

    methods:{
      deleteProduct(index){
        const products = JSON.parse(localStorage.getItem("basket"))
        const newList = products.filter((product) => {return product.id !== index})
        localStorage.setItem("basket", JSON.stringify(newList))
        this.basket = JSON.parse(localStorage.getItem("basket")) || []
        emitter.emit('basket',true);
      }
    }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use '../assets/styles/layouts/header';
</style>

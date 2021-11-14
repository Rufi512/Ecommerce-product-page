<template>
    <section>
        <Visualizer/>
        <div class="information">
            <span>Sneaker Company</span>
            <h2>{{product.title}}</h2>
            <p>{{product.description}}</p>
            <div class="price">
                <h3>${{product.price}}</h3>
                <span>{{product.offer}}</span>
                <span>${{product.price_original}}</span>
            </div>
            <div class="check-product">
                <div class="bar-sum">
                    <button aria-label="minus" @click="quantity_product(false)" class="minus">
                        <MinusIcon/>
                    </button>
                    <span>{{product.quantity_sell}}</span>
                    <button @click="quantity_product(true)" aria-label="sum" class="sum">
                        <PlusIcon/>
                    </button>
                </div>
                <button class="cart-button" @click="addProduct()" aria-label="cart"><CartIcon/>Add to cart</button>
            </div>
        </div>
    </section>
</template>
<script>
import Visualizer from '../components/Visualizer.vue';
import PlusIcon from '../assets/icons/icon-plus.svg';
import MinusIcon from '../assets/icons/icon-minus.svg';
import CartIcon from '../assets/icons/icon-cart.svg';
import emitter from 'tiny-emitter/instance';

export default {
    name: "Home",
    components: {
        Visualizer,
        PlusIcon,
        MinusIcon,
        CartIcon
    },


    data(){
        return{
            product:{
                id:0,
                title:"Fall Limited Edition Sneakers",
                description:`These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
                price:"125.00",
                offer:"50%",
                price_original:"250.00",
                quantity_sell:0,
                image:'assets/images/image-product-1.jpg'
            }
        }
    },
    methods:{
        quantity_product(i){
            if (i) {
                this.product.quantity_sell += 1
            }else{
                this.product.quantity_sell < 1 ? this.product.quantity_sell = 0 : this.product.quantity_sell -= 1
            }
        },

        addProduct(){
            if(this.product.quantity_sell <= 0){
                alert("You need to specify the quantity to buy")
                return
            }
            const basket_local = localStorage.getItem("basket")
            let product = {id:this.product.id, title:this.product.title, price:this.product.price, quantity:this.product.quantity_sell, image:this.product.image}

            if(!basket_local){
            localStorage.setItem("basket",JSON.stringify([product]))

            }else{
                let array_products = JSON.parse(localStorage.getItem('basket'));
                let product_exist = array_products.filter((el)=>{ return el.id == product.id})
                    if(product_exist.length == 0 || !product_exist){
                        array_products.push(product)
                        localStorage.setItem("basket", JSON.stringify(array_products))
                    }else{
                        let product_override = array_products.filter((el)=>{el.id !== product.id})
                        product_override.push(product)
                        localStorage.setItem("basket", JSON.stringify(product_override))
                }
            }

            this.product.quantity_sell = 0
            emitter.emit('basket',true);

        }
    }
}
</script>
<style lang="scss">
@use '../assets/styles/pages/product.scss'
</style>
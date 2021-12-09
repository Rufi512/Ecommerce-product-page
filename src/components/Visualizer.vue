<template>
  <input type="checkbox" id="lightbox" hidden>
<div class="visualizer">
<label for="lightbox" aria-label="lightbox">
<img :src="products_images[selected_image]" alt="image-product"/>
</label>
<div class="arrows arrow-left" @click="passImage(false)"><ArrowLeft/></div>
<div class="arrows arrow-right" @click="passImage(true)"><ArrowNext/></div>
<div class="collection-images" v-if="window_size > 1023">
  <div v-for="(thumbnail, index) in products_images_thumbs" :key="index" @click="changeImage(index)" v-bind:class="[index === selected_image ? 'image-selected' : '', 'image']">
  <img :src="thumbnail" :alt="'image-thumbnail-' + index"  />
  </div>
</div>
</div>

<div class="lightbox" v-if="window_size > 1023">
<label for="lightbox" aria-label="close"><CloseIcon/></label>
<img class="show-image" :src="products_images[selected_image]"/>
<div class="arrows arrow-left" @click="passImage(false)"><ArrowLeft/></div>
<div class="arrows arrow-right" @click="passImage(true)"><ArrowNext/></div>
<div class="collection-images" v-if="window_size > 1023">
  <div v-for="(thumbnail, index) in products_images_thumbs" :key="index" @click="changeImage(index)" v-bind:class="[index === selected_image ? 'image-selected' : '', 'image']">
  <img :src="thumbnail" :alt="'image-thumbnail-' + index"  />
  </div>
</div>
</div>
</template>

<script>
import product_image_0 from '../assets/images/image-product-1.jpg';
import product_image_1 from '../assets/images/image-product-2.jpg';
import product_image_2 from '../assets/images/image-product-3.jpg';
import product_image_3 from '../assets/images/image-product-4.jpg';
import product_image_0_thumb from '../assets/images/image-product-1-thumbnail.jpg';
import product_image_1_thumb from '../assets/images/image-product-2-thumbnail.jpg';
import product_image_2_thumb from '../assets/images/image-product-3-thumbnail.jpg';
import product_image_3_thumb from '../assets/images/image-product-4-thumbnail.jpg';
import ArrowLeft from '../assets/icons/icon-previous.svg';
import ArrowNext from '../assets/icons/icon-next.svg';
import CloseIcon from '../assets/icons/icon-close.svg'

export default {
  name: "Visualizer",
  components:{
    ArrowNext,
    ArrowLeft,
    CloseIcon
  },

  mounted(){
    this.$nextTick(function() {
            window.addEventListener("resize", this.changeWindow)
        })
  },
  unmounted() {
        window.removeEventListener('resize', this.changeWindow);
    },
  data(){
    return{
      products_images:[product_image_0,product_image_1,product_image_2,product_image_3],
      products_images_thumbs:[product_image_0_thumb,product_image_1_thumb,product_image_2_thumb,product_image_3_thumb],
      selected_image:0,
      window_size:window.innerWidth
    }
  },

  methods:{
    changeImage:function (index){
      this.selected_image = index
    },

    changeWindow: function(){
      this.window_size = window.innerWidth
    },

    passImage: function(index) {
      if(!index) return this.selected_image = (this.selected_image - 1 + this.products_images.length) % this.products_images.length

      this.selected_image = (this.selected_image + 1) % this.products_images.length
    }
  }

  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use '../assets/styles/layouts/visualizer.scss'
</style>

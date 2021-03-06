Vue.component("product-details", {
  props: {
    details: {
      type: String,
      required: false,
    },
  },
  template: `
  <p>{{ details }}</p>
  `,
  data() {
    return {}
  },
})

Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
    <div class="product">
        <div class="product-image">
            <img :src="image">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div v-for="(variant, index) in variants"
                  :key="variant.variantId"
                  class="color-box"
                  :style="{ backgroundColor: variant.variantColor }"
                  @mouseover="updateProduct(index)">
            </div>

            <button v-on:click="addToCart"
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">Add to Cart</button>

            <div class="cart">
                <p>Cart({{ cart }})</p>
            </div>
        </div>
    </div>
  `,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      onSale: true,
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "Green",
          variantImage: "./assets/vmSocks-green-onWhite.jpg",
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: "Blue",
          variantImage: "./assets/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0,
        },
      ],
      cart: 0,
    }
  },

  methods: {
    addToCart() {
      this.cart += 1
    },
    removeToCart() {
      if (this.cart > 0) {
        this.cart -= 1
      }
    },
    updateProduct(index) {
      this.selectedVariant = index
      console.log(index)
    },
  },

  // Note: computed propertes are cached until the value is changed.
  // Its more efficient to use computed properties over methods for
  // expensive opperations that you do not want to rerun every time you
  // want to access it.
  computed: {
    title() {
      return this.brand + " " + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }

      return "$2.99"
    },
  },
})

var app = new Vue({
  el: "#app",
  data: {
    premium: false,
  },
})

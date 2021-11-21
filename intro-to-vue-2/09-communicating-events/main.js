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

            <button v-on:click="removeFromCart"
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">Remove from Cart</button>
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
    }
  },

  methods: {
    addToCart() {
      // this.$emit("add-to-cart") // 001 Initial example.

      // $emit(eventName, ...arguments)
      // Note: Any additional arguments will be passed into the listener's callback function.
      // See: https://v3.vuejs.org/api/instance-methods.html#emit
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId)
    },
    removeFromCart() {
      this.$emit(
        "remove-from-cart",
        this.variants[this.selectedVariant].variantId
      )
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
    // cart: 0, // 001 Initial example.
    cart: [],
  },
  methods: {
    // 001 Initial example.
    // updateCart() {
    //   this.cart += 1
    // },
    // END 001 Initial example.

    // 'id' is an argument that was passed to the emitted event, and passed as
    // argument into this callback function.
    updateCart(id) {
      this.cart.push(id)
    },
    removeItemFromCart(id) {
      let cart = this.cart
      for (var i = cart.length - 1; i >= 0; i--) {
        if (cart[i] === id) {
          cart.splice(i, 1)
        }
      }
    },
  },
})

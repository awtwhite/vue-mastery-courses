var eventBus = new Vue()

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

        <product-tabs :reviews="reviews" :shipping="shipping" :details="details"></product-tabs>
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
      reviews: [],
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

  mounted() {
    eventBus.$on("review-submitted", productReview => {
      this.reviews.push(productReview)
    })
  },
})

Vue.component("product-review", {
  template: `
    <!-- '.prevent' is a modifier on the @submit event handler that is
      preventing the default behaviour of a for submit, that is, to post
      and reload the page.
    -->
    <form class="review-form" @submit.prevent="onSubmit">
      <p v-if="errors.length">
        <strong>Please correct the following error(s):</strong>
        <ul>
          <li v-for="error in errors">
            {{ error }}
          </li>
        </ul>
      </p>

      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </p>

      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <!-- '.number' is a modifier on the v-model directive that is
          type casting as a number.
        -->
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: [],
    }
  },
  methods: {
    onSubmit() {
      // Remove existing errors before we resubmit the form so we are not
      // showing the previous form submissions errors.
      this.errors.length = 0

      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
        }

        eventBus.$emit("review-submitted", productReview)

        this.name = null
        this.review = null
        this.rating = null
      } else {
        if (!this.name) this.errors.push("Name required.")
        if (!this.review) this.errors.push("Review required.")
        if (!this.rating) this.errors.push("Rating required.")
      }
    },
  },
})

Vue.component("product-tabs", {
  props: {
    shipping: {
      type: String,
      required: true,
    },
    details: {
      type: Array,
      required: true,
    },
    reviews: {
      type: Array,
      required: true,
    },
  },
  template: `
    <div>
      <span class="tab"
            :class="{ activeTab: selectedTab === tab }"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="selectedTab = tab">{{ tab }}</span>


      <div v-show="selectedTab === 'Details'">
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
      </div>

      <div v-show="selectedTab === 'Shipping'">
        <p>Shipping: {{ shipping }}</p>
      </div>

      <div v-show="selectedTab === 'Reviews'">
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
          <li v-for="review in reviews">
          <p>{{ review.name }}</p>
          <p>{{ review.review }}</p>
          <p>{{ review.rating }}</p>
          </li>
        </ul>
      </div>

      <product-review  v-show="selectedTab === 'Make a Review'"></product-review>
    </div>
  `,
  data() {
    return {
      tabs: ["Details", "Shipping", "Reviews", "Make a Review"],
      selectedTab: "Details",
    }
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

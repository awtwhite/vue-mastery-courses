var app = new Vue({
  el: "#app",
  data: {
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
    sale() {
      if (this.onSale) {
        return `${this.brand} ${this.product} is on sale!`
      }
    },
  },
})

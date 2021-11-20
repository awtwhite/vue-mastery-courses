var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "Green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg",
      },
      {
        variantId: 2235,
        variantColor: "Blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpg",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    removeToCart: function () {
      if (this.cart > 0) {
        this.cart -= 1
      }
    },
    // The method below is written with the es6 shorthand. The method above is
    // as the traditional way.
    updateProduct(variantImage) {
      this.image = variantImage
    },
  },
})

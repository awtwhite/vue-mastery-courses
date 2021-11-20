var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    inStock: false,
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

    // Other example shown in video;
    // Data as object to set multiple CSS properties on element.
    // E.g. <span :style="styleObject">...</span>
    // Use of an array to bind to multple objects.
    // E.g. <span :style="[styleObject, styleObject2]">...</span>
    styleObject: {
      color: "tomato",
      fontSize: "3rem",
    },
    styleObject2: {
      margin: "0 auto",
      backgroundColor: "#333",
    },
    // END Other example shown in video;
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

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
      },
      {
        variantId: 2235,
        variantColor: "Blue",
      },
    ],

    sizes: ["S", "M", "L"],
  },
})

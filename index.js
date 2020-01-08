Vue.component('home', {
    data: function () {
      return {
        "actions": {
            compare: []
        },
        "products": [{
            "id": "1",
            "name": "Cherry",
            "image": "images/Cherry.png",
            "price": "$1.99",
            "colors": ["red", "green", "blue"],
            "condition": "Fresh",
            "description": "Two Cherries"
          },
          {
            "id": "2",
            "name": "Orange",
            "image": "images/Orange.png",
            "price": "$2.99",
            "colors": ["green", "blue"],
            "condition": "Frozen",
            "description": "Giant Orange"
          },
          {
            "id": "3",
            "name": "Nuts",
            "image": "images/Nuts.png",
            "price": "$1.00",
            "colors": ["red"],
            "condition": "Frozen",
            "description": "Mixed Nuts"
          },
          {
            "id": "4",
            "name": "Strawberry",
            "image": "images/Strawberry.png",
            "price": "$1.49",
            "colors": ["blue"],
            "condition": "Fresh",
            "description": "Just Strawberry"
          }
        ]
      }
    },
    template: `
        <div class="app">
            <div class="container mt-4">
                <div class="home mt-5">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="mb-3">Compare Products</h2>
                        </div>
                    </div>
                    <ProductList :products="products" :compare="actions.compare" />
                    <!-- <Compare products=":compareProducts}"/> -->
                </div>
            </div>
        </div>
        `
})

Vue.component('ProductList', {
    props: {
        products: Array
    },
    template: `
    <div class="row mt-3">
        <div v-for="product in products">
            <Product :product="product" />
        </div>
    </div>  `
})

Vue.component('Compare', {
    props: {
        products: Array
    },
    template: `
        <div class="row compare">
            <div class="col-12 mt-5 text-center">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th />
                        <v-for="product in products">
                            <th>
                                {{product.name}}
                            </th>
                        </v-for>
                    </tr>
                </thead>
                <tbody>
                <tr class="price">
                    <th scope="row">Price</th>
                    <v-for="product in products">
                    <td class="text-center">{{product.price}}</td>
                    </v-for>
                </tr>
                <tr class="colors">
                    <th scope="row">Colors</th>
                    <v-for="product in products">
                        <td>
                        <v-for="color in product.colors">
                            <span :class="'bg-' + color" />
                        </v-for>
                        </td>
                    </v-for>
                </tr>
                <tr class="condition">
                    <th scope="row">Condition</th>
                    <v-for="product in products">
                    <td :class="product.condition === 'Frozen' ? 'bg-red' : 'bg-green'">
                        {{product.condition}}
                    </td>
                    </v-for>
                </tr>
                </tbody>
            </table>
            </div>
        </div>  
    `
})


Vue.component('Product', {
    props: {
        product: Object
    },
    template: `
    <div :key="product.id" class="col-sm-6 col-md-3">
        <div :class="{product: true, compare: product.compare}" >
            <img :src="product.image" :alt="product.name" />
            <div class="image_overlay"/>
            
            <div class="view_details" v-on:click="compare">
              {{product.compare ? "Remove" : "Compare"}}
              
            </div>
            <div class="stats">
                <div class="stats-container">
                    <span class="product_price">{{product.price}}</span>
                    <span class="product_name">{{product.name}}</span>
                    <p>{{product.description}}</p>
                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
        compare: function(){
            this.$set(this.product, 'compare', !this.product.compare)
        }
    }
})

var app = new Vue({
    el: '#root',
    data: {
     
      message: 'Hello Vue!'
    }
})


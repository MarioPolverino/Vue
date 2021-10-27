<template>
  <div class="card m-1">
    <div class="card-body">
      <img class="card-img-top" :src="item.itemImage" :alt="itemName" />
      <h5 class="card-tile">{{ item.itemName }}</h5>
      <p class="card-text">{{ item.itemDescription }}</p>
      <p class="card-text">Cost: ${{ item.itemCost }}</p>
      <button class="btn btn-primary" @click="route">View Details</button>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Card",
  props: {
    item: {
      itemId: { required: true, type: Number },
      itemName: { required: true, type: String },
      itemDescription: { required: true, type: String },
      itemImage: { required: true, type: String },
      itemCost: { required: true, type: Number },
    },
  },

  // data() {
  //   return{
  //     item: null,
  //   };
  // },
  methods: {
    //   retrieveItem(itemId){
    //     fetch(`http://localhost:4825/api/ItemsWebAPI/${itemId}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.item = data;
    //     console.log(data);
    //   }).catch(e => {
    //     console.log(e);
    //   });
    //   }
    // },

    route() {
      router.push({ path: `/item/${this.item.itemId}` });
    },
  },

  // mounted(){
  //   this.retrieveItem(this.itemId);
  // }
};
</script>

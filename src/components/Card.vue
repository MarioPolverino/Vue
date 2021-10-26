<template>
  <div class="card m-1">
    <div class="card-body">
      <img class="card-img-top" :src="itemImage" />
      <h5 class="card-tile">{{ itemName }}</h5>
      <p class="card-text">{{ itemDescription }}</p>
      <p class="card-text">Cost: ${{ itemCost }}</p>
      <button type="button" class="btn btn-primary">View Details</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    itemId: { required: true, type: Number },
    itemName: { required: true, type: String },
    itemDescription: { required: true, type: String },
    itemImage: { required: true, type: String },
    itemCost: { required: true, type: Number },
  },

  // data() {
  //   return{
  //     item: null,
  //   };
  // },
  // methods: {
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

  // mounted(){
  //   this.retrieveItem(this.itemId);
  // }
};
</script>
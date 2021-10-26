<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-8">
        <div class="row mb-3">
          <div class="col-4">
            <input type="text" v-model="searchText" class="form-control" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-primary" @click="searchItems">
              Search
            </button>
          </div>
        </div>
        <div class="row justify-content-between">
          <div
            class="col-3"
            v-for="(item, index) in itemList"
            :key="item.itemId"
            @click="selectItem(item, index)"
          >
            <Card
              :itemName="item.itemName"
              :itemImage="item.itemImage"
              :itemDescription="item.itemDescription"
              :itemCost="item.itemCost"
              :itemId="item.itemId"
            />
          </div>
        </div>
      </div>
      <div class="col border border-info">
        <div class="row">
          <div class="col-12" v-if="currentItem">
            <Card
              :itemName="currentItem.itemName"
              :itemImage="currentItem.itemImage"
              :itemDescription="currentItem.itemDescription"
              :itemCost="currentItem.itemCost"
              :itemId="currentItem.itemId"
            />
          </div>
          <div class="col-12" v-else>
            <div class="alert alert-info">Select an Item to View</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  props: {},
  components: {
    Card,
  },
  data() {
    return {
      itemList: [],
      searchText: "",
      currentItem: null,
    };
  },
  methods: {
    getData(searchString) {
      fetch(`http://localhost:4825/api/ItemsWebAPI${searchString}`)
        .then((response) => response.json())
        .then((data) => {
          this.itemList = data;
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    searchItems() {
      this.getData(`?searchText=${this.searchText}`);
    },
    selectItem(item,index) {
      console.log(item);
      console.log(index);
      this.currentItem = item;
    }
  },
  
  mounted() {
    this.getData("");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

import {createRouter,createWebHashHistory} from 'vue-router'
import ItemList from "../components/ItemList.vue"
import Item from "../components/Item.vue"
import AddItem from "../components/AddItem.vue"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: ItemList },
  { path: '/item/:id', component: Item },
  { path: '/add', component: AddItem }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})



export default router
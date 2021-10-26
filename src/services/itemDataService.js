class ItemDataService {
  baseUrl = 'http://localhost:4825/api/ItemsWebAPI';

  getAll() {
      return fetch(this.baseUrl)
          .then(response => response.json())
  }

  get(id) {
      return fetch(`${this.baseUrl}/${id}`)
          .then(response => response.json());
  }

  create(data) {
      return fetch(`${this.baseUrl}`, {
          method: "POST",
          data: data
      }).then(response => response.json());
  }

  update(id, data) {
      return fetch(`${this.baseUrl}/${id}`, {
          method: "PUT",
          data: data
      });
  }

  delete(id) {
      return fetch(`${this.baseUrl}/${id}`, {
          method: "DELETE"
      });
  }


  findByTitle(title) {
      return fetch(`${this.baseUrl}?searchText=${title}`)
          .then(response => response.json())
  }
}

export default new ItemDataService();

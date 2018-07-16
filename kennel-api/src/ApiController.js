

export default {
  getAll: (table) => {
    return fetch(`http://localhost:5050/${table}`)
      .then(e => e.json())
  }
}
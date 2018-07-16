

export default {
  getAll: (table) => {
    return fetch(`http://localhost:5050/${table}`)
      .then(e => e.json())
  },
  searchAll: (table, text) => {
    return fetch(`http://localhost:5050/${table}?q=${text}`)
      .then(e => e.json())
  }
}
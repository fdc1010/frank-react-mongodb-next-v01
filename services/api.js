
module.exports = {
  getAllList: async () => {
    const res = await fetch("http://localhost:3000/api/lists", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return await res.json()
  },
  getFilterList: async ({params}) => {
    let query = Object.keys(params)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
             .join('&');

    let url = 'http://localhost:3000/api/lists?' + query;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return await res.json()
  },
}

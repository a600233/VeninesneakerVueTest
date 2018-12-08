import Api from '@/services/api'

export default {
  fetchSelling () {
    return Api().get('/selling')
  },
  postSelling (selling) {
    return Api().post('/selling', selling,
      { headers: {'Content-type': 'application/json'} })
  },
  upamountSelling (id) {
    return Api().put(`/selling/${id}/selling_amount`)
  },
  deleteSelling (id) {
    return Api().delete(`/selling/${id}`)
  },
  fetchSellings (id) {
    return Api().get(`/selling/${id}`)
  },
  putSelling (id, selling) {
    console.log('REQUESTING ' + selling._id + ' ' +
      JSON.stringify(selling, null, 5))
    return Api().put(`/selling/${id}`, selling,
      { headers: {'Content-type': 'application/json'} })
  }
}

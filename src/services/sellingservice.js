import Api from '@/services/api'

export default {
  fetchSelling () {
    return Api().get('/selling')
  },
  putSelling (id, selling) {
    console.log('REQUESTING ' + selling._id + ' ' +
      JSON.stringify(selling, null, 5))
    return Api().put(`/selling/${id}`, selling,
      { headers: {'Content-type': 'application/json'} })
  },
  postSelling (selling) {
    return Api().post('/selling', selling,
      { headers: {'Content-type': 'application/json'} })
  },
  deleteSelling (id) {
    return Api().delete(`/selling/${id}`)
  }
}

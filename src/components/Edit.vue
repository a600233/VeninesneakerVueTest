<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <selling-form :selling="selling" sellingBtnTitle="Update Selling Info"
                           @selling-is-created-updated="updateSelling"></selling-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import SellingService from '@/services/SellingService'
import SellingForm from '@/components/SellingForm'

export default {
  data () {
    return {
      selling: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Selling Info '
    }
  },
  components: {
    'selling-form': SellingForm
  },
  created () {
    this.getSelling()
  },
  methods: {
    getSelling: function () {
      SellingService.fetchSelling(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.selling = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Selling Info in Edit: ' + JSON.stringify(this.selling, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateSelling: function (selling) {
      console.log('Before PUT ' + JSON.stringify(selling, null, 5))
      SellingService.putSelling(this.$router.params, selling)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(selling, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>

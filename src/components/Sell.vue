<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <selling-form :selling="selling" sellingBtnTitle="Make Selling"
                         @selling-is-created-updated="submitSelling"></selling-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>

import SellingService from '@/services/SellingService'
import SellingForm from '@/components/SellingForm'

export default {
  name: 'Sell',
  data () {
    return {
      selling: { brand: '',
        series: 0,
        name: 0,
        size: 0,
        article_number: '',
        selling_price: 0,
        account_name: ''},
      messagetitle: ' Make Selling '
    }
  },
  components: {
    'selling-form': SellingForm
  },
  methods: {
    submitSelling: function (selling) {
      SellingService.postSelling(selling)
        .then(response => {
          console.log(response)
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
    width: 100%;
    margin: 0 auto;
    height: 100%;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>

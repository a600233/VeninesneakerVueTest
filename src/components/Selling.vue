<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="selling" :options="options">
        <a slot="upamount" slot-scope="props" class="fa fa-plus fa-2x" @click="upamountSelling(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteSelling(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editSelling(props.row._id)"></a>
      </v-client-table>
  </div>
  </div>
</template>

<script>
import SellingService from '@/services/sellingservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Selling',
  data () {
    return {
      messagetitle: 'Selling List',
      selling: [],
      props: ['_id'],
      message: {},
      errors: [],
      columns: ['_id', 'brand', 'series', 'name', 'size', 'article_number', 'selling_price', 'account_name', 'selling_amount', 'upamount', 'edit', 'remove'],
      options: {
        perPage: 9,
        filterable: ['brand', 'series', 'name', 'selling_amount'],
        sortable: ['selling_price'],
        headings: {
          _id: 'Selling Number',
          brand: 'Brand',
          series: 'Series',
          name: 'Name',
          size: 'Size',
          article_number: 'Style',
          selling_price: 'Price',
          account_name: 'Seller',
          selling_amount: 'Amount'
        }
      }
    }
  },
  created () {
    this.loadSelling()
  },
  methods: {
    loadSelling: function () {
      SellingService.fetchSelling()
        .then(response => {
          // JSON responses are automatically parsed.
          this.selling = response.data
          console.log(this.selling)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    upamountSelling: function (id) {
      SellingService.upamountSelling(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadSelling()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editSelling: function (id) {
      this.$router.params = id
      this.$router.push('edit')
    },
    deleteSelling: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true
        // showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result)
        if (result === true) {
          SellingService.deleteSelling(id)
            .then(response => {
              this.message = response.data
              console.log(this.message)
              this.loadSelling()
              this.$swal('Deleted', 'You successfully deleted this Donation ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log(' SWAL Else Result: ' + result.value)
          this.$swal('Cancelled', 'Your Donation still Counts!', 'info')
        }
      })
    }
  }
}

</script>

<style scoped>
  #app1 {
    width: 80%;
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

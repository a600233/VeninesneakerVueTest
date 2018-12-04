<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label">Select Brand</label>
      <select id="brand" name="brand" class="form-control" type="text" v-model="brand">
        <option value="null" selected disabled hidden>Choose Brands</option>
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="New Balance">New Balance</option>
        <option value="Converse">Converse</option>
        <option value="Vans">Vans</option>
        <option value="Puma">Puma</option>
        <option value="Li Ning">Li Ning</option>
        <option value="Under Armour">Under Armour</option>
        <option value="Reebok">Reebok</option>
      </select>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.series.$error }">
      <label class="form__label">Series</label>
      <input class="form__input" v-model.trim="$v.series.$model"/>
    </div>
    <div class="error" v-if="!$v.series.required">Series is Required</div>
    <div class="error" v-if="!$v.series.minLength">Series must have at least {{$v.series.$params.minLength.min}} letters.</div>
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Name</label>
      <input class="form__input" v-model.trim="$v.name.$model"/>
    </div>
    <div class="error" v-if="!$v.name.required">Name is Required</div>
    <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
    <div class="form-group">
      <label class="form-label">Select Size</label>
      <select id="size" name="size" class="form-control" type="text" v-model="size">
        <option value="null" selected disabled hidden>Choose Your Sizes</option>
        <option value="36">36</option>
        <option value="36.5">36.5</option>
        <option value="37.5">37.5</option>
        <option value="38">38</option>
        <option value="38.5">38.5</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="40.5">40.5</option>
        <option value="41">41</option>
        <option value="41.5">41.5</option>
        <option value="42">42</option>
        <option value="42.5">42.5</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="44.5">44.5</option>
        <option value="45">45</option>
        <option value="45.5">45.5</option>
        <option value="46">46</option>
        <option value="47">47</option>
      </select>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.article_number.$error }">
      <label class="form__label">Article Number</label>
      <input class="form__input" v-model.trim="$v.article_number.$model"/>
    </div>
    <div class="error" v-if="!$v.article_number.required">Art.no is Required!</div>
    <div class="error" v-if="!$v.article_number.minLength">Art.no must have at least {{$v.article_number.$params.minLength.min}} letters.</div>
    <div class="form-group" :class="{ 'form-group--error': $v.selling_price.$error }">
      <label class="form-control-label" name="selling_price">Price</label>
      <input class="form__input" type="number" v-model.trim="selling_price"/>
    </div>
    <div class="error" v-if="!$v.selling_price.between">Please Input Right Price</div>
    <div class="form-group" :class="{ 'form-group--error': $v.account_name.$error }">
      <label class="form__label">Seller's Name</label>
      <input class="form__input" v-model.trim="$v.account_name.$model"/>
    </div>
    <div class="error" v-if="!$v.account_name.required">Name is Required!</div>
    <div class="error" v-if="!$v.account_name.minLength">Name must have at least {{$v.account_name.$params.minLength.min}} letters.</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Make Selling</button>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Selling is on the page!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Wait Seconds...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import SellingService from '@/services/SellingService'
import { required, minLength, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)
export default {
  name: 'Sell',
  data () {
    return {
      messagetitle: ' Sell ',
      brand: '',
      series: 0,
      name: 0,
      size: 0,
      article_number: '',
      selling_price: 0,
      account_name: '',
      selling: {},
      submitStatus: null
    }
  },
  validations: {
    series: {
      required,
      minLength: minLength(1)
    },
    name: {
      required,
      minLength: minLength(1)
    },
    article_number: {
      required,
      minLength: minLength(5)
    },
    selling_price: {
      required,
      between: between(1, 1000000)
    },
    account_name: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'FINISHED'
          var selling = {
            brand: this.brand,
            series: this.series,
            name: this.name,
            size: this.size,
            article_number: this.article_number,
            selling_price: this.selling_price,
            account_name: this.account_name
          }
          this.selling = selling
          console.log('Submitting in SellingForm : ' + JSON.stringify(this.selling, null, 5))
          this.submitSelling(this.selling)
        }, 500)
      }
    },
    submitSelling: function (selling) {
      console.log('submitSelling!')
      console.log('Submitting in submitSelling : ' + selling)
      SellingService.postSelling(selling)
        .then(response => {
          // JSON responses are automatically parsed.
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
style scoped>
.vue-title {
margin-top: 30px;
text-align: center;
font-size: 45pt;
margin-bottom: 10px;
}
#app1 {
width: 95%;
margin: 0 auto;
}
.required-field > label::after {
content: '*';
color: red;
margin-left: 0.25rem;
}
.donate-form .form-control-label.text-left{
text-align: left;
}

label {
display: inline-block;
width: 540px;
text-align: left;
font-size: x-large;
}
.typo__p {
width: 540px;
font-size: x-large;
}
.btn1 {
width: 300px;
font-size: x-large;
}
p {
margin-top: 20px;
}

input {
border: 1px solid silver;
border-radius: 4px;
background: white;
padding: 5px 10px;
width: 540px;
}

.dirty {
border-color: #5A5;
background: #EFE;
}

.dirty:focus {
outline-color: #8E8;
}

.error {
border-color: red;
background: #157ffb;
color: whitesmoke;
}

.error:focus {
outline-color: #ffa519;
}
<style scoped>

</style>

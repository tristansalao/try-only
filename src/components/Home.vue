<div id="home">
    <v-app id="inspire">
    <v-card dark>
      <v-card-title>
        
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table 
        :headers="headers"
        :items="items"
        :search="search">
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.id }}</td>
          <td class="text-xs-right">{{ props.item.title }}</td>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
  </v-app>
</div>


<script src="src/components/script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>

<script>
export default {
  el:'#home',
  created: function(){
      this.getData()
  },
  methods: {
      getData: function(){
                        var vm = this;
                        $.ajax({
                            url: 'https://jsonplaceholder.typicode.com/posts',
                            method: 'GET'
                        }).then(function (data) {
                            vm.items = data;     
                        });                             
      }
  },
  data () {
    return {
    	headers: [
      search: '',
      headers: [
        {
          text: 'No.',
          align: 'left',
          sortable: false,
          value: 'no'
        },
        { text: 'HO ID', value: 'hoid', sortable: false },
        { text: 'Commission', value: 'commission' },
        { text: 'Deposit', value: 'deposit' },
        { text: 'Deposit(Transfer)', value: 'deptransfer' },
        { text: 'Withdraw', value: 'withdraw' },
        { text: 'Withdraw(Transfer)', value: 'withtransfer' },
        { text: 'Betting Amount', value: 'betamount' },
        { text: 'Rake', value: 'rake' },
        { text: 'User Holding Money', value: 'userholding' },
        { text: 'Operating Head Office Profit', value: 'offprofit' },
        { text: 'Head Office Money', value: 'offmoney' },
        { text: 'Money of Low Rank', value: 'moneylowrank' },
        { text: 'Low Rank', value: 'lowrank' },
      ],
      items: []
    }
  }
}
</script>
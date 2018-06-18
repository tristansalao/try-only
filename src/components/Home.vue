<template>
	<v-data-table dark
      :headers="headers"
      :items="data"
      hide-actions
      class="elevation-1: pt-2"

    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.no }}</td>
        <td class="text-xs-left">{{ props.item.hoid }}</td>
        <td class="text-xs-left">{{ props.item.commission }}</td>
        <td class="text-xs-left">{{ props.item.deposit }}</td>
        <td class="text-xs-left">{{ props.item.deptransfer }}</td>
        <td class="text-xs-left">{{ props.item.withdraw }}</td>
        <td class="text-xs-left">{{ props.item.withtransfer }}</td>
        <td class="text-xs-left">{{ props.item.betamount }}</td>
        <td class="text-xs-left">{{ props.item.rake }}</td>
        <td class="text-xs-left">{{ props.item.userholding }}</td>
        <td class="text-xs-left">{{ props.item.offprofit }}</td>
        <td class="text-xs-left">{{ props.item.offmoney }}</td>
        <td class="text-xs-left">{{ props.item.moneylowrank }}</td>
        <td class="text-xs-left">{{ props.item.lowrank }}</td>
      </template>
    </v-data-table>
</template>

<script>
export default {
  data () {
    return {
    	headers: [
        {
          text: 'No.',
          align: 'left',
          sortable: false,
          value: 'no'
        },
        { text: 'HO ID', value: 'hoid' },
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
      data: [
        {
          value: false,
          no: 'Frozen Yogurt',
          hoid: 159,
          commission: 6.0,
          deposit: 24,
          deptransfer: 4.0,
          withdraw: '1%',
          withtransfer: '1%',
          betamount: '1%',
          rake: '1%',
          userholding: '1%',
          offprofit: '1%',
          offmoney: '1%',
          moneylowrank: '1%',
          lowrank: '1%',
        },
        {
          value: false,
          no: 'Frozen Yogurt',
          hoid: 159,
          commission: 6.0,
          deposit: 24,
          deptransfer: 4.0,
          withdraw: '1%',
          withtransfer: '1%',
          betamount: '1%',
          rake: '1%',
          userholding: '1%',
          offprofit: '1%',
          offmoney: '1%',
          moneylowrank: '1%',
          lowrank: '1%',
        }
      ]    	
    }
  }
}
</script>
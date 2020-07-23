<script>
import { Bar } from 'vue-chartjs';
import ChartHelper from '../../helpers/chart.helper';

export default {
  extends: Bar,
  props: {
    chartData: {
      type: Array,
      required: false
    },
    chartLabels: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.renderChart({
      labels: this.chartLabels,
      datasets: [
          {
            label: 'Bars Chart',
            borderColor: '#03A9F4',
            pointBackgroundColor: 'white',
            borderWidth: 2,
            pointBorderColor: '#03A9F4',
            backgroundColor: '#03A9F4',
            data: this.chartData
          }
        ]
      }, ChartHelper.options());
  }
}
</script>
<script>
import { Pie } from 'vue-chartjs';
import ChartHelper from '../../helpers/chart.helper';

export default {
  extends: Pie,
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
            label: 'Percent',
            data: this.chartData
          },
        ]
      }, ChartHelper.options());
  }
}
</script>
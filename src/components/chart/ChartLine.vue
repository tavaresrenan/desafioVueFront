<script>
import { Line } from 'vue-chartjs';
import ChartHelper from '../../helpers/chart.helper';

export default {
  extends: Line,
  props: {
    chartDataToday: {
      type: Array,
      required: false
    },
    chartDataYesterday: {
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
            label: 'Today',
            borderColor: '#303F9F',
            pointBackgroundColor: 'white',
            borderWidth: 2,
            pointBorderColor: '#303F9F',
            backgroundColor: 'transparent',
            data: this.chartDataToday
          },
          {
            label: 'Yesterday',
            borderColor: '#BF3FFF',
            pointBackgroundColor: 'white',
            borderWidth: 2,
            pointBorderColor: '#BF3FFF',
            backgroundColor: 'transparent',
            data: this.chartDataYesterday
          },
        ]
      }, ChartHelper.options());
  }
}
</script>
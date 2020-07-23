<template>
    <div class="chart-container">
        <bar
            v-if="(showChart=='bar')"
            :chartLabels="labels"
            :chartData="chartData"/>
        <pie
             v-if="(showChart=='pie')"
            :chartLabels="labels"
            :chartData="chartData"/>
    </div>
</template>
<script>
import Bar from './Bar';
import Pie from './Pie';
import ChartService from '../../services/chart.service';

export default {
    components: {
      Bar,
      Pie
    },
    props: {
        chartType: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            labels: [],
            chartData: [],
            showChart: null,
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        async init(type) {
            let response = null; 
            switch (this.chartType) {
                case 'bar':
                    response = await ChartService.requestBar();
                    break;
                case 'pie':
                    response = await ChartService.requestPie();
                    break;
                case 'line':
                    response = await ChartService.requestLine();
                    break;
                default:
                    break;
            }
            this.showChart = this.chartType;
            this.labels = response.labels;
            this.chartData = response.values;
        }
    }
}
</script>
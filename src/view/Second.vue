<template>
    <div class="chart-container-main">
       <chart-line
            v-if="loading"
            :chartDataToday="dataToday"
            :chartDataYesterday="dataYesterday"
            :chartLabels="labels"/>
    </div>
</template>

<script>
require('@/assets/styles.css');
import ChartLine from '../components/chart/ChartLine';
import ChartService from '../services/chart.service';

export default {
    components: {
      ChartLine
    },
    data() {
        return {
            labels: [],
            dataToday: [],
            dataYesterday: [],
            loading: false
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        async loadData() {
            this.loading =  false;
            const response = await ChartService.requestLine();
            this.labels = response.labels;
            this.dataToday = response.today;
            this.dataYesterday = response.yesterday;
            this.loading =  true;
        }
    }
}
</script>
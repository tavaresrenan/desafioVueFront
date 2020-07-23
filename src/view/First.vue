<template>
    <div class="chart-container">
       <div class="chartBox" id="left">
           <Chart chartType='bar' />
       </div>
       <div class="chartBox" id="right">
           <div ref="container"></div>
       </div>
    </div>
   
</template>

<script>
require('@/assets/styles.css');

import Vue from 'vue';
import Chart from '../components/chart/Chart';

export default {
    components: { Chart },
    mounted() {
        var ComponentClass = Vue.extend(Chart);
        var instance = new ComponentClass({
            propsData: { chartType: 'pie' }
        });
        instance.$mount();
        this.$refs.container.appendChild(instance.$el);
    }
}
</script>

<style scoped>
    .chart-container{
        display: flex;
        justify-content: center;
        padding: 5%; 
        width: 80%; 
    }
    .chart-container > .chartBox {
        background: #ffffff;
        padding: 1.2em 2em;
        text-align: center;
        font-size: 2em;
        font-weight: bold;
        border-radius: 4px;
        -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
    }
   #left, #right {
        padding: 2%;   
    }
</style>
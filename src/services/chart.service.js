import ApiService from './api.service';

const ChartService = {
    async getData(url) {
        try{
            const response = await ApiService.get(url);
            const { data } = response;
            return data;
        }catch(e) {
            console.log(e);
        }
    },
    async requestBar() {
        const data = await this.getData(process.env.VUE_APP_CHART_BAR);
        return {
            labels : data.map(i => i.label),
            values : data.map(i => i.value)
        }
    },
    async requestPie() {
        const data = await this.getData(process.env.VUE_APP_CHART_PIE);
        return {
            labels : data.map(i => i.label),
            values : data.map(i => i.value)
        }
    },
    async requestLine() {
        const data = await this.getData(process.env.VUE_APP_CHART_LINE);
        return {
            labels : data.today.map(i => i.label),
            today : data.today.map(i => i.value),
            yesterday: data.yesterday.map(i => i.value),
        }
    }
}

export default ChartService;
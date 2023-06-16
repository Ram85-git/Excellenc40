<!-- <template>
    <div>
        <h1>{{ title }}</h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="option in tableData" :key="option._id">
                    <td>{{ option.title }}</td>
                    <td>
                        <div v-for="(item, index) in option.options" :key="index">
                            {{ item.option }}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Po-ll',
    data() {
        return {
            title: '',
            options: [],
            tableData: []
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('http://65.108.77.50:3031/list_polls');
                console.log('42 called ', response, response.data);
                this.tableData = response.data.data
                // this.title = response.data.title;
                // this.options = response.data.options;
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script> -->
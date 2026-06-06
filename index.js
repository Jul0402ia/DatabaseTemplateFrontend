const { createApp } = Vue;

createApp({

    data() {

        return {

            items: [],

            baseUrl:
                "https://localhost:7159/api/items"

        };
    },

    methods: {

        async getAllItems() {

            try {

                const response =
                    await axios.get(this.baseUrl);

                this.items =
                    response.data;

            }

            catch (error) {

                console.log(error);

            }
        }
    }

}).mount("#app");
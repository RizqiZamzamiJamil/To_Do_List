    const app = Vue.createApp({
        data() {
            return {
                baruu: '',
                editId: null,
                dieditt: null,
                deleteId: null,
                activities: [

                ],
            };
        },
        methods: {
            tambahh() {
                if (this.baruu) {
                this.activities.push({
                    name: this.baruu,
                    complete: false,
                    id: this.activities.length + 1
                });
                this.baruu = '';
                }
            },
            editt(id) {
                this.editId = id;
                this.dieditt = this.activities.find(activity => activity.id === id);
            },
            simpann() {
                const activity = this.activities.find(activity => activity.id === this.editId);
                activity.name = this.dieditt.name;
                this.editId = null;
                this.dieditt = null;
            },
            deletee(id) {
                this.deleteId = id;
            },
            hapusAktivitas() {
                this.activities = this.activities.filter(activity => activity.id !== this.deleteId);
                this.deleteId = null;
            }
        }
    }).mount("#app");
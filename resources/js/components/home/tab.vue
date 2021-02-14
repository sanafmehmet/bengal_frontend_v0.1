<template>
    <div>
        <div class="container">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" @click.prevent="polymer" data-toggle="tab" href="#home"
                        >{{ form.polymer }}</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="romania" data-toggle="tab" href="#menu1"
                        >{{ form.romania }}</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="cement" data-toggle="tab" href="#menu2"
                        >{{ form.cement }}</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="rtv" data-toggle="tab" href="#menu2"
                        >{{ form.rtv }}</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="garment" data-toggle="tab" href="#menu2"
                        >{{ form.garments }}</a
                    >
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div id="home" class="container tab-pane active">
                    <br />
                    <h3>{{ tabs.title }}</h3>
                    <h6>{{ tabs.sort_title }}</h6>
                    <div class="row">
                        <div class="col-sm">
                         <img :src="'http://192.168.1.6:8002/' + tabs.image" alt="image.png"  />
                        </div>
                        <div class="col-sm">
                            <img :src="'http://192.168.1.6:8002/' + tabs.sub_image" alt="image.png" style="width:60px; height:50px; margin-bottom:10px" />
                            <h6 style="margin-bottom:10px">{{ tabs.sub_title }}</h6>
                            <p>{{ tabs.desc }}</p>
                        </div>
                        <div class="col-sm">
                         <img :src="'http://192.168.1.6:8002/' + tabs.sub_image_two" alt="image.png" style="width:60px; height:50px; margin-bottom:10px" />
                            <h6 style="margin-bottom:10px">{{ tabs.sub_title_two }}</h6>
                            <p>{{ tabs.desc_two }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.data.tab_name = 'english'
        axios.get('http://192.168.1.6:8002/api/tab', {params: this.data})
            .then(({data}) => {
                this.tabs = data
                this.form.polymer = 'Polymer'
                this.form.romania = 'Romania'
                this.form.cement = 'Cement'
                this.form.rtv = 'RTV'
                this.form.garments = 'Garments'
                console.log(this.tabs)
            })

       this.$root.$on('english', (e) => {
           this.data.tab_name = e
           axios.get('http://192.168.1.6:8002/api/tab', {params: this.data})
                .then(({data}) => {
                    this.tabs = data
                    this.form.polymer = 'Polymer'
                    this.form.romania = 'Romania'
                    this.form.cement = 'Cement'
                    this.form.rtv = 'RTV'
                    this.form.garments = 'Garments'
                    console.log(this.tabs)
                })
        })

        this.$root.$on('french', (e) => {
           this.data.tab_name = e
           axios.get('http://192.168.1.6:8002/api/tab', {params: this.data})
                .then(({data}) => {
                    this.tabs = data
                    this.form.polymer = 'Polymère'
                    this.form.romania = 'Roumanie'
                    this.form.cement = 'Ciment'
                    this.form.rtv = 'RTV'
                    this.form.garments = 'Habits'
                    console.log(this.tabs)
                })
        })

        this.$root.$on('arabic', (e) => {
           this.data.tab_name = e
           axios.get('http://192.168.1.6:8002/api/tab', {params: this.data})
                .then(({data}) => {
                    this.tabs = data
                    this.form.polymer = 'بوليمر'
                    this.form.romania = 'رومانيا'
                    this.form.cement = 'يبني'
                    this.form.rtv = 'RTV'
                    this.form.garments = 'ملابس'
                    console.log(this.tabs)
                })
        })
    },
    data() {
        return {
            tabs: [],
            data: {
                tab: '',
                tab_name: ''
            },
            form: {
                polymer: '',
                romania: '',
                cement: '',
                rtv: '',
                garments: ''
            }

        }
    },
    methods: {
       romania(){
           this.data.tab = 'Romania'
           axios.get('http://192.168.1.6:8002/api/tab', {params: this.data})
                .then(({data}) => {
                    this.tabs = data
                    console.log(this.tabs)
                })
       },

       polymer(){
           this.data.tab = 'Polymer'
           axios.get('http://192.168.1.6:8002/api/tab', {params: this.data})
                .then(({data}) => {
                    this.tabs = data
                    console.log(this.tabs)
                })
       },
       cement(){
           this.data.tab = 'Cement'
           axios.get('http://192.168.1.6:8002/api/tab', {params: this.data})
                .then(({data}) => {
                    this.tabs = data
                    console.log(this.tabs)
                })
       },
       rtv(){
           this.data.tab = 'RTV'
           axios.get('http://192.168.1.6:8002/api/tab', {params: this.data})
                .then(({data}) => {
                    this.tabs = data
                    console.log(this.tabs)
                })
       },
       garment(){
           this.data.tab = 'Garments'
           axios.get('http://192.168.1.6:8002/api/tab', {params: this.data})
                .then(({data}) => {
                    this.tabs = data
                    console.log(this.tabs)
                })
       }
    }
}
</script>

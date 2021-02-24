<template>
    <div>
           
        <section class="section-padding bg-light-white">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-md-6 mb-md-80">
                      <div class="section-header left-heading pb-0">
                          <div class="section-heading">
                              <h6 class="text-orng mb-xl-10 sub-heading"><span>{{ profit.heading }}</span></h6>
                              <h3 class="text-blue fw-700 title">{{ profit.title }}<span class="text-orng">.</span></h3>
                              <p class="desc">{{ profit.desc }}</p>
                          </div>
                      </div>
                      <ul class="custom profit-list" v-for="d in details" :key="d.id">
                          <li><i class="fas fa-check"></i><span class="font-weight:bold">{{ d.desc_item }}</span></li>
                      </ul>
                      <a href="project-detail.html" class="theme-btn btn-orange">
                          {{ profit.case_study }} <i class="fa fa-plus"></i>
                      </a>
                  </div>
                   <!-- <div class="col-lg-6 col-md-6 col-xs-12">
                      <div class="profit-chart-box">
                          <a href="index.html" class="chart-logo">
                              <img src="images/bengal-cat-logo.png" class="image-fit" alt="">
                          </a>
                          <a href="#" class="profit-icon icon-ps-1" v-for="img in images" :key="img.id">
                              <span class="icon">
                                <img :src="'http://192.168.1.6:8002/' + img.image">
                              </span>
                              <span class="icon-text">dfdf</span>
                          </a>
                      </div>
                  </div> -->
                  <div class="col-lg-6 col-md-6 col-xs-12">
                      <div class="profit-chart-box">
                          <a href="index.html" class="chart-logo">
                              <img src="images/bengal-cat-logo.png" class="image-fit" alt="">
                          </a>
                          <a href="#" class="profit-icon icon-ps-1">
                              <span class="icon">
                                <img :src="'http://192.168.1.6:8002/' + image.image_1">
                              </span>
                              <span class="icon-text">{{image.title_1}}</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-2">
                              <span class="icon">
                                  <img :src="'http://192.168.1.6:8002/' + image.image_2">
                              </span>
                              <span class="icon-text">{{image.title_2}}</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-3">
                              <span class="icon">
                                <img :src="'http://192.168.1.6:8002/' + image.image_3">
                              </span>
                              <span class="icon-text">{{image.title_3}}</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-4">
                              <span class="icon">
                                <img :src="'http://192.168.1.6:8002/' + image.image_4">
                              </span>
                              <span class="icon-text">{{image.title_4}}</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-5">
                              <span class="icon">
                                <img :src="'http://192.168.1.6:8002/' + image.image_5">
                              </span>
                              <span class="icon-text">{{image.title_5}}</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-6">
                              <span class="icon">
                                <img :src="'http://192.168.1.6:8002/' + image.image_6">
                              </span>
                              <span class="icon-text">{{image.title_6}}</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-7">
                              <span class="icon">
                                <img :src="'http://192.168.1.6:8002/' + image.image_7">
                              </span>
                              <span class="icon-text">{{image.title_7}}</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-8">
                              <span class="icon">
                                <img :src="'http://192.168.1.6:8002/' + image.image_8">
                              </span>
                              <span class="icon-text">{{image.title_8}}</span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    </div>
</template>

<script>
export default {
    props: ['lang'],
    created() {
        this.getData()

        this.$root.$on('english', (e) => {
            this.form.lang = e
            axios.get('http://192.168.1.6:8002/api/getProfit', {params: this.form})
                .then(({data}) => {
                    this.profit = data.profit
                    this.details = data.details
                    this.image = data.image
                })
        })

        this.$root.$on('arabic', (e) => {
            this.form.lang = e
            axios.get('http://192.168.1.6:8002/api/getProfit', {params: this.form})
                .then(({data}) => {
                    this.profit = data.profit
                    this.details = data.details
                    this.image = data.image
                })
        })
    },
    data() {
        return {
            profit: {},
            details: [],
            image: {},
            form: {
                lang: ''
            }
        }
    },
    methods: {
        getData(){
        this.form.lang = 'English'
        axios.get('http://192.168.1.6:8002/api/getProfit', {params: this.form})
          .then(({data}) => {
            this.profit = data.profit
            this.details = data.details
            this.image = data.image
            //console.log(this.profit)
            //console.log(this.details)
            //console.log(this.images)
          })
        }
    }
}
</script>

<style scoped>
    /** Business Catagory Area  Start **/
.section-header.left-heading {
	text-align: left;
	margin-left: 0;
}
.section-header {
	max-width: 550px;
	margin: 0 auto;
	padding-bottom: 30px;
	position: relative;
	z-index: 10;
	text-align: center;
}
.section-header .section-heading .sub-heading {
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
}
.text-orng {
	color: #004ea0;
}
.text-blue {
    color: #00954c;
}
.section-header .section-heading .title {
	font-size: 50px;
	text-align: left;
}
.section-header .section-heading .desc {
	font-size: 16px;
	max-width: 450px;
}
ul.profit-list {
	margin-bottom: 20px;
}
ul.profit-list li {
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
}
.custom.profit-list li i {
    margin-right: 10px;
}
.theme-btn.btn-orange i {
	margin-left: 10px;
}
.theme-btn.btn-orange {
	color: #fff;
	background-color: #004ea0;
}
.theme-btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 15px 40px;
	color: #fff;
	transition: 0.5s all;
	white-space: nowrap;
	font-size: 16px;
	font-weight: 500;
}
.section-header .section-heading {
	position: relative;
}
.bg-light-white {
	background-color: #f3f5f7;
}
.section-padding {
	padding: 120px 0;
}
ul.profit-list{
    margin-bottom: 20px;
}
ul.profit-list li{
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}
.profit-chart-box{
    background-color: transparent;
    height: 100%;
    width: calc(100% - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 80px;
}
.profit-chart-box:before{
    content: '';
    position: absolute;
    top: 50px;
    left: 50px;
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    background: #fff;
}
.profit-chart-box .chart-logo{
    width: 100px;
    height: 100px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 20px;
}
.profit-chart-box .chart-logo:before{
    content: '';
    border: 4px solid #f3f5f7;
    position: absolute;
    top: -20px;
    left: -20px;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
}
.profit-chart-box .profit-icon{
    height: 100px;
    width: 100px;
    justify-content: center;
    border: 4px solid #f3f5f7;
    text-align: center;
    padding: 18px 0px;
    background: #fff;
    position: absolute;
}
.profit-chart-box .profit-icon:hover{
    color: #14212b;
    border-color: #004ea0;
}
.profit-chart-box .profit-icon .icon{
    display: block;
    flex-basis: 100%;
    text-align: center;
    font-size: 32px;
    line-height: 1;
    color: #004ea0;
}
.profit-chart-box .profit-icon .icon-text{
    flex-basis: 100%;
    text-align: center;
    font-size: 14px;
	font-weight: 600;
	color: #1b1b1b;
}
.profit-chart-box .profit-icon.icon-ps-1{
    top: 0;
    left: 0;
}
.profit-chart-box .profit-icon.icon-ps-2{
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}
.profit-chart-box .profit-icon.icon-ps-3{
    top: 0;
    right: 0;
}
.profit-chart-box .profit-icon.icon-ps-4{
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
.profit-chart-box .profit-icon.icon-ps-5{
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
.profit-chart-box .profit-icon.icon-ps-6{
    bottom: 0;
    left: 0;
}
.profit-chart-box .profit-icon.icon-ps-7{
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
.profit-chart-box .profit-icon.icon-ps-8{
    bottom: 0;
    right: 0;
}
/* Extra small devices (portrait phones, less than 576px)*/
/* No media query since this is the default in Bootstrap*/

@media (min-width: 576px) { 
	
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 575px) and (min-width: 300px)  {
	.profit-chart-box {
		margin-top:70px;
		margin-left: 0;
		height: 380px;
	}
	
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 767px) and (min-width: 576px)  {
	.profit-chart-box {
		margin-top:70px;
		margin-left: 0;
		height: 380px;
	}
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 991px) and (min-width: 768px)  {
	.section-header .section-heading .title {
		font-size: 24px;
	}
	.profit-chart-box {
		width: calc(100% - 40px);
		
	}
	
}
/* Large devices (desktops, 992px and up)*/
@media only screen and (max-width: 1199px) and (min-width: 992px)  {
	
	
}
/* Extra large devices (large desktops, 1200px and up)*/

@media only screen and (max-width: 1600px) and (min-width: 1200px)  {
	
}
/** Business Catagory Area END **/
</style>
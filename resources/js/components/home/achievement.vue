<template>
 <div>
      <section class="achievements-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="site-title ">
                <h4 class="sub-title">
                  Lorem Lorem
                </h4>
                <h2>Achievement Area</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
            <div class="row">
              <div class="no-gutters col-md-4 col-lg-4 col" v-for="a in achievements.data" :key="a.id">
                <div class="achievements-bengal">
                    <div class="img">
                      <img :src="'http://192.168.1.6:8002/' + a.image" >
                    </div>
                    <div class="achi-details">
                      <h3>{{a.title}}</h3>
                      <p>{{ a.desc }} </p>
                      <a href="#">{{a.rm}}</a>
                    </div>
                </div>
              </div>
             
            </div>
			<div class="d-flex justify-content-end" style="margin-top:20px;">
			<button style="color:white; font-size:16px; margin-right:10px; padding-right: 10px; padding-left: 10px;" @click.prevent="prevAcvnt"  class="btn btn-sm btn-info">Prev</button>
	  		<button style="color:white; font-size:16px" @click.prevent="nextAcvnt" class="btn btn-sm btn-info">Next</button>
		</div>
        </div>
      </section>  
        

 </div>

</template>


<script>
export default {
    props: ['lang'],
    created() {
      this.getAcvmnts()
    },
    data() {
      return {
        page: 1,
        achievements: [],
        form: {
          lang: this.lang
        }
      }
    },
    methods: {
      getAcvmnts(){
        axios.post('http://192.168.1.6:8002/api/getAchievements?page=' + this.page, this.form)
          .then(({data}) => {
            this.achievements = data
            //console.log(this.achievements)
          })
      },
      nextAcvnt(){
        this.page = this.page + 1
        axios.post('http://192.168.1.6:8002/api/getAchievements?page=' + this.page, this.form)
          .then(({data}) => {
            this.achievements = data
            //console.log(this.achievements)
          })
      },
	   prevAcvnt(){
        this.page = this.page - 1
        axios.post('http://192.168.1.6:8002/api/getAchievements?page=' + this.page, this.form)
          .then(({data}) => {
            this.achievements = data
            //console.log(this.achievements)
          })
      }
    }
}
</script>

<style scoped>
/** Achievements Area  Start **/
.no-gutters {
	padding: 0;
}
.site-title {
	text-align: center;
	margin-bottom: 60px;
}
.site-title h4 {
	font-size: 18px;
	position: relative;
	color: #0070ba;
	display:inline-block;
}
.site-title h2 {
	font-size: 48px;
	color: #222;	
}
.achi-details {
	padding-left: 20px;
}
.achi-details a {
	color: #0e75bc;
	font-weight: bold;
	font-size: 16px;
	display: block;
}

.site-title h4::before {
	position: absolute;
	width: 63px;
	height: 2px;
	background: #0070ba;
	top: 10px;
	left: 110%;
	content: "";
}
.achievements-area {
	background: #fbfbfb;
	padding: 20px 0;
}

.achi-details h3 {
	color: #222;
	margin-top: 30px;
	margin-bottom: 30px;
}
.achi-details p {
	color: #777;
}
@media (min-width: 576px) { 
	
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 575px) and (min-width: 300px)  {
	.site-title h2 {
		font-size: 36px;
	}
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 767px) and (min-width: 576px)  {
	
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 991px) and (min-width: 768px)  {
	
}
/* Large devices (desktops, 992px and up)*/
@media only screen and (max-width: 1199px) and (min-width: 992px)  {
	
	
}
/* Extra large devices (large desktops, 1200px and up)*/

@media only screen and (max-width: 1600px) and (min-width: 1200px)  {
	
}
/** Achievements Area END **/
</style>
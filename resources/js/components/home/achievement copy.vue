<template>
 <div>
     <div class="container-fluid">
		 <div class="row">
			 
    <!--Carousel Wrapper-->
    <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

      <!--Controls-->
      <!-- <div class="controls-top">
        <a class="btn-floating" href="#multi-item-example" data-slide="prev" @click.prevent="prevAcvnt"><i class="fa fa-chevron-left"></i></a>
        <a class="btn-floating" href="#multi-item-example" data-slide="next" @click.prevent="nextAcvnt"><i class="fa fa-chevron-right"></i></a>
      </div> -->
      <!--/.Controls-->

      <!--Indicators-->
      <!-- <ol class="carousel-indicators">
        <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
        <li data-target="#multi-item-example" data-slide-to="1"></li>
        <li data-target="#multi-item-example" data-slide-to="2"></li>
      </ol> -->
      <!--/.Indicators-->

      <!--Slides-->
      <div class="carousel-inner" role="listbox">

        <!--First slide-->
        <div class="carousel-item active">
			<div class="container-fluid">
				
          <div class="row">
			  <!-- <div class="d-flex">
				  <div class="card mb-2" v-for="a in achievements.data" :key="a.id">
                <img class="card-img-top" :src="'http://192.168.1.6:8002/' + a.image"
                  alt="Card image cap">
                <div class="card-body">
                  <h4 class="card-title">{{ a.title }}</h4>
                  <p class="card-text">{{ a.desc }}</p>
                  <a href="#">{{ a.rm }}</a>
                </div>
              </div>
			  </div> -->

			    <div class="no-gutters col-md-4 col-lg-4 col" v-for="a in achievements.data" :key="a.id">
                <div class="achievements-bengal">
                    <div class="img">
                      <img :src="'http://192.168.1.6:8002/' + a.image" >
                    </div>
                    <div class="achi-details">
                      <h3>{{ a.title }}</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                      <a href="#">{{ a.rm }}</a>
                    </div>
                </div>
              </div>
             

            <!-- <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  alt="Card image cap">
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div> -->

            <!-- <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  alt="Card image cap">
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div> -->
          </div>
			</div>

        </div>
        <!--/.First slide-->

        <!--Second slide-->
        <!-- <div class="carousel-item">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-2">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                  alt="Card image cap">
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                  alt="Card image cap">
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                  alt="Card image cap">
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>
          </div>

        </div> -->
        <!--/.Second slide-->

        <!--Third slide-->
        <!-- <div class="carousel-item">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-2">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                  alt="Card image cap">
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                  alt="Card image cap">
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                  alt="Card image cap">
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>
          </div>

        </div> -->
        <!--/.Third slide-->

      </div>
      <!--/.Slides-->
		<div class="d-flex justify-content-end" style="margin-top:20px;">
			<button style="color:white; font-size:16px" @click.prevent="prevAcvnt"  class="btn btn-sm btn-primary">Prev</button>
	  		<button style="color:white; font-size:16px" @click.prevent="nextAcvnt" class="btn btn-sm btn-primary">Next</button>
		</div>
	  

    </div>
    <!--/.Carousel Wrapper-->

		 </div>



  </div>
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
            console.log(this.achievements)
          })
      },
      nextAcvnt(){
        this.page = this.page + 1
        axios.post('http://192.168.1.6:8002/api/getAchievements?page=' + this.page, this.form)
          .then(({data}) => {
            this.achievements = data
            console.log(this.achievements)
          })
      },
	   prevAcvnt(){
        this.page = this.page - 1
        axios.post('http://192.168.1.6:8002/api/getAchievements?page=' + this.page, this.form)
          .then(({data}) => {
            this.achievements = data
            console.log(this.achievements)
          })
      }
    }
}
</script>

<style scoped>
.row{
  margin-top:10px;
}

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
	padding: 100px 0;
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
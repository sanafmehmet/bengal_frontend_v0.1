<template>
    <div>
           
        <section class="csr_area">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-12 col csrleft">
                <div class="title_des">
                  <h3>{{ commit.title }}</h3>
                  <p>{{ commit.desc }}</p>
                </div>
              </div>
              <div class="col-md-8 col-sm-12 col p-0">
                <div class="csrtop">
                  <div class="csrall-area d-flex flex-column flex-lg-row justify-content-lg-center panel">
                    <div v-for="d in commitDtls" :key="d.id" class="csr_area d-flex">
                      <div class="csr_icon">
                        <i :class="d.icon"></i>
                      </div>
                      <div class="csr_description">
                        <h3>{{ d.title }}</h3>
                        <p>{{ d.desc }}</p>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="csrall-area d-flex flex-column flex-lg-row justify-content-lg-center panel">
                    <div class="csr_area d-flex">
                      <div class="csr_icon">
                        <i class="fas fa-book-open"></i>
                      </div>
                      <div class="csr_description">
                        <h3>Eduction</h3>
                        <p>Every year generosity thousands children across Australia recover form the trauma of abuse neglect</p>
                      </div>
                    </div>
                    <div class="csr_area d-flex">
                      <div class="csr_icon">
                        <i class="fas fa-book-open"></i>
                      </div>
                      <div class="csr_description">
                        <h3>Eduction</h3>
                        <p>Every year generosity thousands children across Australia recover form the trauma of abuse neglect</p>
                      </div>
                    </div>
                  </div>  -->
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        <section class="csr-imgarea">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="site-title ">
                  <h4 class="sub-title">
                    {{ commit.title_one }}
                  </h4>
                  <h2>{{ commit.desc_one }}</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div v-for="img in images.data" :key="img.id" class="col-md-4">
                  <div class="csr-img">
                    <img :src="'http://192.168.1.6:8002/' + img.image">
                  </div>
              </div>
              <div class="preneext d-flex">
                <div class="right">
                  <i class="fas fa-angle-left"></i>
                </div>
                <div class="left">
                  <i class="fas fa-angle-right"></i>
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
     axios.get('http://192.168.1.6:8002/api/getCommit', {params: this.data})
          .then(({data}) => {
              this.commit = data.commit
              this.commitDtls = data.commit_dtls
              this.images = data.images
          })
      //alert(this.data.lang)
      this.$root.$on('english', (e) => {
      this.data.lang = e
      axios.get('http://192.168.1.6:8002/api/getCommit', {params: this.data})
          .then(({data}) => {
              this.commit = data.commit
              this.commitDtls = data.commit_dtls
              this.images = data.images
          })
      })

      this.$root.$on('french', (e) => {
      this.data.lang = e
      axios.get('http://192.168.1.6:8002/api/getCommit', {params: this.data})
          .then(({data}) => {
              this.commit = data.commit
              this.commitDtls = data.commit_dtls
              this.images = data.images
          })
      })

      this.$root.$on('arabic', (e) => {
      this.data.lang = e
      //alert(this.data.lang)
      axios.get('http://192.168.1.6:8002/api/getCommit', {params: this.data})
          .then(({data}) => {
              this.commit = data.commit
              this.commitDtls = data.commit_dtls
              this.images = data.images
          })
      })

      this.$root.$on('german', (e) => {
      this.data.lang = e
      axios.get('http://192.168.1.6:8002/api/getCommit', {params: this.data})
          .then(({data}) => {
              this.commit = data.commit
              this.commitDtls = data.commit_dtls
              this.images = data.images
          })
      })
  },
  data() {
    return {
      commit: {},
      commitDtls: [],
      images: [],
      data: {
        lang: ''
      }
    }
  }
}
</script>

<style scoped>
/* Nomalise*/
img {
	max-width: 100%;
}
.navbar.navbar-expand-lg.navbar-light.bg-light {
	margin: 0;
	padding: 0;
}
hr {
	margin: 0;
}
body {
    font-family: 'Rubik', sans-serif;
    overflow-x: hidden;
}

/** Business time line Area  Start **/

@media (min-width: 576px) { 
	
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 575px) and (min-width: 300px)  {
	
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
/** Business time line Area END **/
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
.preneext > div {
	border: 1px solid #777;
	width: 60px;
	font-size: 36px;
	height: 60px;
	text-align: center;
	line-height: 60px;
}
.preneext .right {
	margin-right: 20px;
}
.preneext.d-flex {
	margin-right: auto;
	margin-left: auto;
	margin-top: 40px;
}
.csr-img {
	position: relative;
}
.csr-img::after {
	content: "";
	width: 100%;
	height: 100%;
	border: 10px solid #0070ba;
	position: absolute;
	left: -10%;
	bottom: 9%;
	z-index: -1;
}
.csr-imgarea{
	padding: 100px 0px;
}
   /** Business CSR Area  Start **/

.csr_area .container {
	position: relative;
}
.csr_area .container::before,
.csr_area .container::after {
	content: "";
	height: 100%;
	width: 100%;
	position: absolute;
}
.csrleft{
	background: #232121;
}
.csr_area .container::before {
	background: #232121;
	right: 100%;
	top: 0;
}
.csr_area .container::after {
	background: #eeeeee;
	left: 100%;
	top: 0;
}
.csr_icon i {
	font-size: 24px;
	color: #004ea0;
}
.title_des {
	/* padding: 30px; */
	position: relative;
	padding-top: 60px;
	padding-right: 30px;
	padding-left: 30px;
}
.csr_icon {
	width: 145px;
	height: 56px;
	border: 1px solid #0070ba;
	text-align: center;
	border-radius: 50%;
	line-height: 62px;
	margin-right: 30px;
}
.csrtop {
	background: #eeeeee;
	padding: 30px;
	position: relative;
}
.csrtop::before {
	background: #eeeeee;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 999;
}
.title_des h3 {
	color: #0070ba;
}
.csr_description p {
	color: #777;
}
.title_des p {
	color: #fff;
	margin-top: 20px;
}
@media (min-width: 576px) { 
	
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 575px) and (min-width: 300px)  {
	
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 767px) and (min-width: 576px)  {
	
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 991px) and (min-width: 768px)  {
	.csr_area .container::after {
		display: none
	}
}
/* Large devices (desktops, 992px and up)*/
@media only screen and (max-width: 1199px) and (min-width: 992px)  {
	
	
}
/* Extra large devices (large desktops, 1200px and up)*/

@media only screen and (max-width: 1600px) and (min-width: 1200px)  {
	
}
/** Business CSR Area END **/ 
</style>
<template>
    <div>
           <section class="carrer-area">
        <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="career-tittle">
                  <h2>Find The Job That Fits Your Life</h2>
                  <p>Lorem ipsum is simply dummay text Lorem ipsum is simply dummay text Lorem ipsum is simply dummay text</p>
                </div>
              </div>
              <div class="col-md-12">
               
                <div class="job-title-area d-flex align-items-center">
                  <div class="btl-area d-flex">
                    <div class="job-title-option">
                      <select id="cars" v-model="form.title" required>
                        <option value="volvo">Job Title</option>
                        <option value="Manager">Manager</option>
                        <option value="Officer">Officer</option>
                        <option value="Executive">Executive</option>
                        <option value="Programmer">Programmer</option>
                      </select>
                    </div>
                    <div class="job-label-option">
                      <select id="cars" v-model="form.label" required>
                        <option value="volvo">Job Label</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                     <!-- <div class="job-title-option">
                      <select id="cars" v-model="form.title">
                        <option value="volvo">Job Title</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    <div class="job-label-option">
                      <select id="cars">
                        <option value="volvo">Job Label</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div> -->
                  </div>
                  <div class="submit">
                    <a type="submit" href @click.prevent="searchResult">Submit</a>
                  </div>
                  
                </div>
              </div>

            </div>
            <div class="row featured-job-area">
              <div class="col-md-12">
                <div class="career-tittle">
                  <h2>Featured Job</h2>
                  <p>Lorem ipsum is simply dummay text Lorem ipsum is simply dummay text Lorem ipsum is simply dummay text</p>
                </div>
              </div>
              <div class="col-md-12">
                <div v-for="j in jobs.data" :key="j.id" class="job-title-area mb d-flex align-items-center">
                  <div class="btl-area d-flex">
                    <div class="job-title-option d-flex">
                      <div class="sis-image">
                        <img src="images/sis_log.jpg" >
                      </div>
                      <div class="jobdetails">
                        <h6>View Details</h6>
                        <h3>{{ j.title }}</h3>
                        <h5>{{ j.label }}</h5>
                        <div class="loca-icon d-flex">
                          <div class="icon-l">
                            <i class="fas fa-map-marker-alt"></i>
                          </div>
                          <div class="loction-name">
                            <p>{{ j.location }}</p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div class="submit">
                    <a :href="j.an">Alpply Now</a>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="d-flex justify-content-end" style="margin-top:20px;">
                  <button style="color:white; font-size:16px; margin-right:10px; padding-right: 10px; padding-left: 10px;" @click.prevent="prevAcvnt"  class="btn btn-sm btn-info">Prev</button>
                  <button style="color:white; font-size:16px" @click.prevent="nextAcvnt" class="btn btn-sm btn-info">Next</button>
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
    this.getJobsData()

    this.$root.$on('arabic', (e) => {
       this.getJobsData()
    })
  },
  data(){
    return {
      url: 'http://192.168.1.6:8002/',
      form: {
        lang: this.lang,
        title: '',
        label: ''
      },
      page: 1,
      jobs: []
    }
  },
  methods: {
    getJobsData(){
      axios.get(this.url + 'api/getJobs', {params: this.form})
        .then(({data}) => {
            this.jobs = data
            //console.log(this.jobs)
        })
    },
    searchResult(){
      axios.get(this.url + 'api/getJobs?page=' + this.page, {params: this.form})
        .then(({data}) => {
            this.jobs = data
        })
    },
    nextAcvnt(){
        this.page = this.page + 1
        axios.get(this.url + 'api/getJobs?page=' + this.page, {params: this.form})
          .then(({data}) => {
            this.jobs = data
            //console.log(this.achievements)
          })
      },
	  prevAcvnt(){
        this.page = this.page - 1
        axios.get(this.url + 'api/getJobs?page=' + this.page, {params: this.form})
          .then(({data}) => {
            this.jobs = data
            //console.log(this.achievements)
          })
      }
  }
}
</script>

<style scoped>
    /** all businees Area  Start **/
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
.carrer-area {
	background: #fbfbfb;
	padding: 100px 0;
}
.btl-area {
	padding-left: 20px;
	background: #fff;
	box-shadow: 12px 12px 30px 5px rgba(0, 0, 0, .2);
	padding-right: 175px;
	width: 90%;
}

.job-title-option {
	padding: 20px 0;
	width: 50%;
}
.job-label-option {
	width: 50%;
	padding: 20px 0;
}
.job-title-option select, .job-label-option select {
	padding: 20px 10px;
	border: 1px solid rgb(0,0,0, .2);
	width: 100%;
}
.job-title-option {
	margin-right: 30px;
}
.submit {
	background: #0070ba;
	width: 180px;
	height: 47px;
	line-height: 47px;
	text-align: center;
	color: #fff;
	position: relative;
	left: -75px;
	border-radius: 4px;
}
.submit a {
	color: #fff;
}
.career-tittle {
	margin-bottom: 50px;
}
.featured-job-area {
    margin-top: 70px;
}
.sis-image {
    width: 123px;
    height: 123px;
    text-align: center;
    line-height: 123px;
    border: 1px solid rgb(0,0,0, .2);
    margin-right: 20px;
}
.jobdetails h6 {
    font-size: 13px;
    margin-top: 10px;
    color: #0070ba;
}
.jobdetails h3 {
    color: #222;
    font-size: 20px;
}
.jobdetails h5 {
    font-size: 14px;
    color: #777;
}
.icon-l i {
    margin-right: 5px;
}
.loction-name p {
    color: #777;
    font-size: 14px;
}
.featured-job-area .btl-area.d-flex {
    border-left: 2px solid #0070ba;
}
.featured-job-area .submit {
    background: none;
	border: 1px solid #0070ba;
}
.featured-job-area .submit a{
	color: #0070ba;
}
.jobdetails h6 {
    font-size: 12px;
    margin-top: 10px;
    color: #0070ba;
    font-weight: 400;
}
.mb {
    margin-bottom: 30px;
}
@media (min-width: 576px) { 
	
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 575px) and (min-width: 300px)  {
	.site-title h2 {
		font-size: 36px;
	}
	.jobdetails {
		width: 100%;
	}
	.btl-area.d-flex {
		padding-right: 0;
		width: 100%;
	}
	.job-title-option{
		width: 100%;
	}
	.submit {
		left: 0px;
		margin-top: 10px;
	}
	.job-title-area.mb.d-flex.align-items-center {
		display: block !important;
	}
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 767px) and (min-width: 576px)  {
	.jobdetails {
		width: 100%;
	}
	.job-title-option.d-flex {
		width: 100%;
	}
	.submit {
		left: -30px;
	}
	.btl-area {
		padding-right: 76px;
	}
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 991px) and (min-width: 768px)  {
	.jobdetails {
		width: 100%;
	}
	.job-title-option.d-flex {
		width: 100%;
	}
	.submit {
		left: -30px;
	}
	
}
/* Large devices (desktops, 992px and up)*/
@media only screen and (max-width: 1199px) and (min-width: 992px)  {
	
	.jobdetails {
		width: 100%;
	}
}
/* Extra large devices (large desktops, 1200px and up)*/

@media only screen and (max-width: 1600px) and (min-width: 1200px)  {
	.jobdetails {
		width: 100%;
	}
}
</style>
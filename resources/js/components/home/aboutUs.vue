<template>
<div>
  <!-- about-section -->
        <section class="about-section">
          <div class="auto-container">
              <div class="inner-container clearfix">
                  <div class="row clearfix">
                      <div class="col-lg-6 col-md-6 col-sm-12 video-column">
                          <div id="video_block_1" class="video-inner">
                              <!-- <button type="button" class="btn video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-target="#myModal">
                                  <img src="/images/about-us.jpg" alt="" style="height:300px">
                              </button> -->
                              <div class="video-inner" style="background-image: url(images/about-us.jpg);">
                                  <a id="vdo-btn" @click.prevent="chrmClick" href="https://www.youtube.com/embed/TTyFV-qhQtQ" data-toggle="modal" data-target="#myModal" class="lightbox-image video-btn" data-caption="">
                                    <i class="fas fa-play"></i>
                                  </a>
                              </div>
                            </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 content-column">
                          <div id="content_block_1">
                              <div class="content-box">
                                  <div class="sec-title">
                                      <span>{{ abouts.heading }}</span>
                                      <h2>{{ abouts.title }}</h2>
                                  </div>
                                  <div class="text">
                                      <p>{{ abouts.desc }}</p>
                                  </div>
                                  
                                  <div class="btn-box">
                                      <a href="about.html" class="theme-btn" data-toggle="modal" data-target="#exampleModalLong">{{ abouts.view_more}}<i class="fas fa-long-arrow-alt-right"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      

          <div class="begal-logo">
            <div class="container">
              <div class="row">
                <div class="col-md-12 d-flex justify-content-between">
                  <div class="singleabout">
                    <a href="">
                      <img src="images/about-logo-1.png" >
                    </a>
                  </div>
                  <div class="singleabout">
                    <a href="">
                      <img src="images/about-logo-2.png" >
                    </a>
                  </div>
                  <div class="singleabout">
                    <a href="">
                      <img src="images/about-logo-3.png" >
                    </a>
                  </div>
                  <div class="singleabout">
                    <a href="">
                      <img src="images/about-logo-4.png" >
                    </a>
                  </div>
                  <div class="singleabout">
                    <a href="">
                      <img src="images/about-logo-5.png" >
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </section>
        <!-- about-section end -->

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <!-- <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed> -->
                    <!-- <youtube video-id="lG0Ys-2d4MA" ref="youtube"></youtube> -->
                    <!-- <youtube host="https://www.youtube.com/watch?v=s4ObxcdXoFE" player-width="1280" player-height="750" :player-vars="{autoplay: 1}"></youtube>  -->
                     <!-- <video-embed ref="youtube" src="https://www.youtube.com/watch?v=s4ObxcdXoFE" :player-vars="{autoplay: 1}"></video-embed>   -->
                    <!-- <div class="embed-responsive embed-responsive-16by9">
        
                      <iframe class="embed-responsive-item" src="" id="video" allowfullscreen  allowscriptaccess="always"  allow="autoplay"></iframe>
                    </div> -->
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">

                      <iframe class="embed-responsive-item" src="" id="video" allowfullscreen  allowscriptaccess="always"  allow="autoplay"></iframe>
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
    this.data.tab_name = 'English'
    axios.get('http://192.168.1.6:8002/api/getAboutus', {params: this.data})
        .then(({data}) => {
            this.abouts = data
            console.log(this.abouts)
        })

    this.$root.$on('english', (e) => {
        this.data.tab_name = e
        axios.get('http://192.168.1.6:8002/api/getAboutus', {params: this.data})
            .then(({data}) => {
                this.abouts = data
                console.log(this.abouts)
            })
    })

    this.$root.$on('french', (e) => {
        this.data.tab_name = e
        axios.get('http://192.168.1.6:8002/api/getAboutus', {params: this.data})
            .then(({data}) => {
                this.abouts = data
                console.log(this.abouts)
            })
    })

    this.$root.$on('arabic', (e) => {
        this.data.tab_name = e
        axios.get('http://192.168.1.6:8002/api/getAboutus', {params: this.data})
            .then(({data}) => {
                this.abouts = data
                console.log(this.abouts)
            })
    })


    this.$on('chairman', (e) => {
     $(document).ready(function() {
      // Gets the video src from the data-src on each button
      var $videoSrc = e;
      $("#vdo-btn").click(function() {
        $videoSrc = $(this).attr("href");
        console.log("button clicked" + $videoSrc);
      });

      // when the modal is opened autoplay it
      $("#myModal").on("shown.bs.modal", function(e) {
        console.log("modal opened" + $videoSrc);
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr(
          "src",
          $videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=0"
        );
      });

      // stop playing the youtube video when I close the modal
      $("#myModal").on("hide.bs.modal", function(e) {
        // a poor man's stop video
        $("#video").attr("src", $videoSrc);
      });

      // document ready  
      });
    })

  },
  data() {
    return {
        abouts: {},
        url: 'https://www.youtube.com/embed/TTyFV-qhQtQ',
        data: {
            tab_name: ''
        }
    }
  },
  methods: {
    chrmClick(){
      this.$emit('chairman', this.url)
      // $(document).ready(function() {
      // // Gets the video src from the data-src on each button
      // var $videoSrc;
      // $("#vdo-btn").click(function() {
      //   $videoSrc = $(this).attr("href");
      //   console.log("button clicked" + $videoSrc);
      // });

      // // when the modal is opened autoplay it
      // $("#myModal").on("shown.bs.modal", function(e) {
      //   console.log("modal opened" + $videoSrc);
      //   // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
      //   $("#video").attr(
      //     "src",
      //     $videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=0"
      //   );
      // });

      // // stop playing the youtube video when I close the modal
      // $("#myModal").on("hide.bs.modal", function(e) {
      //   // a poor man's stop video
      //   $("#video").attr("src", $videoSrc);
      // });

      // // document ready  
      // });
    }
  }
}
</script>

<style scoped>
  body {margin:2rem;}

.modal-dialog {
      max-width: 800px;
      margin: 30px auto;
  }



.modal-body {
  position:relative;
  padding:0px;
}
.close {
  position:absolute;
  right:-30px;
  top:0;
  z-index:999;
  font-size:2rem;
  font-weight: normal;
  color:#fff;
  opacity:1;
}

/** Abut Us Area  Start **/

/** about-section **/

.about-section{
	position: relative;
	height: 100vh;
  }
  
  #video_block_1 .video-inner{
	position: relative;
	width: 100%;
	padding: 260px 0px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
  text-align: center;
  color: #2962FF;
  }
  #video_block_1 .video-inner a {
	position: relative;
	display: inline-block;
	font-size: 24px;
	width: 54px;
	height: 54px;
	line-height: 54px;
	background: rgba(255,255,255,0.95);
	text-align: center;
	border-radius: 50%;
}
  
  #video_block_1 .video-inner a:after, 
  #video_block_1 .video-inner a:before {
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background: transparent;
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	-webkit-animation-delay: .9s;
	animation-delay: .9s;
	content: "";
	position: absolute;
	-webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);
	box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);
	-webkit-animation: ripple 3s infinite;
	animation: ripple 3s infinite;
	-webkit-transition: all .4s ease;
	transition: all .4s ease;
  }
  
  #video_block_1 .video-inner a:after {
	-webkit-animation-delay: .6s;
	animation-delay: .6s;
  }
  
  @-webkit-keyframes ripple {
	70% {
	  -webkit-box-shadow: 0 0 0 40px rgba(255, 255, 255, 0);
			  box-shadow: 0 0 0 40px rgba(255, 255, 255, 0);
	}
	100% {
	  -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
			  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
	}
  }
  @keyframes ripple {
	70% {
	  -webkit-box-shadow: 0 0 0 40px rgba(255, 255, 255, 0);
			  box-shadow: 0 0 0 40px rgba(255, 255, 255, 0);
	}
	100% {
	  -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
			  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
	}
  }
  
  .about-section .inner-container{
	position: relative;
	background: #fff;
	margin-top: -70px;
	box-shadow: 0 0 30px rgba(0,0,0,.08);
	z-index: 1;
  }
  
  #content_block_1 .content-box{
	position: relative;
	padding: 62px 110px 70px 50px;
  }
  
  #content_block_1 .content-box .sec-title{
	margin-bottom: 21px;
  }
  
  #content_block_1 .content-box .text{
	margin-bottom: 25px;
  }
  
  #content_block_1 .content-box .list li{
	position: relative;
	display: block;
	font-size: 16px;
	font-family: 'Heebo', sans-serif;
	font-weight: 700;
	color: #282932;
	margin-bottom: 10px;
	padding-left: 30px;
  }
  
  #content_block_1 .content-box .list li:last-child{
	margin-bottom: 0px;
  }
  
  #content_block_1 .content-box .list li:before{
	position: absolute;
	content: '\f058';
	font-size: 18px;
	font-family: 'Font Awesome 5 Free';
	font-weight: 400;
	left: 0px;
	top: 0px;
  }
  
  #content_block_1 .content-box .list{
	position: relative;
	margin-bottom: 29px;
  }
  
  #content_block_1 .content-box .theme-btn{
	padding: 17px 24px;
  }
  .sec-title span {
	position: relative;
	display: block;
	font-size: 16px;
	line-height: 26px;
	font-family: 'Heebo', sans-serif;
	font-weight: 800;
	margin-bottom: 13px;
}
.sec-title h2 {
	position: relative;
	font-size: 56px;
	line-height: 57px;
	color: #353535;
	font-weight: 800;
	padding-bottom: 0px;
}
.sec-title span {
	color: #0070ba;
}
#content_block_1 .content-box .text {
	margin-bottom: 25px;
}
p {
	position: relative;
	font-size: 16px;
	line-height: 30px;
	font-family: 'Rubik', sans-serif;
	color: #565872;
	margin: 0px;
	transition: all 500ms ease;
}
.theme-btn {
	position: relative;
	display: inline-block;
	font-size: 15px;
	line-height: 26px;
	font-weight: 700;
	font-family: 'Rubik', sans-serif;
	color: #fff !important;
	text-align: center;
	cursor: pointer;
	border-radius: 5px;
	padding: 17px 30px;
	z-index: 1;
	transition: all 500ms ease;
	background: #0070ba;
}
.theme-btn i {
	position: relative;
	top: 2px;
	font-size: 20px;
	margin-left: 40px;
}
.auto-container {
	position: static;
	max-width: 1200px;
	padding: 0px 15px;
	margin: 0 auto;
}
.begal-logo {
	background: #fbfbfb;
	padding: 63px 0;
}
.singleabout img {
	filter: grayscale(1);
	transition: .5s;
}
.singleabout:hover img{
	filter: grayscale(0);
}
/* Extra small devices (portrait phones, less than 576px)*/
/* No media query since this is the default in Bootstrap*/

/* Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) { 
	
}

/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 991px) and (min-width: 768px)  {
	.sec-title h2 {
		font-size: 30px;
		line-height: 30px;
	}
}
/* Large devices (desktops, 992px and up)*/
@media only screen and (max-width: 1199px) and (min-width: 992px)  {
	
}
/* Extra large devices (large desktops, 1200px and up)*/

@media only screen and (max-width: 1600px) and (min-width: 1200px)  {
	
}
/** Abut Us Area  End **/

</style>
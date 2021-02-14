<template>
    <div>
             <!-- ====START PROMOT==== -->
    <section class="counter-vice-quote">
      <div class="container">
        <div class="row">
            <div class="col-sm-12 align-items-center">
                <div class="aboutbox">
                    <div class="counter_area ">
                        <div class="single_counter">
                          <i class="fas fa-user"></i>
                            <h3 class="counter"><countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo></h3>
                            <p>Employees</p>
                        </div>
                        <div class="single_counter">
                          <i class="fas fa-file-export"></i>
                            <h3 class="counter"><countTo :startVal='0' :endVal='50' :duration='4000'></countTo></h3>
                            <p>Export Countries </p>
                        </div>
                        <div class="single_counter">
                          <i class="fas fa-industry"></i>
                            <h3 class="counter"><countTo :startVal='0' :endVal='12' :duration='4000'></countTo></h3>
                            <p>Factories</p>
                        </div>
                        <div class="single_counter">
                          <i class="fas fa-baseball-ball"></i>
                            <h3 class="counter"><countTo :startVal='0' :endVal='26' :duration='4000'></countTo></h3>
                            <p>SBUS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="promot_area">
        <div class="container">
          <div class="row">
              <div class="col-md-6 col-sm-12 col-xs-12">
                  <div class="promo_text">
                      <h3>Vice-Chairman Quote</h3>
                      <p>Typi non habent claritatem insitam est usus legentis in iis qui facit 
                        eorum claritatem. Investigationes demonstraverunt lectore.</p>
                  </div>
              </div>
              
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 video-column">
                  <div id="video_block_1">
                      <div class="video-inner" style="background-image: url(images/vice-charman.png);">
                          <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="lightbox-image video-btn" data-caption=""><i class="fas fa-play"></i></a>
                      </div>
                  </div>
              
              </div>
          </div>
        </div>
      </div>
      
  </section>
  <!-- ====PROMOT AREA END==== -->
    </div>
</template>

<script>
  import countTo from 'vue-count-to';
  export default {
    components: { countTo },
    data () {
      return {
        startVal: 1000,
        endVal: 5000
      }
    }
  }
</script>

<style scoped>
    /** Counter-area **/

.single_counter i {
    color: #0070ba;
    display: inline-block;
    font-size: 18px;
}

.single_counter h3 {
    display: inline-block;
    font-family: 'Rubik', sans-serif;
    font-size: 23px;
    font-weight: 700;
    padding-left: 8px;
}

.single_counter > p {
    color: #b9b9b9;
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding-left: 11px;
    position: relative;
}

.single_counter > p::after {
    background: #ffcb3d;
    content: "";
    height: 20px;
    left: 0;
    position: absolute;
    top: 5px;
    width: 1px;
}
.single_counter {
    display: inline-block;
    margin-right: 100px;
}
.promot_area {
    padding: 50px 0 52px;
    position: relative;
    background: #004ea0;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.promo_text {
    position: relative;
    z-index: 1;
    color: #fff;
}

.promo_text > h3,
.post_title {
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 17px;
    font-family: "Open Sans", sans-serif;
}

.promo_text > p {
    color: #e9e9e9;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 21px;
    margin-bottom: 0;
    width: 75%;
}

.promot_area::after {
    background: rgba(2, 27, 39, 0.93);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
.promot_area .cl-effect-2 a span {
    margin-top: 10px;
    height: 55px;
    line-height: 55px;
    width: 190px;
}
.promot_area .row {
    position: relative;
    z-index: 4;
}
.aboutbox {
	padding-bottom: 60px;
}

#video_block_1 .video-inner {
	position: absolute;
	width: 100%;
	padding: 153px 0px;
	background-repeat: no-repeat;
	background-position: center;
	text-align: center;
	right: 0;
	bottom: -52px;
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
  
  
/* Extra small devices (portrait phones, less than 576px)*/
/* No media query since this is the default in Bootstrap*/

/* Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) { 
	
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 575px) and (min-width: 300px)  {
	.single_counter {
		margin-right: 75px;
	}
	#video_block_1 .video-inner {
		
		width: 34%;
		padding: 87px 0px;
		bottom: -52px;
	}
	.promo_text > h3, .post_title {
		font-size: 18px;
	}
	.promo_text {
		width: 90%;
	}
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 767px) and (min-width: 576px)  {
	#video_block_1 .video-inner{
		width: 57%;
	}
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 991px) and (min-width: 768px)  {
	.single_counter {
		margin-right: 25px;
	}
}
/* Large devices (desktops, 992px and up)*/
@media only screen and (max-width: 1199px) and (min-width: 992px)  {
	
	.single_counter {
		margin-right: 60px;
	}
}
/* Extra large devices (large desktops, 1200px and up)*/

@media only screen and (max-width: 1600px) and (min-width: 1200px)  {
	
}
/** Counter Area  End **/
</style>
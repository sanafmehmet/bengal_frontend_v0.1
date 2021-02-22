<template>
    <div>
            <section class="blog-area">
          <div class="container">
            <div class="row">
              <div class="col-md-5 col-sm-6">
                <div class="bengal-blog bm">
                  <div class="blog-img">
                      <img src="images/blog-1.jpg">
                      <div class="blog-details">
                        <h4>National Export 
                          Trophy</h4>
                      </div>
                  </div>
                  
                </div>
                <div class="bengal-blog">
                  <div class="blog-img">
                      <img src="images/blog-2.jpg">
                      <div class="blog-details">
                        <h4>National Export 
                          Trophy2</h4>
                      </div>
                  </div>
                  
                </div>
              </div>
              <div class="col-md-7 col-sm-6">
                <div id="video_block_1">
                  <div class="video-inner" style="background-image: url(images/blog-3.jpg);">
                      <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="lightbox-image video-btn" data-caption="">
                        <i class="fas fa-play"></i>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> ‍
        
    </div>
</template>

<style scoped>
    /** Blog Area  Start **/
    .blog-area{
        margin-top:20px;
    }
#video_block_1 .video-inner{
	position: relative;
	width: 100%;
	padding: 307px 0px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	text-align: center;
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
  .bm{
	  margin-bottom: 30px;
  }
  .blog-details {
	position: absolute;
	width: 80%;
	height: 100%;
	background: rgba(0,0,0, .38);
	top: 100%;
	opacity: 0;
	transition: .5s;
	left: calc(50% - 180px);
	}
  .blog-details h4 {
	color: #fff;
	font-size: 18px;
	text-align: center;
	padding-top: 12px;
	}
	.blog-img{
		transition: 5s;
		position: relative;
		overflow: hidden;
	}
	.blog-img:hover .blog-details {
		top: 59.8%;
		opacity: 1;
		
		/* width: 79%; */
		/* left: calc(50% - 180px); */
	}
/* Extra small devices (portrait phones, less than 576px)*/
/* No media query since this is the default in Bootstrap*/

/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 575px) and (min-width: 300px)  {
	#video_block_1 {
		margin-top: 30px;
	}
	.blog-details {
		left: calc(50% - 164px);
	}
	.blog-details h4 {
		padding-top: 8px;
	}
	.blog-img:hover .blog-details {
		top: 85.8%;
	}
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 767px) and (min-width: 576px)  {
	.blog-details {
		left: calc(50% - 95px);
	}
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 991px) and (min-width: 768px)  {
	.blog-img:hover .blog-details {
		top: 60.8%;
		
	}
	.blog-details {
		left: calc(50% - 96px);
	}
}
/* Large devices (desktops, 992px and up)*/
@media only screen and (max-width: 1199px) and (min-width: 992px)  {
	
	.blog-details {
		left: calc(50% - 150px);
	}
}
/* Extra large devices (large desktops, 1200px and up)*/

@media only screen and (max-width: 1600px) and (min-width: 1200px)  {
	.blog-img:hover .blog-details {
		top: 83.8%;
		
	}
}

/** Blog Area END **/
</style>
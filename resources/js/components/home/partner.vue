<template>
    <div>
       <section class="partner-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="site-title ">
                <h4 class="sub-title">
                  Lorem Lorem
                </h4>
                <h2>Our Partner</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
            <div class="row">
              <div class="pr col-md-4 col-lg-4 col">
                <div class="bengal-partner">
                    <div class="img">
                      <img src="images/partner-1.jpg">
                    </div>
                </div>
              </div>
              <div class="pr col-md-4 col-lg-4 col">
                <div class="bengal-partner">
                    <div class="img">
                      <img src="images/partner-2.jpg">
                    </div>
                </div>
              </div>
              <div class="pr col-md-4 col-lg-4 col">
                <div class="bengal-partner">
                    <div class="img">
                      <img src="images/partner-3.jpg">
                    </div>
                </div>
              </div>
              <div class="pr col-md-4 col-lg-4 col">
                <div class="bengal-partner">
                    <div class="img">
                      <img src="images/partner-4.jpg">
                    </div>
                </div>
              </div>
              <div class="pr col-md-4 col-lg-4 col">
                <div class="bengal-partner">
                    <div class="img">
                      <img src="images/partner-5.jpg">
                    </div>
                </div>
              </div>
              <div class="pr col-md-4 col-lg-4 col">
                <div class="bengal-partner">
                    <div class="img">
                      <img src="images/partner-6.jpg">
                    </div>
                </div>
              </div>
              <div class="pr col-md-4 col-lg-4 col">
                <div class="bengal-partner">
                    <div class="img">
                      <img src="images/partner-1.jpg">
                    </div>
                </div>
              </div>
              <div class="pr col-md-4 col-lg-4 col">
                <div class="bengal-partner">
                    <div class="img">
                      <img src="images/partner-1.jpg">
                    </div>
                </div>
              </div>
              <div class="pr col-md-4 col-lg-4 col">
                <div class="bengal-partner">
                    <div class="img">
                      <img src="images/partner-1.jpg">
                    </div>
                </div>
              </div>
            </div>
        </div>
      </section>  
         
    </div>
</template>

<style scoped>
    /** partner Area  Start **/
.partner-area{
	padding: 100px 0;
}
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
.bengal-partner .img{
	position: relative;
	overflow: hidden;
}

.bengal-partner .img{
	transition: .5s;
}
.bengal-partner .img:hover {
	transform: scale(1.5);
	
	box-shadow: 2px 1px 15px rgba(0, 0, 0, 0.15);
	z-index: 1;
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
/** Partner Area END **/
</style>
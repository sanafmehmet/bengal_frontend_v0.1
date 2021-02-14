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
                <h2>Export Markets</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
            <div class="row">
              <div class="no-gutters col-md-4 col-lg-4 col">
                <div class="achievements-bengal">
                    <div class="img">
                      <img src="images/achivement.jpg" >
                    </div>
                    <div class="achi-details">
                      <h3>Achievement Lorem Lorem</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                      <a href="#">Read More</a>
                    </div>
                </div>
              </div>
              <div class="no-gutters col-md-4 col-lg-4 col">
                <div class="achievements-bengal">
                    <div class="img">
                      <img src="images/achivement.jpg" >
                    </div>
                    <div class="achi-details">
                      <h3>Achievement Lorem Lorem</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                      <a href="#">Read More</a>
                    </div>
                </div>
              </div>
              <div class="no-gutters col-md-4 col-lg-4 col">
                <div class="achievements-bengal">
                    <div class="img">
                      <img src="images/achivement.jpg" >
                    </div>
                    <div class="achi-details">
                      <h3>Achievement Lorem Lorem</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                      <a href="#">Read More</a>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </section>  
         
    </div>
</template>

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
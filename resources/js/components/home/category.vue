<template>
    <div>
           
        <section class="section-padding bg-light-white">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-md-6 mb-md-80">
                      <div class="section-header left-heading pb-0">
                          <div class="section-heading">
                              <h6 class="text-orng mb-xl-10 sub-heading"><span>Profit Share</span></h6>
                              <h3 class="text-blue fw-700 title">Any kind business profit share<span class="text-orng">.</span></h3>
                              <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                          </div>
                      </div>
                      <ul class="custom profit-list">
                          <li><i class="fas fa-check"></i><span class="font-weight:bold">Kind business &amp; shop profit share</span></li>
                          <li><i class="fas fa-check"></i>Solid solution with great intregation</li>
                      </ul>
                      <a href="project-detail.html" class="theme-btn btn-orange">
                          Case Study <i class="fa fa-plus"></i>
                      </a>
                  </div>
                  <div class="col-lg-6 col-md-6 col-xs-12">
                      <div class="profit-chart-box">
                          <a href="index.html" class="chart-logo">
                              <img src="images/bengal-cat-logo.png" class="image-fit" alt="">
                          </a>
                          <a href="#" class="profit-icon icon-ps-1">
                              <span class="icon">
                                <img src="images/cat-logo.jpg">
                              </span>
                              <span class="icon-text">Finance</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-2">
                              <span class="icon">
                                  <img src="images/cat-logo.jpg">
                              </span>
                              <span class="icon-text">Consultancy</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-3">
                              <span class="icon">
                                <img src="images/cat-logo.jpg">
                              </span>
                              <span class="icon-text">Tax</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-4">
                              <span class="icon">
                                <img src="images/cat-logo.jpg">
                              </span>
                              <span class="icon-text">Profit Share</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-5">
                              <span class="icon">
                                <img src="images/cat-logo.jpg">
                              </span>
                              <span class="icon-text">Banking</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-6">
                              <span class="icon">
                                <img src="images/cat-logo.jpg">
                              </span>
                              <span class="icon-text">Growth</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-7">
                              <span class="icon">
                                <img src="images/cat-logo.jpg">
                              </span>
                              <span class="icon-text">Policy</span>
                          </a>
                          <a href="#" class="profit-icon icon-ps-8">
                              <span class="icon">
                                <img src="images/cat-logo.jpg">
                              </span>
                              <span class="icon-text">Home Loan</span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    </div>
</template>

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
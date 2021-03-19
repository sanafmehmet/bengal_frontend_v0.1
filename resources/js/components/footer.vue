<template>
    <div>
         <!-- main-footer -->
  <footer class="main-footer">
    <div class="container">
        <div class="footer-top">
            <div class="widget-section">
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div class="footer-widget logo-widget">
                            <figure class="footer-logo"><a href="index.html"><img src="/images/footerlogo.png" alt=""></a></figure>
                            <div class="text">
                                <p>{{ content.desc }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div class="footer-widget contact-widget">
                            <ul class="info clearfix">
                                <li>
                                  <i class="fas fa-phone-alt"></i>
                                    <p>Call Us</p>
                                    <h5><a href="tel:8602729738">{{content.callus}}</a></h5>
                                </li>
                                <li>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Address</p>
                                    <h5>{{content.addrs}}</h5>
                                </li>
                            </ul>
                            <ul class="social-links clearfix"> 
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div class="footer-widget newsletter-widget">
                            <div class="widget-title">
                                <h6>Gallery</h6>
                            </div>
                            <div class="gallery-item">
                                <div class="gallerytop d-flex">
                                  <div class="single-gallery">
                                    <img src="/images/gallery1.jpg" alt="">
                                  </div>
                                  <div class="single-gallery">
                                    <img src="/images/gallery2.jpg" alt="">
                                  </div>
                                </div>
                                <div class="gallerybottom d-flex">
                                  <div class="single-gallery">
                                    <img src="/images/gallery3.jpg" alt="">
                                  </div>
                                  <div class="single-gallery">
                                    <img src="/images/gallery4.jpg" alt="">
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom d-flex">
            <div class="col-sm-6 col-xl-12 copyright pull-left">
              <h5>&copy;2020 CopyRight <a href="#">Example</a>. All rights reserved.</h5>
            </div>
            <ul class="col-sm-6 col-xl-12 footer-nav pull-right justify-content-md-end">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Blog</a></li>
                <li><a href="index.html">Contact</a></li>
            </ul>
        </div>
    </div>
  </footer>
  <!-- main-footer end -->

    </div>
</template>

<script>
  export default {
    components: {  },
    created() {
        this.getData()

        this.$root.$on('english', (e) => {
            this.form.lang = e
            axios.get('http://192.168.1.6:8002/api/getFooter', {params: this.form})
                .then(({data}) => {
                    this.content = data.content
                    this.images = data.images
                })
        })

        this.$root.$on('arabic', (e) => {
            this.form.lang = e
            axios.get('http://192.168.1.6:8002/api/getFooter', {params: this.form})
                .then(({data}) => {
                    this.content = data.content
                    this.images = data.images
                })
        })

        this.$root.$on('french', (e) => {
            this.form.lang = e
            axios.get('http://192.168.1.6:8002/api/getFooter', {params: this.form})
                .then(({data}) => {
                    this.content = data.content
                    this.images = data.images
                })
        })

        this.$root.$on('german', (e) => {
            this.form.lang = e
            axios.get('http://192.168.1.6:8002/api/getFooter', {params: this.form})
                .then(({data}) => {
                   this.content = data.content
                    this.images = data.images
                })
        })
    },
    data () {
      return {
        content: {},
        images: [],
        form: {
            lang: ''
        }
      }
    },
    methods: {
      getData(){
        this.form.lang = 'English'
        axios.get('http://192.168.1.6:8002/api/getFooter', {params: this.form})
          .then(({data}) => {
            this.content = data.content
            this.images = data.images
            //console.log(this.content)
            //console.log(this.images)
          })
      }
    }
  }
</script>


<style scoped>
    /** main-footer **/
.main-footer{
	position: relative;
	background: #1c1d1f;
	margin-top: 30px;
  }
  
  .main-footer .footer-top{
	position: relative;
	padding: 73px 0px 100px 0px;
	border-bottom: 2px solid rgba(255,255,255,0.1);
  }
  
  .main-footer .footer-top .logo-widget .footer-logo{
	position: relative;
	margin-bottom: 30px;
  }
  
  .main-footer .footer-top .logo-widget p{
	font-size: 14px;
	line-height: 30px;
	color: #fff;
	margin: 0px;
  }
  
  .main-footer .footer-top .contact-widget{
	position: relative;
	display: block;
	padding: 48px 30px 50px 35px;
	border-radius: 5px;
	margin-top: -103px;
  }
  
  .main-footer .footer-top .contact-widget .info li{
	position: relative;
	display: block;
	padding-left: 73px;
	margin-bottom: 40px;
  }
  
  .main-footer .footer-top .contact-widget .info li:last-child{
	margin-bottom: 0px;
  }
  
  .main-footer .footer-top .contact-widget .info li i{
	position: absolute;
	left: 0px;
	top: 11px;
	font-size: 40px;
	line-height: 40px;
	color: #fff;
  }
  
  .main-footer .footer-top .contact-widget .info li p{
	color: #fff;
	margin-bottom: 5px;
  }
  
  .main-footer .footer-top .contact-widget .info li h5{
	position: relative;
	display: block;
	font-size: 18px;
	line-height: 26px;
	color: #fff;
	font-weight: 700;
	margin: 0px;
  }
  
  .main-footer .footer-top .contact-widget .info li h5 a{
	display: inline-block;
	color: #fff;
  }
  
  .main-footer .footer-top .contact-widget .info li h5 a:hover{
	text-decoration: underline;
  }
  
  .main-footer .footer-top .contact-widget .info{
	position: relative;
	margin-bottom: 57px;
  }
  
  .main-footer .footer-top .contact-widget .social-links li{
	position: relative;
	display: inline-block;
	
	margin-right: 10px;
  }
  
  .main-footer .footer-top .contact-widget .social-links li:last-child{
	margin-right: 0px;
  }
  
  .main-footer .footer-top .contact-widget .social-links li a{
	position: relative;
	display: inline-block;
	font-size: 15px;
	color: #fff;
	width: 42px;
	height: 42px;
	line-height: 42px;
	text-align: center;
	border-radius: 50%;
	border: 1px solid rgba(255,255,255,0.2);
  }
  .main-footer .footer-top .contact-widget {
	background: #003087;
  }
  .main-footer .footer-top .contact-widget .social-links li a:hover{
	border-color: #003087;
	background: #fff;
  }
  .main-footer .footer-top .contact-widget .social-links li a:hover {
	color: #003087;
}
  .main-footer .footer-top .widget-title{
	position: relative;
	margin-bottom: 20px;
  }
  
  .main-footer .footer-top .widget-title h6{
	position: relative;
	display: block;
	font-size: 16px;
	font-weight: 700;
	color: #fff;
	margin: 0px;
  }
  
  .main-footer .footer-top .newsletter-widget{
	position: relative;
	margin-left: 70px;
  }
  
  .main-footer .footer-top .newsletter-widget .widget-content p{
	font-size: 14px;
	line-height: 30px;
	color: #fff;
	margin-bottom: 19px;
  }
  
  .main-footer .footer-top .newsletter-widget .newsletter-form .form-group{
	position: relative;
	margin: 0px;
  }
  .single-gallery {
	margin-bottom: 2px;
	margin-right: 2px;
}

  .main-footer .footer-top .newsletter-widget{
	position: relative;
	margin-top: 46px;
  }
  
  .main-footer .footer-bottom{
	position: relative;
	padding: 64px 0px;
  }
  
  .main-footer .footer-bottom .copyright h5{
	position: relative;
	font-size: 18px;
	line-height: 32px;
	color: #bbbbbc;
  }
  
  .main-footer .footer-bottom .copyright h5 a{
	display: inline-block;
	color: #bbbbbc;
  }
  
  
  
  .main-footer .footer-bottom .footer-nav li{
	position: relative;
	display: inline-block;
	font-size: 18px;
	color: #bbbbbc;
	margin-right: 35px;
  }
  
  .main-footer .footer-bottom .footer-nav li:last-child{
	margin-right: 0px;
  }
  
  .main-footer .footer-bottom .footer-nav li a{
	color: #bbbbbc;
  }
  
  .footer-widget.contact-widget ul {
	padding: 0;
	margin: 0;
  }
  .col-sm-6.footer-nav.pull-right.justify-content-md-end {
	text-align: right;
}
  .main-footer .footer-bottom .footer-nav li:before{
	position: absolute;
	content: '';
	background: #bbbbbc;
	width: 1px;
	height: 15px;
	top: 8px;
	right: -20px;
  }
  
  .main-footer .footer-bottom .footer-nav li:last-child:before{
	display: none;
  }
  
</style>

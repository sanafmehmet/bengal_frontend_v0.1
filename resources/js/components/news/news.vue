<template>
    <div>
           <div class="news-page section-padding bg-light">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <article class="post-block-item" v-for="n in news.data" :key="n.id">
                  <div class="post-thumbnail">
                    <img :src="'http://192.168.1.6:8002/' + n.image" alt="" class="img-fluid">
                  </div>
                  <div class="post-block-content">
                    <div class="post-block-tags">
                      <ul>
                        <li><a @click.prevent="news_dtls" href="#">{{ n.category }}</a></li>
                      </ul>
                    </div>
                    <h3 class="post-block-title"><a href="single.html">{{ n.title }}.</a></h3>
                    <div class="post-block-meta">
                      <div class="d-flex">
                        
                        <div class="post-block-comments">
                          <i class="fal fa-calendar-alt"></i> {{ n.dt }}
                        </div>
                      </div>
                    </div>
                    <div class="post-block-excerpt">
                      {{ n.desc }}
                    </div>
                    <div class="post-block-footer">
                      <div class="d-flex w-100 justify-content-between">
                        
                        <div class="post-read-more">
                          <router-link :to="{name: 'news_details', params:{id: n.id}}" href="#" class="">{{ n.rm }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                
          
                <!-- <article class="post-block-item post-quote">
                  <div class="post-block-content">
                    <h3 class="post-block-title quote-title"><a href="single.html">Excepteur sint occaecat cupida
                        tat non proident, sunt in.</a></h3>
                    <div class="post-block-meta">
                      <div class="d-flex">
                        <div class="post-block-views">
                          <i class="fal fa-eye"></i> 232 Views
                        </div>
                        <div class="post-block-comments">
                          <i class="fal fa-comments"></i> 35 Comments
                        </div>
                        <div class="post-block-comments">
                          <i class="fal fa-calendar-alt"></i> 18th August 2020
                        </div>
                      </div>
                    </div>
                  </div>
                </article> -->
                <!-- <nav aria-label="navigation">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" @click.prevent="prevAcvnt" href="#" aria-label="Previous">
                        <i class="fal fa-chevron-double-left"></i>
                      </a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#" @click.prevent="nextAcvnt" aria-label="Next">
                        <i class="fal fa-chevron-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav> -->
                	<div class="d-flex justify-content-start" style="margin-top:20px; ">
			<button style="color:white; font-size:16px; margin-right:10px; padding-right: 10px; padding-left: 10px; background-color:#fde428; color:black" @click.prevent="prevAcvnt"  class="btn btn-sm btn-info">Prev</button>
	  		<button style="color:white; font-size:16px; background-color:#fde428; color:black" @click.prevent="nextAcvnt" class="btn btn-sm btn-info">Next</button>
		</div>
              </div>
              <div class="col-lg-4">
                <div class="finpress-sidebar">
                  
                  <div class="widget-box">
                    <h3 class="widget-title">Search</h3>
                    <form action="#" class="search-form d-flex">
                      <input type="text" class="search-input" placeholder="Search your keyword...">
                      <button class="search-submit"><i class="fal fa-search"></i></button>
                    </form>
                  </div>
                  <div class="widget-box">
                    <h3 class="widget-title">Popular News</h3>
                    <div class="recent-post-widget">
                      <div v-for="n in popular" :key="n.id" class="recent-post-item">
                        <div class="d-flex">
                          <div class="rp-thumb">
                            <img :src="'http://192.168.1.6:8002/' + n.image" alt="" class="img-fluid rounded-circle">
                          </div>
                          <div class="rp-details">
                            <h2 class="post-title-sm"><a href="single.html">{{ n.title }}.</a></h2>
                            <div class="rp-date"><i class="fal fa-calendar-alt"></i> {{ n.dt }}</div>
                          </div>
                        </div>
                      </div>
               
                    </div>
                  </div>
          
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['lang'],
    created() {
      // this.data.lang = 'English'
      axios.get('http://192.168.1.6:8002/api/getNews', {params: this.data})
          .then(({data}) => {
              this.news = data.news
              this.popular = data.popular
              console.log(this.news)
          })
      //alert(this.data.lang)
      this.$root.$on('english', (e) => {
      this.data.lang = e
      axios.get('http://192.168.1.6:8002/api/getNews', {params: this.data})
          .then(({data}) => {
              this.news = data.news
              this.popular = data.popular
          })
      })

      this.$root.$on('french', (e) => {
      this.data.lang = e
      axios.get('http://192.168.1.6:8002/api/getNews', {params: this.data})
          .then(({data}) => {
              this.news = data.news
              this.popular = data.popular
          })
      })

      this.$root.$on('arabic', (e) => {
      this.data.lang = e
      //alert(this.data.lang)
      axios.get('http://192.168.1.6:8002/api/getNews', {params: this.data})
          .then(({data}) => {
              this.news = data.news
              this.popular = data.popular
          })
      })

      this.$root.$on('german', (e) => {
      this.data.lang = e
      axios.get('http://192.168.1.6:8002/api/getNews', {params: this.data})
          .then(({data}) => {
              this.news = data.news
              this.popular = data.popular
          })
      })
    },
    data() {
        return {
          page: 1,
          news: [],
          popular: [],
          data: {
            lang: this.lang
          }
        }
    },
    methods:{
        news_dtls(){
            //  this.videoarea = false
            // this.heroArea = true
            // this.changeMenu = 'bengalmenu'
            // this.test = true
            this.$router.push('/news_details')
        },
        nextAcvnt(){
        this.page = this.page + 1
          axios.get('http://192.168.1.6:8002/api/getNews?page=' + this.page, {params: this.data})
            .then(({data}) => {
              this.news = data
            })
        },
        prevAcvnt(){
            this.page = this.page - 1
            axios.get('http://192.168.1.6:8002/api/getNews?page=' + this.page, {params: this.data})
              .then(({data}) => {
                this.news = data
              })
        }
    }
}
</script>

<style scoped>
 
.post-block-item {
	position: relative;
	display: block;
  }
  
  .post-block-item:not(:last-child) {
	margin-bottom: 40px;
  }
  
  .post-block-content {
	background: #fff;
	padding: 50px;
  }
  
  .post-block-tags ul {
	list-style: none;
	padding-left: 0;
	margin-left: 0;
  }
  
  .post-block-tags ul li {
	margin-right: 20px;
  }
  
  .post-block-tags ul li a,
  .post-block-tags ul li a:visited {
	background: #fde428;
	color: #002e5b;
	padding: 10px 30px;
	font-size: 14px;
	font-weight: 700;
  }
  
  .post-block-title {
	font-size: 34px;
	line-height: 46px;
	color: #002e5b;
	letter-spacing: -1.02px;
	margin: 30px auto 20px;
	display: block;
  }
  
  .post-block-title a,
  .post-block-title a:visited {
	color: #002e5b;
  }
  
  .post-block-meta {
	margin-bottom: 30px;
	font-size: 14px;
  }
  
  .post-block-views,
  .post-block-comments {
	margin-right: 30px;
  }
  
  .post-read-more {
	position: relative;
  }
  
  .post-read-more a,
  .post-read-more a:visited {
	color: #002e5b;
	font-weight: 700;
	font-size: 14px;
	position: relative;
	-webkit-transition: all 300ms linear 0ms;
	-khtml-transition: all 300ms linear 0ms;
	-moz-transition: all 300ms linear 0ms;
	-ms-transition: all 300ms linear 0ms;
	-o-transition: all 300ms linear 0ms;
	transition: all 300ms linear 0ms;
  }
  
  .post-read-more a:hover {
	letter-spacing: 1.5px;
  }
  
  .post-read-more a::before {
	content: '\f061';
	font-family: "Font Awesome 5 Pro";
	font-style: normal;
	font-weight: 300;
	right: 140px;
	-webkit-transition: all 300ms linear 0ms;
	-khtml-transition: all 300ms linear 0ms;
	-moz-transition: all 300ms linear 0ms;
	-ms-transition: all 300ms linear 0ms;
	-o-transition: all 300ms linear 0ms;
	transition: all 300ms linear 0ms;
	margin-right: 7px;
  }
  
  .author-avater {
	margin-right: 15px;
  }
  
  .posted-by {
	font-size: 16px;
	font-weight: 700;
	color: #002e5b;
  }
  
  .posted-by a,
  .posted-by a:visited {
	color: #002e5b;
  }
  
  .post-block-footer {
	position: relative;
	display: block;
	margin-top: 40px;
  }
  
  .post-thumbnail {
	position: relative;
  }
  
  .video-post-icon {
	width: 80px;
	height: 80px;
	position: absolute;
	background: #fde428;
	color: #002e5b;
	z-index: 2;
	top: 50%;
	left: 50%;
	-webkit-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);
	text-align: center;
	line-height: 80px;
  }
  
  .quote-title {
	position: relative;
	padding-left: 100px;
  }
  
  .quote-title::before {
	font-family: Flaticon;
	font-size: 60px;
	font-style: normal;
	margin-left: 20px;
	color: #333;
	content: "\f12d";
	position: absolute;
	left: 0;
	top: 15px;
  }
  
  .post-quote .post-block-content {
	background: #fde428;
  }
  
  .page-link {
	padding: 15px;
	color: #001d23;
	font-size: 14px;
	font-weight: 700;
  }
  
  .page-item.active .page-link {
	z-index: 3;
	color: #002e5b;
	background-color: #fde428;
	border-color: #fde428;
  }
  
  /* sidebar widgets  */
  .finpress-sidebar {
	margin-left: 20px;
  }
  
  .widget-box {
	padding: 40px;
	background: #fff;
	margin-bottom: 40px;
  }
  
  .widget-title {
	font-size: 20px;
	font-weight: 700;
	color: #002e5b;
	position: relative;
	border-left: 2px solid #e6e6e6;
	padding-left: 30px;
	margin-bottom: 40px;
  }
  
  .author-social-accounts ul {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
	-ms-flex-pack: center !important;
	justify-content: center !important;
  }
  
  .author-social-accounts ul li {
	margin: 0px;
  }
  
  .author-social-accounts ul li a,
  .author-social-accounts ul li a:visited {
	color: #b3bed3;
	font-size: 14px;
	width: 30px;
	height: 30px;
	text-align: center;
	display: block;
	line-height: 30px;
  }
  
  .author-social-accounts ul li a:hover {
	background: #fde428;
	color: #002e5b;
  }
  
  .author-photo {
	max-width: 140px;
	margin: 0px auto;
  }
  
  .author-details,
  .author-photo {
	text-align: center;
  }
  
  .author-name {
	margin: 30px auto 25px;
  }
  
  .author-social-accounts {
	margin-top: 25px;
  }
  
  .search-input {
	height: 60px;
	background: #f9f9f9;
	border: none;
	padding: 5px 20px;
	max-width: calc(100% - 60px);
	width: 100%;
  }
  
  .search-submit {
	height: 60px;
	width: 60px;
	background: #fde428;
	color: #002e5b;
	border: none;
	font-size: 14px;
	text-align: center;
	float: right;
  }
  
  .rp-thumb {
	max-width: 80px;
	margin-right: 20px;
  }
  
  .post-title-sm {
	font-size: 16px;
	line-height: 22px;
	margin-bottom: 15px;
  }
  
  .post-title-sm a,
  .post-title-sm a:visited {
	color: #002e5b;
  }
  
  .recent-post-item:not(:last-child) {
	margin-bottom: 60px;
  }
  
  .post-categories ul {
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
  }
  
  .post-categories ul li {
	width: 100%;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
  }
  
  .post-categories ul li:not(:last-child) {
	margin-bottom: 10px;
  }
  
  .categories-count {
	background: #ffed6a;
	font-size: 14px;
	color: #002e5b;
	font-weight: 700;
	width: 50px;
	height: 50px;
	display: inline-block;
	text-align: center;
	line-height: 50px;
	
  }
  
  .post-categories ul li a {
	width: calc(100% - 50px);
	height: 50px;
	line-height: 50px;
	background: #f9f9f9;
	color: #002e5b;
	padding-left: 30px;
	position: relative;
	z-index: 1;
	font-size: 14px;
	font-weight: 700;
  }
  
  .post-categories ul li a::after {
	content: '';
	position: absolute;
	background: #fde428;
	width: 0px;
	height: 100%;
	left: 0;
	-webkit-transition: all 300ms linear 0ms;
	-khtml-transition: all 300ms linear 0ms;
	-moz-transition: all 300ms linear 0ms;
	-ms-transition: all 300ms linear 0ms;
	-o-transition: all 300ms linear 0ms;
	transition: all 300ms linear 0ms;
	z-index: -1;
  }
  
  .post-categories ul li a:hover::after {
	width: 100%;
  }
  
  .social-widget ul {
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
  }
  
  .social-widget ul li {
	margin: 0px 5px;
  }
  
  .social-widget ul li a,
  .social-widget ul li a:visited {
	display: block;
	background: #f9f9f9;
	color: #002e5b;
	width: 40px;
	height: 40px;
	text-align: center;
	line-height: 40px;
	-webkit-transition: all 300ms linear 0ms;
	-khtml-transition: all 300ms linear 0ms;
	-moz-transition: all 300ms linear 0ms;
	-ms-transition: all 300ms linear 0ms;
	-o-transition: all 300ms linear 0ms;
	transition: all 300ms linear 0ms;
  }
  
  .social-widget ul li a:hover {
	background: #fde428;
  }
  
  .fp-tags-widget ul {
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
  }
  
  .fp-tags-widget ul li {
	display: inline-block;
	margin: 5px;
  }
  
  .fp-tags-widget ul li a,
  .fp-tags-widget ul li a:visited {
	background: #f9f9f9;
	color: #002e5b;
	font-size: 12px;
	font-weight: 700;
	display: block;
	padding: 10px 20px;
	text-transform: uppercase;
	-webkit-transition: all 300ms linear 0ms;
	-khtml-transition: all 300ms linear 0ms;
	-moz-transition: all 300ms linear 0ms;
	-ms-transition: all 300ms linear 0ms;
	-o-transition: all 300ms linear 0ms;
	transition: all 300ms linear 0ms;
  }
  
  .fp-tags-widget ul li a:hover {
	background: #fde428;
  }

</style>
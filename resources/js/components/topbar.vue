
<template>
    <div>
        <div class="main_area">
        <header class="header-top">
          <!-- For English -->
          <nav v-if="menuE" :class="changeMenu">
            <div class="container-full">
            <div class="row justify-content-center">
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">Who We Are</a>
                    <ul class="sub-menu1">
                      <li><a href="#" @click.prevent="aboutus">About Us</a></li>
                      <li><a href="#">Mission</a></li>
                      <li><a href="#">Goal</a></li>
                      <li><a href="#">Values</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href @click.prevent="category">What We Do</a>
                    <ul class="sub-menu1">
                      <li><a href @click.prevent="food_processing">Food Processing</a>
                        <ul class="sub-menu">
                          <li><a href @click.prevent="food_processing_one">Business1</a></li>
                          <li><a href="#">Business2</a></li>
                          <li><a href="#">Business3</a></li>
                          <li><a href="#">Business4</a></li>
                        </ul>
                      </li>
                      <li><a href @click.prevent="plastic">Plastic Rubber & Melamine</a></li>
                      <li><a href @click.prevent="textile">Textile and Apparels</a></li>
                      <li><a href @click.prevent="hospitality">Hospitality Service</a></li>
                      <li><a href @click.prevent="infrustructure">Infrustructure & Development</a></li>
                      <li><a href @click.prevent="realestate">Real Estate</a></li>
                      <li><a href @click.prevent="media">Media & Entertainment</a></li>
                    </ul>
                  </li>
                  
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href @click.prevent="achievement">Our Achievement</a>
                    <ul class="img-sub-menu1">
                      <li><a href @click.prevent="achievement"><img src="images/achive-ment.jpg"></a></li>
                      <li><a href @click.prevent="achievement"><img src="images/achive-ment.jpg"></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#" @click.prevent="commitment">Our commitment</a>
                    <ul class="img-sub-menu2">
                      <li><a href @click.prevent="commitment"><img src="images/commetment.jpg"></a></li>
                      <li><a href @click.prevent="commitment"><img src="images/commetment.jpg"></a></li>
                      <li><a href @click.prevent="commitment"><img src="images/commetment.jpg"></a></li>
                      <li><a href @click.prevent="commitment"><img src="images/commetment.jpg"></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href @click.prevent="career">Career</a></li>
                  <li><a href @click.prevent="investor_relation">Investor Relation</a></li>
                  <li><a href @click.prevent="news">News and Events</a></li>
                  <li><a href @click.prevent="contactus">Contact us</a></li>
                </ul>
                <div class="social-icon">
                  <ul class="d-flex">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </nav>
          <!-- For Arabic -->
          <nav v-if="menuA" :class="changeMenu">
            <div class="container-full">
            <div class="row justify-content-center">
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">من نحن</a>
                    <ul class="sub-menu1">
                      <li><a href="#" @click.prevent="aboutus">Who We Are</a></li>
                      <li><a href="#">Who We Are</a></li>
                      <li><a href="#">Who We Are</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href @click.prevent="category">الذي نفعله</a>
                    <ul class="sub-menu1">
                      <li><a href="#" @click.prevent="food_processing">Food Processing</a>
                        <ul class="sub-menu">
                          <li><a href="#" @click.prevent="food_processing_one">Business1</a></li>
                          <li><a href="#">Business2</a></li>
                          <li><a href="#">Business3</a></li>
                          <li><a href="#">Business4</a></li>
                        </ul>
                      </li>
                      <li><a href @click.prevent="plastic">Plastic Rubber & Melamine</a></li>
                      <li><a href @click.prevent="textile">Textile and Apparels</a></li>
                      <li><a href @click.prevent="hospitality">Hospitality Service</a></li>
                      <li><a href @click.prevent="infrustructure">Infrustructure & Development</a></li>
                      <li><a href @click.prevent="realestate">Real Estate</a></li>
                      <li><a href @click.prevent="media">Media & Entertainment</a></li>
                    </ul>
                  </li>
                  
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href @click.prevent="achievement">إنجاز</a>
                    <ul class="img-sub-menu1">
                      <li><a href @click.prevent="achievement"><img src="images/achive-ment.jpg"></a></li>
                      <li><a href @click.prevent="achievement"><img src="images/achive-ment.jpg"></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">التزام</a>
                    <ul class="img-sub-menu2">
                      <li><a href="#"><img src="images/commetment.jpg"></a></li>
                      <li><a href="#"><img src="images/commetment.jpg"></a></li>
                      <li><a href="#"><img src="images/commetment.jpg"></a></li>
                      <li><a href="#"><img src="images/commetment.jpg"></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href @click.prevent="career">مسار وظيفي</a></li>
                  <li><a href @click.prevent="investor_relation">مسار وظيفي</a></li>
                  <li><a @click.prevent="news" href>مسار وظيفي</a></li>
                  <li><a href @click.prevent="contactus">مسار وظيفي</a></li>
                </ul>
                <div class="social-icon">
                  <ul class="d-flex">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </nav>
          <!-- For German -->
          <nav v-if="menuG" :class="changeMenu">
            <div class="container-full">
            <div class="row justify-content-center">
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">Wer wir sind</a>
                    <ul class="sub-menu1">
                      <li><a href="#">Who We Are</a></li>
                      <li><a href="#">Who We Are</a></li>
                      <li><a href="#">Who We Are</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">Was wir tun</a>
                    <ul class="sub-menu1">
                      <li><a href="#">Business Categories1</a>
                        <ul class="sub-menu">
                          <li><a href="#">Business1</a></li>
                          <li><a href="#">Business2</a></li>
                          <li><a href="#">Business3</a></li>
                          <li><a href="#">Business4</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Business Categories2</a></li>
                      <li><a href="#">Business Categories3</a></li>
                      <li><a href="#">Business Categories4</a></li>
                      <li><a href="#">Business Categories5</a></li>
                    </ul>
                  </li>
                  
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">Leistung</a>
                    <ul class="img-sub-menu1">
                      <li><a href="#"><img src="images/achive-ment.jpg"></a></li>
                      <li><a href="#"><img src="images/achive-ment.jpg"></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">Engagement</a>
                    <ul class="img-sub-menu2">
                      <li><a href="#"><img src="images/commetment.jpg"></a></li>
                      <li><a href="#"><img src="images/commetment.jpg"></a></li>
                      <li><a href="#"><img src="images/commetment.jpg"></a></li>
                      <li><a href="#"><img src="images/commetment.jpg"></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">Werdegang</a></li>
                  <li><a href="#">Investor Relation</a></li>
                  <li><a href="#">News and Events</a></li>
                  <li><a href="#">Contact us</a></li>
                </ul>
                <div class="social-icon">
                  <ul class="d-flex">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </nav>
          <!-- For French -->
          <nav v-if="menuF" :class="changeMenu">
            <div class="container-full">
            <div class="row justify-content-center">
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">Qui nous sommes</a>
                    <ul class="sub-menu1">
                      <li><a href="#">à propos de nous</a></li>
                      <li><a href="#">mission</a></li>
                      <li><a href="#">objectif</a></li>
                      <li><a href="#">valeurs</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">ce que nous faisons</a>
                    <ul class="sub-menu1">
                      <li><a href="#">Business Categories1</a>
                        <ul class="sub-menu">
                          <li><a href="#">Business1</a></li>
                          <li><a href="#">Business2</a></li>
                          <li><a href="#">Business3</a></li>
                          <li><a href="#">Business4</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Business Categories2</a></li>
                      <li><a href="#">Business Categories3</a></li>
                      <li><a href="#">Business Categories4</a></li>
                      <li><a href="#">Business Categories5</a></li>
                    </ul>
                  </li>
                  
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">réussite</a>
                    <ul class="img-sub-menu1">
                      <li><a href="#"><img src="images/achive-ment.jpg"></a></li>
                      <li><a href="#"><img src="images/achive-ment.jpg"></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">engagement</a>
                    <ul class="img-sub-menu2">
                      <li><a href="#"><img src="images/commetment.jpg"></a></li>
                      <li><a href="#"><img src="images/commetment.jpg"></a></li>
                      <li><a href="#"><img src="images/commetment.jpg"></a></li>
                      <li><a href="#"><img src="images/commetment.jpg"></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <ul class="menu_area">
                  <li><a href="#">carrière</a></li>
                  <li><a href="#">Investor Relation</a></li>
                  <li><a href="#">News and Events</a></li>
                  <li><a href="#">Contact us</a></li>
                </ul>
                <div class="social-icon">
                  <ul class="d-flex">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </nav>
          <nav class="visiable-menu">
            <div class="container">
              <div class="row">
                <div class="col-xs-4 col-sm-4  col-md-4 bengal-logo-area d-flex justify-content-sm-center justify-content-xs-center">
                  <a href="#"  @click.prevent="homeClicked" ><img src="/images/logo.jpg" alt="Bengal Logo"></a>
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 d-flex align-items-center justify-content-md-end">
                  <div class="lnch d-flex align-items-center justify-content-sm-center">
                      <div class="language">
                      <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Language 
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" @click.prevent="clickEnglish" href="#">English</a>
                            <a class="dropdown-item" @click.prevent="clickGerman" href="#">Garman</a>
                            <a class="dropdown-item" @click.prevent="clickArabic" href="#">Arabic</a>
                            <a class="dropdown-item" @click.prevent="clickFrench" href="#">Franch</a>
                          </div>
                      </div>
                    </div>

                     <div class="menuandsearch d-flex">
                      <div class="search-item">
                        <div class="search-icon">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  
                     <div class="menu-area">
                      <div class="menu-icon" @click.prevent="enableMenu">
                        <a v-if="test == true" href="#"><i class="fa fa-align-right" aria-hidden="true"></i></a>
                        <a v-else href="#"><i class="fas fa-times" aria-hidden="true"></i></a>
                      </div>
                    </div>
                  </div>
                
                  <!-- <div class="menuandsearch d-flex">
                    <div class="search-item">
                      <div class="search-icon">
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                  <div class="menu-area">
                    <div class="menu-icon" @click.prevent="enableMenu">
                      <a v-if="test == true" href="#"><i class="fa fa-align-right" aria-hidden="true"></i></a>
                      <a v-else href="#"><i class="fas fa-times" aria-hidden="true"></i></a>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </nav>
          
        </header>
        

        <div v-if="videoarea" class="bengal-video-area">
            <div class="container-fluid">
              <div class="row">
              
                <div class="col-sm-12 justify-content-center">
                  <video-background 
                    src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
                    style=" height: 100vh;"
                >
                    <div class="bengal-title">
                    <h1>Bengal Group<br> Of Industries</h1>
                    <p>One of the leading and fastest growing industries in Bangladesh</p>
                  </div>
                </video-background>
                 
                </div>
              </div>
            </div>
        </div>

      <!-- Hero -->
      <section v-if="heroArea" id="bengal-about-header" class="hero p-0 odd featured">
          <div class="swiper-container no-slider animation slider-h-50 slider-h-auto">
              <div class="swiper-wrapper">
                    <!-- Item 1 -->
                    <div class="swiper-slide slide-center">
                        <!-- Media -->
                        <img src="images/bangal-about.jpg" alt="Full Image" class="full-image" data-mask="80">

                        <div class="slide-content row text-center">
                            <div class="col-12 mx-auto inner">
                                <div class="breadcumb-title">
                                  <h2>{{ title }}</h2>
                                  <p>{{ desc }}</p>
                                </div>
                                <!-- Content -->
                            </div>
                        </div>
                        <nav class="breadcrumb-menu">
                          <ol class="breadcrumb-nav">
                              <li class="breadcrumb-item"><a href="#" @click.prevent="homeClicked">Home</a></li>
                              <li class="breadcrumb-item"><a href="#">{{title}}</a></li>
                              
                          </ol>
                      </nav>
                    </div>
                </div>
          </div>
      </section>

</div>

    </div>
</template>

<script>
export default {
    props: {
        txt: {
            type: String
        }
    },
    created() {
        this.$root.$on('food', (e) => {
            this.food_processing()
        })
        this.$root.$on('plastic', (e) => {
            this.plastic()
        })
        this.$root.$on('textile', (e) => {
            this.textile()
        })
        this.$root.$on('hospitality', (e) => {
            this.hospitality()
        })
        this.$root.$on('infrustructure', (e) => {
            this.infrustructure()
        })
        this.$root.$on('realestate', (e) => {
            this.realestate()
        })
        this.$root.$on('media', (e) => {
            this.media()
        })

        this.$root.$on('category', (id) => {
            if(id == 1){
              this.food_processing()
            }else if(id == 2){
              this.plastic()
            }else if(id == 3){
              this.textile()
            }else if(id == 4){
              this.hospitality()
            }else if(id == 5){
              this.infrustructure()
            }else if(id == 6){
              this.realestate()
            }else if(id == 7){
              this.media()
            }
        })
     
    },
    data(){
        return {
            url: 'http://192.168.1.6:8002/',
            menus: [],
            submenus: [],
            test: true,
            bengalmenu1: false,
            videoarea: true,
            heroArea: false,
            changeMenu: 'bengalmenu d-none d-md-block',
            english: 'English',
            german: 'German',
            french: 'French',
            arabic: 'Arabic',
            menuE: false,
            menuG: false,
            menuF: false,
            menuA: false,
            title: '',
            desc: '',
            valuee: {
              lang: '', title: ''
            }


        }
    },
    methods: {
      getBredcrumbs(title){
        this.valuee.title = title
        axios.get(this.url + 'api/getBredcrumbs', {params: this.valuee})
          .then(({data}) => {
            this.title = data.title
            this.desc = data.desc
          })
      },
      getMenu(){
        axios.get(this.url + 'api/getMenuFront')
          .then(({data}) => {
            this.menus = data.menus
            this.submenus = data.submenus
            //console.log(this.menus)
            //console.log(this.submenus)
          })
      },
      enableMenu(){
        if(this.test == true){
          this.menuE = true
          this.changeMenu = 'bengalmenu d-none d-md-block active'
          this.test = false
          //this.$root.$emit('english', this.menuE)
          //alert('Hi')
        }else{
          this.menuE = false
          this.changeMenu = 'bengalmenu d-none d-md-block'
          this.test = true
        }
      },
      clickEnglish(){
          this.$root.$emit('english', this.english)
          this.menuE = true
          this.menuA = false
          this.menuG = false
          this.menuF = false
          //this.$emit()
      },
      clickGerman(){
          this.$root.$emit('german', this.german)
          this.menuE = false
          this.menuA = false
          this.menuG = true
          this.menuF = false
      },
      clickArabic(){
          this.$root.$emit('arabic', this.arabic)
          this.menuE = false
          this.menuA = true
          this.menuG = false
          this.menuF = false
      },
      clickFrench(){
          this.$root.$emit('french', this.french)
          this.menuE = false
          this.menuA = false
          this.menuG = false
          this.menuF = true
      },
      homeClicked(){
        this.$router.push('/')
        this.heroArea = false
        this.videoarea = true
      },
      aboutus(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true
        //this.bredcrumbs = Object.em
        this.title = ''
        this.desc = ''
        this.getBredcrumbs('About Us')

        if(this.menuE == true){
          //this.getBredcrumbs('About Us')
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        
        this.$router.push('/about-us')
       
      },
      achievement(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Achievement')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        
        this.$router.push('/achievement')
       
      },
      career(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Career')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/career')
      },
      news(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('News and Events')
        
        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/news')
      },
      investor_relation(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Investor Relation')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/investor-relation')
      },
      category(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Business Category')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/category')
      },
      food_processing(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Food Processing')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/food-processing')
      },
      food_processing_one(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true
        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/food-processing-one')
      },
      commitment(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Commitment')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/commitment')
      },
      plastic(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Plastic & Melamine')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/plastic')
      },
      textile(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Textile & Apparels')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/textile')
      },
      hospitality(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Hospitality Service')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/hospitality')
      },
      infrustructure(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Infrastructure & Development')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/infrustructure')
      },
      realestate(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Real Estate')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/realestate')
      },
      media(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true

        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Media & Entertainment')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        this.$router.push('/media')
      },
      contactus(){
        this.videoarea = false
        this.heroArea = true
        this.changeMenu = 'bengalmenu d-none d-md-block'
        this.test = true
        this.title = ''
        this.desc = ''
        this.getBredcrumbs('Contact Us')

        if(this.menuE == true){
          this.$root.$emit('english', this.english)
        }
        if(this.menuG == true){
          this.$root.$emit('german', this.german)
        } 
        if(this.menuF == true){
          this.$root.$emit('french', this.french)
        }
        if(this.menuA == true){
           this.$root.$emit('arabic', this.arabic)
        }
        
        this.$router.push('/contact-us')
       
      },
    }
    

}
</script>

<style scoped>
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
container-fluid {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}

/**menu Area Start **/
.bengalmenu {
	background: rgb(0,48, 135, .8);
}
.menu_area, .sub-menu1, ul {
	list-style: none;
	padding: 0;
	position: relative;
	
}
.menu_area > li > a {
	color: #fff;
	font-size: 30px;
}

.sub-menu {
    background: #2f2f2f;
    left: 0;
    position: absolute;
    top: 100%;
    width: 200px;
    visibility: hidden;
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: top;
    transform-origin: top;
	box-shadow: 0 7px 10px rgba(0,0,0,.1);
	
}
.sub-menu1 li{
	transition: .5s;
}
.sub-menu1 li:hover {
	background: #fff;
	padding-left: 10px;
}
.sub-menu1 li:hover > a {
	color: #003087;
}
.sub-menu1 li a:hover {
	text-decoration: none;
}
.sub-menu1 li:hover > .sub-menu{
    top: 0;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    opacity: 1;
    visibility: visible;
	z-index: 999;
	left: 60%;
}
.sub-menu1 li .sub-menu{
    left: 100%;
    top: 0;
}
.sub-menu1 li:hover > .sub-menu1 li .sub-menu{
    left: 100%;
    top: 0;
}
.sub-menu1 li:hover > .sub-menu li {
	padding-left: 10px;
}
.img-sub-menu1, .img-sub-menu2 {
	margin-top: 12px;
}
.img-sub-menu1 li:first-child{
	margin-bottom: 12px;
}
.img-sub-menu2 li:first-child{
	margin-bottom:5px;
}
.img-sub-menu2 li {
	display: inline-block;
}
.menu_area {
	border-right: 1px solid rgba(255, 255, 255, 0.17);
}
.bengalmenu {
	position: absolute;
	width: 100%;
	height: 400px;
	left: 0;
	bottom: 100%;
}
.bengalmenu::after {
	background: rgb(0,48, 135, .8);
	width: 100%;
	height: 100%;
	bottom: 100%;
	z-index: 99;
	content: "";
	display: block;
	position: absolute;
	z-index: -1;
}
.bengalmenu.active{
	top:100%
}

.sub-menu1 li a {
	border-bottom: 1px solid rgba(255, 255, 255, 0.17);
	padding-bottom: 5px;
  color: #eee;
	line-height: 36px;
}
.visiable-menu {
	padding-top: 20px;
}


/**header style **/
.menuandsearch {
	margin-right: 40px;
}
.menu-icon {
  background: #fff;
  width: 66px;
  height: 66px;
  border-radius: 50px;
  text-align: center;
  line-height: 66px;
  font-size: 30px;
  color: #0070ba;
}
.search-icon {
  font-size: 18px;
  color: #fff;
}
#dropdownMenuButton {
  color: #fff !important;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
}


.header-top {
position: relative;
z-index: 999;
}
#dropdownMenuButton{
	  color: #222;
	  background: no-repeat;
	  border: none;
  }
  .social-icon ul {
	  list-style: none;
	}
	.social-icon ul li{
	  margin-left:10px;
	}
  .menuandsearch i {
	margin-left: 10px;
}


/** Video Area Start **/
.bengal-video-area {
  width: 100vw;
  height: 100vh;
}
.bengal-video-area {
width: 100vw;
height: 100vh;
position: relative;
top: -224px;
background: rgba(0,0,0, .1);
}
/* .bengal-video-area::before {
background: rgba(0,0,0, .5);
width: 100%;
height: 100%;
content: "";
top: 0;
left: 0;
z-index: 99;
position: absolute;
} */
.bengal-title {
position: relative;
z-index: 99;
text-align: center;
margin-top: 24%;
}
.bengal-title h1 {
color: #fff;
font-size: 60px;
}
.bengal-title p {
color: #eee;
font-size: 16px;
}

/** About us Page Header Area  Start **/
.slide-content.row.text-center {
	position: absolute;
	left: 11%;
	top: 050%;
}
.swiper-slide.slide-center {
	position: relative;
}
.breadcumb-title {
	text-align: left;
	color: #fff;
}
.breadcrumb-menu {
	position: absolute;
	right: 22%;
	bottom: 0;
	background: #fff;
	padding: 20px;
}
.breadcrumb-menu ol {
	margin: 0;
	padding: 0;
	list-style: none;
}
.breadcrumb-menu ol li{
	display: inline-block;
}
.breadcrumb-menu ol li a{
	color: #0070ba;
}
.breadcumb-title p {
	position: relative;
	padding-left: 10px;
}
.breadcumb-title p::before {
	position: absolute;
	content: "";
	height: 20px;
	width: 2px;
	top: 0%;
	left: 0;
	background: #0070ba;
}
#bengal-about-header {
	position: relative;
	top: -148px;
}


/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 575px) and (min-width: 300px)  {
	.menuandsearch {
		margin-right: 20px;
	}
	.col-xs-4.bengal-logo-area img {
		width: 130px;
		text-align: center;
		margin: 30px auto;
	}
	.menu-icon {
		width: 40px;
		height: 40px;
		line-height: 40px;
		font-size: 26px;
		
	}
	.lnch.d-flex.justify-content-sm-center {
		margin-right: auto;
		margin-left: auto;
	}
  	.slide-content.row.text-center {
		top: 22%;
	}
	.site-title h2 {
		font-size: 36px;
	}
	.breadcrumb-menu {
		right: 23px;
	}
  .bengal-logo-area img {
    width: 130px;
    text-align: center;
    margin: 30px auto;
  }
	
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 767px) and (min-width: 576px)  {
	.slide-content.row.text-center {
		top: 20%;
	}
}
/* Medium devices (tablets, 768px and up)*/
@media only screen and (max-width: 991px) and (min-width: 768px)  {
	.menu_area > li > a {
		font-size: 24px;
	}
  .slide-content.row.text-center {
		top: 30%;
	}
	
}
/* Large devices (desktops, 992px and up)*/
@media only screen and (max-width: 1199px) and (min-width: 992px)  {
	.menu_area > li > a {
		font-size: 24px;
	}
  	.slide-content.row.text-center {
		top: 30%;
	}
	
}
/* Extra large devices (large desktops, 1200px and up)*/

@media only screen and (max-width: 1600px) and (min-width: 1200px)  {
	
}


</style>
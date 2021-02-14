<template>
<div >
  <div class="row">
    <div class="col-sm">
     <button type="button" class="btn video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-target="#myModal">
        <img src="/images/chairman.jpg" alt="" style="height:300px">
    </button>
    </div>
    <div class="col-sm">
      <h6>{{ abouts.heading }}</h6>
      <h3>{{ abouts.title }}</h3>
      <p>{{ abouts.desc }}</p>
    </div>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

        
        <div class="modal-body">

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>      
            <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="" id="video" allowfullscreen  allowscriptaccess="always"  allow="autoplay"></iframe>
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
  created() {
    this.data.tab_name = 'english'
    axios.get('http://192.168.1.6:8002/api/aboutus', {params: this.data})
        .then(({data}) => {
            this.abouts = data
            console.log(this.abouts)
        })

    this.$root.$on('english', (e) => {
        this.data.tab_name = e
        axios.get('http://192.168.1.6:8002/api/aboutus', {params: this.data})
            .then(({data}) => {
                this.abouts = data
                console.log(this.abouts)
            })
    })

    this.$root.$on('french', (e) => {
        this.data.tab_name = e
        axios.get('http://192.168.1.6:8002/api/aboutus', {params: this.data})
            .then(({data}) => {
                this.abouts = data
                console.log(this.abouts)
            })
    })

    this.$root.$on('arabic', (e) => {
        this.data.tab_name = e
        axios.get('http://192.168.1.6:8002/api/aboutus', {params: this.data})
            .then(({data}) => {
                this.abouts = data
                console.log(this.abouts)
            })
    })

    $(document).ready(function() {
  // Gets the video src from the data-src on each button
  var $videoSrc;
  $(".video-btn").click(function() {
    $videoSrc = $(this).attr("data-src");
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

  },
  data() {
    return {
        abouts: [],
        data: {
            tab_name: ''
        }
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
</style>
<template>
    <div>
        <div>
            <about-us></about-us>
            
            <counter-area></counter-area>

            <category-area></category-area>

            <map-area></map-area>

            <blog-area></blog-area>

            <achievement-area></achievement-area>

            <partner-area></partner-area>
        </div>
    </div>
</template>

<script>
export default {
     
    created() {
    //  $(document).ready(function() {
    //   // Gets the video src from the data-src on each button
    //   var $videoSrc;
    //   $("#vdo-btn").click(function() {
    //     $videoSrc = $(this).attr("href");
    //     console.log("button clicked" + $videoSrc);
    //   });

    //   // when the modal is opened autoplay it
    //   $("#myModal").on("shown.bs.modal", function(e) {
    //     console.log("modal opened" + $videoSrc);
    //     // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    //     $("#video").attr(
    //       "src",
    //       $videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=0"
    //     );
    //   });

    //   // stop playing the youtube video when I close the modal
    //   $("#myModal").on("hide.bs.modal", function(e) {
    //     // a poor man's stop video
    //     $("#video").attr("src", $videoSrc);
    //   });

    //   // document ready  
    //   });
    },
    data() {
        return {
           
        }
    },
    methods: {
       
    }
}
</script>

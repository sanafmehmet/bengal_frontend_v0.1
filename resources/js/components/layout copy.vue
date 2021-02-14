<template>
    <div>
        <div class="main-wrapper">

            <top-bar></top-bar>

            <div class="page-wrapper">
             
                <div class="container-fluid">
                  
                    <router-view></router-view>
                   
                </div>
            </div>

            <footer-area></footer-area>
            
        </div>

    </div>
</template>

<script>
export default {
    created() {
        // this.$root.$on('english', (e) => {
        //     this.value = e
        // })
    },
    data() {
        return {
            value: ''
        }
    }
}
</script>
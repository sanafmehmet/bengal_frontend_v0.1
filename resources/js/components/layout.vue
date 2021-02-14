<template>
    <div>
        <top-bar></top-bar>

        <router-view :lang="this.lang"></router-view>

        <footer-area></footer-area>
     

    </div>
</template>

<script>
export default {
    created() {
        this.$root.$on('english', (e) => {
            this.lang = e
            
        })
        this.$root.$on('german', (e) => {
            this.lang = e
            
        })
        this.$root.$on('french', (e) => {
            this.lang = e
            
        })
        this.$root.$on('arabic', (e) => {
            this.lang = e
            
        })
        
    },
    data() {
        return {
            lang: ''
        }
    }
}
</script>
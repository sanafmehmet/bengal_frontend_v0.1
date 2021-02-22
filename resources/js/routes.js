
import Home from './components/home.vue'

import AboutUs from './components/aboutus/aboutus.vue'
import Career from './components/career/career.vue'
import News from './components/news/news.vue'
import NewsDetails from './components/news/news_details.vue'
import InvestorRelation from './components/investor_relation/investor_relation.vue'
import FoodProcessing from './components/food_processing/food_processing.vue'
import FbOne from './components/food_processing/fp_one.vue'
import Commitment from './components/commitment/commitment.vue'

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/about-us', component: AboutUs, name: 'about-us', props:true },
    { path: '/career', component: Career, name: 'career' },
    { path: '/news', component: News, name: 'news' },
    { path: '/news_details', component: NewsDetails, name: 'news' },
    { path: '/investor-relation', component: InvestorRelation, name: 'investor-relation' },
    { path: '/food-processing', component: FoodProcessing, name: 'food-processing' },
    { path: '/food-processing-one', component: FbOne, name: 'food-processing-one' },
    { path: '/commitment', component: Commitment, name: 'commitment' },

]
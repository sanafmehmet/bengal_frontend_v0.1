
import Home from './components/home.vue'

import AboutUs from './components/aboutus/aboutus.vue'
import Career from './components/career/career.vue'
import News from './components/news/news.vue'
import NewsDetails from './components/news/news_details.vue'
import InvestorRelation from './components/investor_relation/investor_relation.vue'
import MainCategory from './components/category/main_category.vue'
import FoodProcessing from './components/category/food_processing/food_processing.vue'
import FoodProcessing_one from './components/category/food_processing/fp_one.vue'
import Plastic from './components/category/plastic_melamine.vue'
import Textile from './components/category/textile_apparels.vue'
import Hospitality from './components/category/hospitality_service.vue'
import Infrustructure from './components/category/infrustructure.vue'
import RealEstate from './components/category/realestate.vue'
import Media from './components/category/media.vue'
import Commitment from './components/commitment/commitment.vue'
import Achievement from './components/achievement/achievement.vue'
import AchievementDetails from './components/achievement/achieve_details.vue'
import ContactUs from './components/contactus/contactus.vue'

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/about-us', component: AboutUs, name: 'about-us', props:true },
    { path: '/achievement', component: Achievement, name: 'achievement' },
    { path: '/achieve_details', component: AchievementDetails, name: 'achieve_details', props: true },
    { path: '/career', component: Career, name: 'career' },
    { path: '/news', component: News, name: 'news' },
    { path: '/news_details', component: NewsDetails, name: 'news_details', props: true },
    { path: '/investor-relation', component: InvestorRelation, name: 'investor-relation' },
    { path: '/category', component: MainCategory, name: 'category' },
    { path: '/food-processing', component: FoodProcessing, name: 'food-processing' },
    { path: '/food-processing-one', component: FoodProcessing_one, name: 'food-processing-one' },
    { path: '/plastic', component: Plastic, name: 'plastic' },
    { path: '/textile', component: Textile, name: 'textile' },
    { path: '/hospitality', component: Hospitality, name: 'hospitality' },
    { path: '/infrustructure', component: Infrustructure, name: 'infrustructure' },
    { path: '/realestate', component: RealEstate, name: 'realestate' },
    { path: '/media', component: Media, name: 'media' },
    { path: '/commitment', component: Commitment, name: 'commitment' },
    { path: '/contact-us', component: ContactUs, name: 'contactus' },

]
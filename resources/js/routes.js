import AllPost from './components/AllPost.vue';
import CreatePost from './components/CreatePost.vue';
import CreateVideo from './components/CreateVideo.vue';
import EditPost from './components/EditPost.vue';
import EditProfile from './components/EditProfile.vue';
import EditVideo from './components/EditVideo.vue';
import EditComment from './components/EditComment.vue';
import CommentsPost from './components/CommentsPost.vue';
 
export const routes = [
    {
        path: '/login',
        name: 'Login', 
        component: () => import('./components/Login.vue'),
        meta: {
            guest: true
    }
    },
    {
        path: '/register',
        name: 'Register', 
        component: () => import('./components/Register.vue')
    },
    {
        path: '/video',
        name: 'Video', 
        component: () => import('./components/AllVideo.vue')
    },
    {
        path: '/',
        name: 'home',
        component: AllPost,
        meta: {
            auth: true
        }
    },
    {
        path: '/profile',
        name: 'Profile', 
        component: () => import('./components/Profile.vue'),
        meta: {
          auth: true
        }
    },
    {
        name: 'create',
        path: '/create',
        component: CreatePost
    },
    {
        name: 'createVideo',
        path: '/create/video',
        component: CreateVideo
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditPost
    },
    {
        name: 'updateProfile',
        path: '/update/profile',
        component: EditProfile
    },
    {
        name: 'editVideo',
        path: '/edit/video/:id',
        component: EditVideo
    },
    {
        name: 'editComment',
        path: '/comments/edit/:id',
        component: EditComment
    },
    {
        name: 'comments',
        path: '/comments/:id',
        component: CommentsPost
    }
    
];
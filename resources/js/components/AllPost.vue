<template>
    <div>
        <h2 class="text-center">Postingan Terbaru</h2>
        <div class="row">
            <div class="col-md-6" v-for="post in posts" :key="post.id">
                <div class="card mb-4">
                    <img class="card-img-top mx-auto d-block" v-bind:src="post.photo" style="height: 15rem; width: -webkit-fill-available;">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.user.name }}</h5>
                        <p class="card-text">{{ post.caption }}</p>
                        <p class="card-text"><small class="text-muted">{{ post.likes }} likes this post</small></p>
                        <p class="card-text"><small class="text-muted">Posted at {{ new Date(post.created_at).getDate() + "-" +( new Date(post.created_at).getMonth() + 1) + "-" + new Date(post.created_at).getFullYear()}}</small></p>
                        <template v-if="isLoggedIn">
                            <button href="#" class="btn btn-primary" @click="likesPost(post.id)">Like</button>
                            <router-link :to="{name: 'comments', params: { id: post.id }}" class="btn btn-warning">Comment</router-link>
                        </template>
                        <template v-if="user.id === post.user.id">
                            <button class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
                            <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-success">Edit</router-link>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                posts: []
            }
        },
        computed: {
        ...mapGetters({
            isLoggedIn: 'isLoggedIn',
            user: 'user',
        })
        },
        created() {
            this.axios
                .get('http://sosmed-vue.herokuapp.com/api/posts/')
                .then(response => {
                    this.posts = response.data.data;
                })
                .catch(err => this.$swal('Terjadi Kesalahan'))

        },
        methods: {
            deletePost(id) { 
                this.axios
                    .delete(`http://sosmed-vue.herokuapp.com/api/posts/${id}`)
                    .then(response => {
                        this.$swal('Berhasil Menghapus Post');
                        let i = this.posts.map(data => data.id).indexOf(id);
                        this.posts.splice(i, 1)
                    })
                    .catch(err => this.$swal('Terjadi Kesalahan'))
            },
            likesPost(id) { 
                this.axios
                    .post(`http://sosmed-vue.herokuapp.com/api/posts/likes/${id}`)
                    .then(response => {
                        return this.axios.get('http://sosmed-vue.herokuapp.com/api/posts/')
                    })
                    .then(response => {
                        this.posts = response.data.data;
                        this.$swal('Berhasil Menyukai Post');
                    })
                    .catch(err => this.$swal('Terjadi Kesalahan'))
            }
        }
    }
</script>
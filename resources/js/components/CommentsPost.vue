<template>
    <div>
        <h3 class="text-center">Comments Post</h3>
        <div class="row">
            <div class="col-md-6 card mb-4">
                <img class="card-img-top mx-auto d-block" v-bind:src="'/' + post.photo" style="height: 15rem; width: -webkit-fill-available;">
                <div class="card-body">
                    <h5 class="card-title">{{ post.user.name }}</h5>
                    <p class="card-text">{{post.caption}}</p>
                    <p class="card-text"><small class="text-muted">{{post.likes}} likes this post</small></p>
                    <p class="card-text"><small class="text-muted">Posted at {{ new Date(post.created_at).getDate() + "-" +( new Date(post.created_at).getMonth() + 1) + "-" + new Date(post.created_at).getFullYear()}}</small></p>
                </div>
            </div>
            <div class="col-md-6">
                <div style="overflow-y: scroll; height: 300px;">
                    <div v-for="comment in comments" :key="comment.id">
                        <div class="card mb-4">
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text m-0">{{ comment.comment }}</p>
                                <p class="card-text m-0"><small class="text-muted">{{ comment.user.name }} : {{ new Date(comment.created_at).getDate() + "-" +( new Date(comment.created_at).getMonth() + 1) + "-" + new Date(comment.created_at).getFullYear()}}</small></p>
                                <div v-if="comment.user.id === user.id">
                                    <button class="btn text-danger m-0 p-0" @click="deleteComment(comment.id)">Delete</button>
                                    <router-link :to="{name: 'editComment', params: { id: comment.id }}" class="btn text-success m-0 p-0">Edit</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="sendComment">
                    <div class="form-group">
                        <label>Type Your Comment Here!</label>
                        <textarea class="form-control" v-model="commentPayload.comment" cols="30" rows="2" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Comment</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                post: {},
                comments: [],
                commentPayload: {}
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
                .get(`http://sosmed-vue.herokuapp.com/api/comments/${this.$route.params.id}`)
                .then((res) => {
                    this.comments = res.data.data;
                    return this.axios.get(`http://sosmed-vue.herokuapp.com/api/posts/${this.$route.params.id}`)
                })
                .then(response => {
                    this.post = response.data.data;
                })
                .catch(err => this.$swal('Terjadi Kesalahan'))

        },
        methods: {
            deleteComment(id) { 
                this.axios
                    .delete(`http://sosmed-vue.herokuapp.com/api/comments/${id}`)
                    .then(response => {
                        this.$swal('Berhasil Menghapus Comment');
                        let i = this.comments.map(data => data.id).indexOf(id);
                        this.comments.splice(i, 1)
                    });
            },
            sendComment() {
                this.commentPayload.post_id = this.$route.params.id
                this.axios
                    .post(`http://sosmed-vue.herokuapp.com/api/comments`, this.commentPayload)
                    .then((res) => {
                        this.$swal('Komentar Terkirim');
                        this.$router.go(0);
                    })
                    .catch(err => this.$swal('Terjadi Kesalahan'))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
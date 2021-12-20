<template>
    <div>
        <h2 class="text-center">Short Videos</h2>
        <router-link :to="{name: 'createVideo' }" class="btn float-right mb-5 btn-success">Upload Video</router-link>


        <div class="row">
            <div class="col-md-6" v-for="video in videos" :key="video.id">
                <div class="card mb-4">
                    <video @playing="viewsVideo(video.id)" class="mx-auto d-block" style="height: 15rem; width: -webkit-fill-available;" controls>
                        <source v-bind:src="video.video" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="card-body">
                        <h5 class="card-title">{{ video.user.name }}</h5>
                        <p class="card-text">{{ video.description }}</p>
                        <p class="card-text"><small class="text-muted">{{ video.views }} views this video</small></p>
                        <p class="card-text"><small class="text-muted">Posted at {{ new Date(video.created_at).getDate() + "-" +( new Date(video.created_at).getMonth() + 1) + "-" + new Date(video.created_at).getFullYear()}}</small></p>
                        <template v-if="isLoggedIn">
                            <button class="btn btn-danger" @click="deleteVideo(video.id)">Delete</button>
                            <router-link :to="{name: 'editVideo', params: { id: video.id }}" class="btn btn-success">Edit</router-link>
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
                videos: []
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
                .get('http://sosmed-vue.herokuapp.com/api/videos/')
                .then(response => {
                    this.videos = response.data.data;
                })
                .catch(err => this.$swal('Terjadi Kesalahan'))

        },
        methods: {
            deleteVideo(id) { 
                this.axios
                    .delete(`http://sosmed-vue.herokuapp.com/api/videos/${id}`)
                    .then(response => {
                        this.$swal('Berhasil Menghapus Video');
                        let i = this.videos.map(data => data.id).indexOf(id);
                        this.videos.splice(i, 1)
                    })
                    .catch(err => this.$swal('Terjadi Kesalahan'))

            },
            viewsVideo(id) { 
                this.axios
                    .post(`http://sosmed-vue.herokuapp.com/api/videos/views/${id}`)
                    .then(response => {
                        return this.axios.get('http://sosmed-vue.herokuapp.com/api/videos/')
                    })
                    .then(response => {
                        this.videos = response.data.data;
                    })
                    .catch(err => this.$swal('Terjadi Kesalahan'))

            }
        }
    }
</script>
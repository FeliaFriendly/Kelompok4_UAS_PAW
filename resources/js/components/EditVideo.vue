<template>
    <div>
        <h3 class="text-center">Edit Video</h3>
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="updateVideo">
                    <div class="form-group">
                        <label>Video</label>
                        <div class="custom-file mb-3">
                            <input type="file" ref="file" class="custom-file-input" @change="previewFiles($event)" required>
                            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                            <div class="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" v-model="video.description" cols="30" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-block btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                video: {}
            }
        },
        created() {
            this.axios
                .get(`http://sosmed-vue.herokuapp.com/api/videos/${this.$route.params.id}`)
                .then((res) => {
                    this.video = res.data.data;
                    console.log(res.data.data)
                })
                .catch(err => this.$swal('Terjadi Kesalahan'))

        },
        methods: {
            previewFiles(event) {
                console.log(event.target.files);
                this.video.video = this.$refs.file.files[0];
                if(this.video.video.size > (2 * 1024 * 1024)){
                    this.$swal('Max Video 2MB');
                }
            },
            updateVideo() {
                let formData = new FormData();
                formData.append('video', this.video.video);
                formData.append('description', this.video.description);
                formData.append('_method', 'put');

                this.axios
                    .post(`http://sosmed-vue.herokuapp.com/api/videos/${this.$route.params.id}`, formData,
                    { 
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((res) => {
                        this.$swal('Berhasil Mengupdate Video');
                        this.$router.push({ name: 'Video' });
                    })
                    .catch(err => this.$swal('Terjadi Kesalahan'))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
<template>
    <div>
        <h3 class="text-center">Create Post</h3>
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="addPost">
                    <div class="form-group">
                        <label>Photo</label>
                        <div class="custom-file mb-3">
                            <input type="file" ref="file" class="custom-file-input" @change="previewFiles($event)" required>
                            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                            <div class="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Caption</label>
                        <textarea class="form-control" v-model="post.caption" cols="30" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-block btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                post: {},
            }
        },
        methods: {
            previewFiles(event) {
                console.log(event.target.files);
                this.post.photo = this.$refs.file.files[0];
                if(this.video.photo.size > (2 * 1024 * 1024)){
                    this.$swal('Max Image 2MB');
                }
            },
            addPost() {
                let formData = new FormData();
                formData.append('photo', this.post.photo);
                formData.append('caption', this.post.caption);
                this.axios
                    .post('http://sosmed-vue.herokuapp.com/api/posts', formData,
                    { 
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        this.$swal('Berhasil Mengupload Post')
                        this.$router.push({ name: 'home' })
                    })
                    .catch(err => this.$swal('Terjadi Kesalahan'))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
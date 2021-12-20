<template>
    <div>
        <h3 class="text-center">Edit Profile</h3>
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="updateProfile">
                    <div class="form-group">
                        <label>Profile Photo</label>
                        <div class="custom-file mb-3">
                            <input type="file" ref="file" class="custom-file-input" @change="previewFiles($event)" required>
                            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                            <div class="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="profile.name" required>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="profile.email" required>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="profile.password" required>
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
                profile: {}
            }
        },
        created() {
            this.axios
                .get(`http://sosmed-vue.herokuapp.com/api/user`)
                .then((res) => {
                    this.profile = res.data.data;
                    console.log(res.data.data)
                })
                .catch(err => this.$swal('Terjadi Kesalahan'))


        },
        methods: {
            previewFiles(event) {
                console.log(event.target.files);
                this.profile.photo = this.$refs.file.files[0];
                if(this.profile.photo.size > (2 * 1024 * 1024)){
                    this.$swal('Max Video 2MB');
                }
            },
            updateProfile() {
                let formData = new FormData();
                formData.append('photo', this.profile.photo);
                formData.append('name', this.profile.name);
                formData.append('email', this.profile.email);
                formData.append('password', this.profile.password);
                formData.append('_method', 'put');

                this.axios
                    .post(`http://sosmed-vue.herokuapp.com/api/user`, formData,
                    { 
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((res) => {
                        return this.$store.dispatch('updateUser')
                    })
                    .then(() => {
                        this.$swal('Berhasil Mengupdate Profile')
                        this.$router.go(-1);
                    })
                    .catch(err => this.$swal('Terjadi Kesalahan'))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
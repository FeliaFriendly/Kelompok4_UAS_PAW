<template>
    <div>
        <h3 class="text-center">Edit Comment</h3>
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="updateComment">
                    <div class="form-group">
                        <label>Comment</label>
                        <textarea class="form-control" v-model="comment.comment" cols="30" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-block btn-primary">Update Comment</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                comment: {}
            }
        },
        created() {
            this.axios
                .get(`http://sosmed-vue.herokuapp.com/api/comments/details/${this.$route.params.id}`)
                .then((res) => {
                    console.log(res.data.data)
                    this.comment = res.data.data;
                })
                .catch(err => this.$swal('Gagal Mengupload Video'))

        },
        methods: {
            updateComment() {
                this.axios.put(`http://sosmed-vue.herokuapp.com/api/comments/${this.$route.params.id}`, this.comment)
                    .then((res) => {
                        this.$swal('Berhasil Update Comment')
                        this.$router.go(-1);
                    })
                    .catch(err => this.$swal('Terjadi Kesalahan'))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
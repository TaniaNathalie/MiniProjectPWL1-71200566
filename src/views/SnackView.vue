<template>
    <div>
        <img src="../assets/icecream.png">
        <img src="../assets/bakwan.png">
        <img src="../assets/tempe.png">
        <div>
            <span><b>Ice Cream</b></span>
            <span><b>Bakwan</b></span>
            <span><b>Mendoan</b></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SnackView',
    data(){
        return {
            nama: ''
        }
    },
    methods:{
        simpan(){
            this.$store.commit('add',this.nama);
            this.nama = '';
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

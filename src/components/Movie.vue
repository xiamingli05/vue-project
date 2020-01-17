<template>
    <div>
        <h2 v-text="count"></h2>
        <br/>
        <button @click="sub">减少33</button>
        <h2>这是电影内容</h2>
    </div>
</template>


<script>
import { mapState , mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState('count',['count'])
    },
    methods:{
        ...mapMutations('count',['subStore']),
        sub(){
            this.subStore(33);
        }
    }
}
</script>

<style scoped>
    h2{
        color: papayawhip;
    }
</style>
<template>
    <div>
        <h2 v-text="count"></h2>
        <br/>
        <button @click="add">增加66</button>
        <h2>这是首页内容</h2>
    </div>
</template>


<script>
import { mapState , mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState('count',['count'])
    },
    methods:{
        ...mapMutations('count',['addStore']),
        add(){
            this.addStore(66);
        }
    }
}
</script>

<style scoped>
    h2{
        color: aqua;
    }
</style>
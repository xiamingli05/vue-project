<template>
    <div>
        <div v-for="(item,idx) in playlist" :key="idx" class="playlist" @click='goDetail(item)'>
            <span v-text="item.id"></span>
            <span v-text="item.name"></span>
            <span v-text="item.time"></span>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            playlist:[
                {id:1,name:'阿凡达1',time:'2019-1-23'},
                {id:2,name:'阿凡达2',time:'2019-3-23'},
                {id:3,name:'阿凡达3',time:'2019-5-23'},
                {id:4,name:'阿凡达4',time:'2019-7-23'},
                {id:5,name:'阿凡达5',time:'2019-9-23'}
            ]
        }
    },
    methods:{
        goDetail(itm){
            this.$router.push('/film/'+itm.id+'/'+itm.time);
        }
    }
}
</script>

<style scoped>
    .playlist{
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
    }
    .playlist span{
        line-height: 56px;
    }
</style>
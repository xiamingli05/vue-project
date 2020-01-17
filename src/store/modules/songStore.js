import axios from 'axios';

const songStore= {
    namespaced:true,
    state:{
        list:[]
    },
    mutations:{
        updateSongList(state,payload){
            state.list=payload;
        }
    },
    actions:{
        getSongList(store){
            var url='http://localhost:9999/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=66335744187564680&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E9%82%93%E7%B4%AB%E6%A3%8B&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0';
            axios.get(url).then(res=>{
                var list1=res.data.data.song.list;
                store.commit('updateSongList',list1);
            }).catch(err=>{
                console.log(err,'请求失败');
                
            })
        }
    }
}

export default songStore;
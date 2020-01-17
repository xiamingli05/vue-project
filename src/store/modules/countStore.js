const countStore = {
    namespaced:true,
    state:{
        count:120
    },
    mutations:{
        addStore(state,payload){
            state.count+=payload;
        },
        subStore(state,payload){
            state.count-=payload;
        }
    }
}

export default countStore;
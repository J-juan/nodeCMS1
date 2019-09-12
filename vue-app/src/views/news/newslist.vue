<template>
  <div>
    <Header>文章列表</Header>
    <div>
      <ul>
        <li v-for="(item,index) in newsList" :key="index" @click="newsDetails(item.id)">
          <span>{{item.title}}</span>
          <span>{{item.time}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
      newsList: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios.get("http://localhost:8888/getNewsList").then(res => {
        console.log(res);
        this.newsList = res.data;
      });
    },
    newsDetails(id){
        this.$router.push({path:'/newsdetails',query:{id}})

        
    },
  }
};
</script>
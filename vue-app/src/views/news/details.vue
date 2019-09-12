<template>
  <div>
    <Header>新闻详情</Header>
    <div>
      <label>文档标题：</label>
      <input type="text" v-model="docTitle" placeholder="请输入文档标题" />
    </div>
    <div>
      <span>正文文档：</span>
      <UEtor :config="config" ref="ue" v-model="docMain"></UEtor>
      <input type="text" v-model="docMain" />
    </div>
    <div>
      <label>文档描述：</label>
      <textarea v-model="docDescription"></textarea>
    </div>
  </div>
</template>
<script>
import UEtor from "@/components/ueditor/editor";
import Header from "@/components/header/header";
export default {
  components: {
    Header,UEtor
  },

  data() {
    return {
       config: {
        initialFrameWidth: 1038,
        initialFrameHeight: 350
      },
      docTitle: "",
      docMain: "1",
      docDescription: "",
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios
        .get("http://localhost:8888/getNews/" + this.$route.query.id)
        .then(res => {
             this.docTitle=res.data[0].title;
             this.docDescription=res.data[0].descript;
             this.docMain=res.data[0].content;
        });
    }
  }
};
</script>
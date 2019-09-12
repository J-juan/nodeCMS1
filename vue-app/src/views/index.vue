<template>
  <div>
    <Header>{{header}}</Header>
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
    <button @click="submit">提交</button>
    <button @click="getList">获取数据</button>
  </div>
</template>
<script>
import UEtor from "../components/ueditor/editor";
import Header from "../components/header/header";
export default {
  components: {
    UEtor,
    Header
  },
  data() {
    return {
      config: {
        initialFrameWidth: 1038,
        initialFrameHeight: 350
      },
      header: "新建文档",
      docTitle: "",
      docDescription: "",
      docMain: "1"
    };
  },
  methods: {
      getList(){
          this.$axios.get("http://localhost:8888/dbList").then(res=>{
              console.log(res);
              
          })
      },
    submit() {
      let para = {
        title: this.docTitle,
        content: this.docMain,
        descript: this.docDescription
      };
      this.$axios
        .post("http://localhost:8888/db", this.$qs.stringify(para))
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
<template>
  <div id="UEtor" :docMain="docMain" @change="$emit('getUEditorContent', $event.target.docMain)">
    <script id="editor" type="text/plain"></script>
    {{docMain}}
    <button @click="getUEContent">保存</button>
  </div>
</template>
<script>
export default {
  name: "UEditor",
  props: {
    config: { type: Object },
    docMain: { type: String }
  },
  model: {
    prop: "docMain",
    event: "getUEditorContent"
  },
  data() {
    return {};
  },
  mounted() {},
  created() {
    this.editor = UE.getEditor("editor", this.config);
    if (this.editor) {
      this.editor.ready(editor => {
        this.editor.setContent(this.docMain);
      });
    }
  },
  //   watch: {
  //     dvocMain(val) {
  //       debugger;
  //       this.editor.setContent(val);
  //     }
  //   },
  methods: {
    getUEContent() {
      this.$emit("getUEditorContent", this.editor.getContentTxt());
    }
  },
  destroyed() {
    // this.editor.getContent();
  }
};
</script>
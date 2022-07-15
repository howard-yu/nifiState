<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">NIFI</a-menu-item>
        <a-menu-item key="2">AirFlow</a-menu-item>
        <a-menu-item key="3">DataHub</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Statue</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        NIFI-SFTP-DEV
        <a-progress type="circle" :percent="test[0]" status="exception" />
        NIFI-SFTP-QAS
        <a-progress type="circle" :percent="test[1]" />
        NIFI-SFTP-PRD
        <a-progress type="circle" :percent="test[2]" />
        NIFI-K8S-PRD
        <a-progress type="circle" :percent="test[3]" />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      WiDOM OP SYSTEM  ©2022 Created by OP TEAM
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(['2']),
    };
  },
  methods: {
    getnifistate() {
        const api = 'https://localhost:44396/api/NifiTool/NiFiState';
        this.$http.get(api).then(response => {
            console.log(response);
        });
    }
  },
  computed: {
    test () {
        return this.$store.state.nifistate
    }
  },
  mounted: {
    test () {
        this.$nextTick(() => {
            setInterval(this.getnifistate, 5000);
        });
    }
  }
});
</script>
<style>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>

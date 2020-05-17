<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="$store.commit('TOGGLE_APP_DRAWER')"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">
          生物学数据库快捷搜索
        </span>
      </v-toolbar-title>

      <template v-slot:extension>
        <v-tabs
          align-with-title
        >
          <template v-for="item in items">
            <v-tab
              v-if="item.name"
              :key="item.meta.title"
              :to="item.path"
            >{{ item.meta.title }}</v-tab>
          </template>
        </v-tabs>
      </template>

    </v-app-bar>

    <v-content style="margin-bottom: 50px">
      <v-row
        justify="center"
      >
        <v-col
          cols="8"
          sm="4"
        >
          <v-text-field
            clearable
            clear-icon="clear"
            label="从这里开始搜索"
            hint="填写一些英文关键字，点击下方图标即可搜索"
            outlined
            auto-grow
            rows="1"
            height="15"
            :value="searchText"
            @change="handleChange"
            append-outer-icon="history"
            @click:append-outer="handleToggleHistory"
          ></v-text-field>
        </v-col>
      </v-row>
      <router-view />
    </v-content>

    <history-drawer />

    <v-footer padless>
      <v-col
        class="py-4 text-center"
        cols="12"
      >
        本页面为模仿产物，源站点：
        <a href="https://bio-lin-187cad-1302119316.tcloudbaseapp.com/ComBio-CN.html">HERE</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import { routes } from '@/router'
import HistoryDrawer from './components/HistoryDrawer'

export default {
  name: 'App',
  components: { HistoryDrawer },
  data () {
    return {
      items: routes
    }
  },
  methods: {
    handleChange (e) {
      this.$store.commit('SET_SEARCH_TEXT', {
        text: e
      })
    },
    handleToggleHistory () {
      this.$store.commit('SET_HISTORY_VISIBLE', {
        visible: true
      })
    }
  },
  computed: {
    ...mapState(['searchText'])
  },
  created () {
    this.$store.commit('INIT_SEARCH_HISTORY')
  }
}
</script>

<style>
html {
  overflow: hidden;
}
</style>

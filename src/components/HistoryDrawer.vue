<template>
  <v-navigation-drawer
    absolute
    temporary
    right
    v-model="visible"
  >
    <v-list
      three-line
      subheader
    >
      <v-subheader>
        历史搜索记录
        <v-btn class="clear-btn" icon small @click="handleClearHistory">
          <v-icon>delete</v-icon>
        </v-btn>
      </v-subheader>
      <template
        v-for="item in $store.state.searchHistory"
      >
        <v-list-item :key="item.time">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.searchText || '空' }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <span>站点：</span>
              {{ item.target }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <span>时间：</span>
              {{ item.time | timeFormatter }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { dateFormat } from '@/utils'

export default {
  name: 'HistoryDrawer',
  filters: {
    timeFormatter (time) {
      if (!time) return '-'
      const date = new Date(time)
      return dateFormat('YYYY-mm-dd HH:MM', date)
    }
  },
  computed: {
    visible: {
      get () {
        return this.$store.state.showHistory
      },
      set (val) {
        if (val) return
        this.$store.commit('SET_HISTORY_VISIBLE', {
          visible: false
        })
      }
    }
  },
  methods: {
    handleClearHistory () {
      this.$store.commit('CLEAR_SEARCH_HISTORY')
    }
  }
}
</script>

<style>
.clear-btn {
  position: absolute !important;
  right: 10px;
}
</style>

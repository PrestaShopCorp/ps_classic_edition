<script setup lang="ts">
import { RouterView } from "vue-router";
import { useApplicationStore } from "@/common/stores/useApplicationStore";
import HomepageSkeleton from "@/common/components/HomepageSkeleton.vue";

const { isLoading } = useApplicationStore();
</script>

<template>
  <Suspense>
    <div class="puik-style">
      <HomepageSkeleton v-if="isLoading()" />
      <RouterView v-else />
    </div>
  </Suspense>
</template>

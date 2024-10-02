<template>
  <puik-card
    variant="blue"
    class="flex flex-row items-center shrink-0 px-4 py-6 gap-6 sm:shrink sm:p-8 xl:py-[34px] 2xl:py-[38px]"
  >
    <div class="w-1/3">
      <img class="mx-auto" :src="bloc.image.src" />
    </div>
    <div class="w-2/3">
      <h3 class="puik-h4 font-bold md:custom-puik-h3">
        {{ bloc.title }}
      </h3>
      <p class="puik-body-default-bold">
        {{ bloc.subTitle }}
      </p>
      <div class="my-4 text-xs md:text-sm">
        {{ bloc.text }}
      </div>
      <puik-button
        variant="primary"
        :target="bloc.link.target"
        :href="bloc.link.href"
        size="md"
        class="h-auto"
        :left-icon="bloc.link.icon"
      >
        {{ bloc.link.text ?? "Go" }}
      </puik-button>
    </div>
  </puik-card>
</template>

<script lang="ts" setup>
import { type HomepageDynamicBloc } from "@/common/gql/graphql";

defineProps<{ bloc: HomepageDynamicBloc }>();
</script>

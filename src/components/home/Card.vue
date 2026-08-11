<template>
  <UTooltip
    :delay-duration="0"
    :text="description"
    :ui="{
      content: 'h-full w-96',
      text: 'overflow-visible text-clip whitespace-normal'
    }"
  >
    <UBlogPost
      variant="subtle"
      :title="title"
      :description="description"
      :image="`/images/${id}.png`"
      :to="`/preview/${id}`"
      :ui="{ image: 'object-center', description: 'line-clamp-5' }"
      :badge="
        label
          ? {
              label: label,
              color: 'primary',
              variant: 'solid'
            }
          : ''
      "
    />
  </UTooltip>
</template>

<script lang="ts" setup>
defineProps<{
  id: string
  title: string
  description: string
  label?: string
}>()
</script>

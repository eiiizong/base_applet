<template>
  <div class="page-content-wrapper uno-flex uno-flex-col">
    <div class="content uno-flex-1 uno-overflow-hidden">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
  .page-content-wrapper {
    flex: 1;
    width: 100%;
    padding: 2.5rem 1.875rem 3.375rem;
    box-sizing: border-box;
    .content {
      width: 100%;
      background-color: rgba(#fff, 0.9);
      border: 0.125rem solid #fff;
      box-sizing: border-box;
      border-radius: 0.25rem;
      padding: 0;
      box-sizing: border-box;
    }
  }
</style>

<template>
  <div>
    &#x1F4A1; {{ $page.readingTime.text }}
    <div
      style="width: 4rem; height: .4rem; margin: .1rem 0rem 1rem .3rem; background-color: #5469d4;"
    ></div>
    <div class="readingtime">
    </div>
    <p>{{$page.frontmatter.description}}</p>
  </div>
</template>

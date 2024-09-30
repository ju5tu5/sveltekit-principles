
<script>
  import {Header, Footer} from '$lib'
  let title = 'test'
</script>

<Header bind:title={title} />

<main>
  <slot/>
</main>

<Footer />
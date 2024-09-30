<script>
  import { page } from '$app/stores'

  console.log($page.status)
</script>


<h1>Er gaat iets mis?!</h1>
<p>{$page.status} - {$page.error.message}</p>
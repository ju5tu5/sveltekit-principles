<script>
  export let data
  // console.log(data) 

  let name = 'world'
  $: shout = name + ' rocks!'

</script>

<input bind:value={name} >

<p>Wow wat een topvoorbeeld!</p>
<p>Hello {name}!</p>
<p>{shout}</p>
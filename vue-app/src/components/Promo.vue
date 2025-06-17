<template>
  <article>
    <h3>Promo.vue</h3>
    <p>set up a 3-column promo section with the three main reasons for coming to 404 Not Found</p>
  </article>
  <section id="promo">
    <article>
      <h3>What you'll do in 582</h3>
      <p>Focus on design including:</p>
      <ul>
        <li>design theory & practice</li>
        <li>graphic design for print and digital</li>
        <li>web design and development</li>
        <li>motion graphics and video production</li>
        <li>emerging technologies such as realtime interactive media and 3d printing</li>
      </ul>
    </article>
    <article>
      <h3>Learn in a Project-Based Environment</h3>
      <p>582 Multimedia has it's own campus, a short walk from the main campus.</p>
      <p>It houses 3 labs, a multi-function studio space, a kitchen and areas to chill with your friends.</p>
    </article>
    <article>
      <h3>Internships and Exchanges</h3>
      <p>Graduates complete a 4-week "stage" in their 6th semester. Get the work experience you need to start your design career.</p>
      <p>Exchange opportunities to go study at a university in France for a 2-week project or a full semester. Vivez et travailler en français.</p>
    </article>
  </section>
  <article id="capython-video">
      <div class="video_container">
        <iframe src="https://www.youtube.com/embed/ardvUrC6zTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
      </div>
    </article>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  #promo{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.44rem;
  }
</style>
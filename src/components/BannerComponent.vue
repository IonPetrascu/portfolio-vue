<script lang="ts" setup>

</script>
<template>
  <section>
    <div class="howdy">
      <h2>
        <span>Hi!</span>
        I'm Ion,
      </h2>
      <span class="job">frontend developer</span>
    </div>
    <div class="img">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/male-web-developer-doing-research-on-development-5691622-4759504.png"
        alt="frontend ilustration">
    </div>
  </section>
</template>
<style scoped>
section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 10px;
}

.howdy {
  span {
    display: block;
  }

  h2 {
    font-weight: 700;
    font-size: 58px;
    line-height: 121%;
    letter-spacing: -0.02em;
    color: var(--violet);
  }
}

.img {
  width: 100%;
  max-width: 450px;
}

.img img {
  max-width: 100%;
  height: auto;
  aspect-ratio: 1/1;
}

.job {
  font-weight: 700;
  font-size: 58px;
  line-height: 121%;
  letter-spacing: -0.02em;
  color: var(--black);
  color: transparent;
  -webkit-text-stroke: 1px var(--black);
}

@media only screen and (max-width: 1000px) {
  section {
    flex-direction: column;
  }
}
@media only screen and (max-width: 700px) {
  .howdy{
    h2{
      font-size: 32px;
    }
    .job{
     font-size: 32px;
  }
  }
  .img{
    max-width: 350px;
  }
}
</style>

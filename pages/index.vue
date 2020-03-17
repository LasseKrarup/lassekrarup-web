<template>
  <div>
    <Hero class="is-fullheight is-primary" :arrow="true">
      <template #first>
        <img src="~/assets/img/svg/LK_logo_white_text.svg" width="800px">
      </template>

      <template #second>
        <h1 class="title">
          {{ title }}
        </h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A impedit, voluptates provident ad eveniet rerum recusandae ducimus porro, quibusdam nesciunt nam quam. Aliquam itaque vel nobis quaerat blanditiis impedit quis dolore voluptas quas numquam iusto iure dolores, aspernatur, commodi explicabo. Dolorem sint impedit laudantium optio labore sit numquam corporis ducimus?
        </p>
      </template>
    </Hero>

    <Section>
      <Column>
        <h1 class="title">
          Drummer and session musician
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos nobis at illum debitis! Quam quae aut unde, ad saepe at recusandae in eveniet quibusdam omnis possimus esse alias beatae, excepturi repudiandae facere soluta nulla accusantium? Recusandae deserunt eligendi, magnam sed mollitia voluptatibus alias velit reprehenderit perferendis modi voluptate facere?</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis beatae eaque tempora quas minus alias, nulla quis ratione doloremque sapiente sunt vitae iste dolorem inventore enim veniam? Quia itaque ullam eaque distinctio numquam, dolores expedita quasi, quidem officia, quod dolorem ratione sunt. Earum, odio similique. Asperiores recusandae quia neque!</p>
      </Column>
      <Column direction="right">
        <img src="~/assets/img/close-up-photo-of-drum-set-995301.jpg" alt="Drummer">
      </Column>
    </Section>

    <Section :class="'is-primary'">
      <Column>
        <img src="~/assets/img/beat-business-composition-concert-258668.jpg" alt="Drummer">
      </Column>
      <Column direction="right">
        <h1 class="title">
          Lessons, gigs or design
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, quas suscipit, nulla accusamus magnam a veniam earum ea, tempore cupiditate ducimus neque dicta voluptates accusantium consectetur. Tenetur, maiores. Rem dolorum alias, ut, aspernatur illum nemo, necessitatibus corporis harum dolorem molestias in ratione quis nulla sed. Aut, sequi. Atque, assumenda alias?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor reiciendis ut provident velit tempora est eum expedita nihil ad molestiae laboriosam esse, totam ipsa veritatis qui nulla obcaecati corrupti, perferendis porro rerum necessitatibus blanditiis. Saepe fugit et officiis tempora deleniti quibusdam ullam cum sapiente! Laborum aut laudantium vitae excepturi. Mollitia.</p>
      </Column>
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from '~/components/Hero.vue'
import Section from '~/components/Section.vue'
import Column from '~/components/Column.vue'

export default Vue.extend({

  components: {
    Hero,
    Section,
    Column
  },
  data () {
    return ({
      title: 'Drummer, musician, web designer'
    })
  },
  head () {
    const title:string = this.title
    return ({
      titleTemplate: 'Lasse Krarup - %s',
      title
    })
  }
})
</script>

<style lang="scss" scoped>

</style>

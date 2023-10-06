<template>

  <div class="bg-slate-950 text-white ">


    <section>
      <div class="row py-[-50px] md:py-20 px-2 md:px-36">
        <div class="col-12 col-md-4 mx-2 md:mx-7">
          <div class="text-[60px] py-10 animate-pulse text-yellow-500">
            Get in Touch
          </div>
          <div class="row flex">
            <div class="col-4 col-md-12">
              <q-img class="border-2 md:border-4  items-center border-yellow-500 w-32 md:w-[200px] rounded-[300px]" src="~assets/p.jpg"/>
            </div>
            <div class="md:text-xl col-8 col-md-12 pl-5 md:pl-0 items-center pt-10 text-yellow-500">
              <p>If you want to add any picture or video in our any gallery, don't feel hesitate. Contact with me by WHATSAPP or EMAIL.
              <br> Thank You..
            </p>
            </div>

          </div>
          <div class="py-4">
            <div class="py-3 text-2xl text-yellow-500">Numbers</div>
            <div class="flex text-xl">
              <q-icon
                class="pt-1 pr-4 animate-bounce text-red-500"
                name="call"
              />
              <p>General : 01749470282</p>
            </div>

          </div>

          <div class="py-4">
            <div class="py-3 text-2xl text-yellow-500">Email</div>
            <div class="flex text-xl">
              <q-icon
                class="pt-1 pr-4 animate-bounce text-yellow-300"
                name="email"
              />
              <p> z.i.nayeem45@gmail.com</p>
            </div>

          </div>

          <div class="py-4">
            <div class="py-3 text-2xl text-yellow-500">Free Hour</div>
            <div class="flex text-xl">
              <q-icon
                class="pt-1 pr-4 animate-bounce text-teal-500"
                name="watch"
              />
              <p>Monday — Friday 9am – 5pm</p>
            </div>

          </div>
        </div>
        <div class="col-12 col-md-6 md:mx-7 py-10">
          <form class="py-8 bg-white rounded-xl">
            <div class="text-2xl text-gray-950 text-bold py-5 text-center">
              Send me a Message
            </div>
            <div class="px-5 md:px-20 py-10">
              <q-input
                color="secondary"
                class="py-2 border-4"
                rounded
                outlined
                v-model="text"
                label=" Name"
              />
              <q-input
                color="secondary"
                class="py-2"
                rounded
                outlined
                v-model="text"
                label="Phone number"
              />
              <q-input
                color="secondary"
                class="py-2"
                rounded
                outlined
                v-model="text"
                label="Email"
              />
              <q-input
                class="py-3"
                v-model="textareaModel"
                filled
                clearable
                type="textarea"
                color="secondary"
                label="Massege"
                :shadow-text="textareaShadowText"
                @keydown="processTextareaFill"
                @focus="processTextareaFill"
              />
              <q-btn
                to=""
                class="mx-3 px-16 py-3 text-lg"
                no-caps
                outline
                color="primary"
                label="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-3 md:mx-36 py-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.023519611964!2d90.39924681385392!3d23.782176793481053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76db868adf1%3A0xf459889a1357ede!2sBSTI%20Quarters!5e0!3m2!1sen!2sbd!4v1675079462877!5m2!1sen!2sbd"
          height="600"
          class="w-full"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    <section>
      <aboutUs />
    </section>
    <q-separator />
    <section>
      <div class="text-center text-lg bg-teal-950 text-slate-100 py-6">
        Copyright © 2023 Advance Safety Engineering | Powered by Advance Safety
        Engineering
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
